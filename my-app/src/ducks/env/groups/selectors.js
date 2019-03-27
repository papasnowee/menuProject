import createImmutableSelector from 'create-immutable-selector'
import { flatNormalizer } from '../../utils'
import { Map } from 'immutable'

export const getIsEnvGroupsFetching = createImmutableSelector(
  state => state.getIn(['env', 'groups', 'isFetching']),
  substate => substate
)

export const getIsEnvGroupsFetched = createImmutableSelector(
  state => state.getIn(['env', 'groups', 'isFetched']),
  substate => substate
)

export const getEnvGroupsData = createImmutableSelector(
  state => state.getIn(['env', 'groups', 'data']),
  substate => substate
)

export const getEnvGroups = createImmutableSelector(
  state => getEnvGroupsData(state),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

export const getEnvGroupsNormalized = createImmutableSelector(
  state => getEnvGroupsData(state),
  substate => substate.toJS()
)

export const getGroupsTree = createImmutableSelector(
  state => getEnvGroups(state),
  substate => {
    /**
     * поиск узлов дерева первого уровня
     */
    let tree = Map(
      flatNormalizer({ data: substate.filter(g => g.parentId === null) })
    )

    let diff = substate.filter(g => g.parentId !== null)

    /**
     * рекурсивное построение дерева
     */
    const treeBuilder = node => parentPath => {
      const children = diff
        .filter(i => i.parentId === node.id)
        .sort((a, b) => (new Date(a.crDate) > new Date(b.crDate) ? 1 : -1))

      const prevPath = parentPath.length ? parentPath : [node.id, 'children']

      if (children.length) {
        tree = tree.setIn(prevPath, Map(flatNormalizer({ data: children })))

        children.forEach((node, index) =>
          treeBuilder(node, index)([...prevPath, node.id, 'children'])
        )
      }
    }

    tree.forEach(node => treeBuilder(node)([]))

    return tree.toJS()
  }
)
