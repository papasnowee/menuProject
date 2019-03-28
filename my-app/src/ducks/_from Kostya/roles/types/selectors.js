import createImmutableSelector from 'create-immutable-selector'
import { fromJS, List } from 'immutable'

export const getIsTypesOfRolesFetching = createImmutableSelector(
  state => state.getIn(['roles', 'types', 'isFetching']),
  substate => substate
)

export const getIsTypesOfRolesFetched = createImmutableSelector(
  state => state.getIn(['roles', 'types', 'isFetched']),
  substate => substate
)

export const getTypesOfRoles = createImmutableSelector(
  state => state.getIn(['roles', 'types', 'data']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
      .sort((a, b) => a.crDate - b.crDate)
)

export const getTypesOfRolesNormalized = createImmutableSelector(
  state => state.getIn(['roles', 'types', 'data']),
  substate => substate.toJS()
)

export const getTypesOfRolesWithAbilities = createImmutableSelector(
  state => getIsTypesOfRolesFetched(state),
  state => getTypesOfRoles(state),
  (isFetched, substate) => {
    if (isFetched) {
      let roleTypesWithAbilities = fromJS({})

      /**
       * формирование группы абилок
       */
      substate
        .filter(r => r.parentId === null)
        .forEach(
          r =>
            (roleTypesWithAbilities = roleTypesWithAbilities
              .setIn([r.type], r)
              .setIn([r.type, 'abilities'], List([])))
        )

      /**
       * формирование подгрупп абилок
       */
      substate
        .filter(r => r.parentId !== null)
        .forEach(
          r =>
            (roleTypesWithAbilities = roleTypesWithAbilities.updateIn(
              [r.type, 'abilities'],
              arr => arr.push(r)
            ))
        )

      return roleTypesWithAbilities
        .entrySeq()
        .toJS()
        .map(([key, value]) => {
          /**
           * сортировка заголовков подгрупп абилок по алфовиту
           */
          value.abilities.sort((a, b) => {
            const aName = a.name.toLowerCase()
            const bName = b.name.toLowerCase()
            if (aName > bName) return 1
            if (aName < bName) return -1
            return 0
          })

          return value
        })
    }

    return null
  }
)
