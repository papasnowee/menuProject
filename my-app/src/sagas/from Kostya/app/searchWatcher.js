import { fork, all, take, select, put } from 'redux-saga/effects'
import { delayTask } from '../utils'
import { schema, normalize } from 'normalizr'
import { Map } from 'immutable'

import {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure,
} from '../../ducks/app/search'

import {
  getIsEnvFetched,
  getEnvData,
  getIsEnvTmpFetched,
  getEnvTemplatesData,
} from '../../ducks/env'

import { getIsVmTmpFetched, getVmTemplatesData } from '../../ducks/vm'

import { envListLoadSaga, envTemplatesLoadSaga } from '../env'

import { vmTemplatesLoadSaga } from '../vm'

const dataLoaders = [
  {
    selector: getIsEnvFetched,
    dataSelector: getEnvData,
    saga: envListLoadSaga,
    table: 'env',
  },
  {
    selector: getIsEnvTmpFetched,
    dataSelector: getEnvTemplatesData,
    saga: envTemplatesLoadSaga,
    table: 'envTmp',
  },
  {
    selector: getIsVmTmpFetched,
    dataSelector: getVmTemplatesData,
    saga: vmTemplatesLoadSaga,
    table: 'vmTmp',
  },
]

const filter = (field, value) => (item, index) => {
  let res = Map({})

  const normalizer = items => {
    const result = normalize(items, {
      data: [new schema.Entity('item')],
    })
    return result.entities.item
  }

  const searcher = f =>
    (res = res.merge(
      Map(
        normalizer({
          data: item.filter(i =>
            i[f] ? i[f].toLowerCase().includes(value.toLowerCase()) : false
          ),
        })
      )
    ))

  field.forEach(searcher)
  return res.toJS()
}

function* searchWatcher() {
  while (true) {
    const {
      payload: { value, field },
    } = yield take(getSearchRequest.toString())

    try {
      let searchResult = []
      let data = []

      let selectors = yield all(
        dataLoaders.map(({ selector }) => select(selector))
      )

      function* dataReader() {
        data = yield all(
          dataLoaders.map(({ dataSelector }) => select(dataSelector))
        )
      }

      yield all(
        selectors.map((s, i) => (!s ? fork(dataLoaders[i]['saga']) : null))
      )

      yield delayTask({
        ms: 150,
        task: dataReader,
        condition: all(dataLoaders.map(({ selector }) => select(selector))),
      })

      searchResult = yield data.map(filter(field, value))

      if (searchResult.filter(arr => !!Object.keys(arr).length).length) {
        const result = []

        searchResult.forEach((item, index) => {
          if (Object.keys(item).length)
            result.push({
              data: Map(item)
                .entrySeq()
                .toJS()
                .map(([key, value]) => value),
              table: dataLoaders[index]['table'],
            })
        })

        yield put(getSearchSuccess({ result }))
      } else {
        yield put(getSearchFailure())
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default searchWatcher
