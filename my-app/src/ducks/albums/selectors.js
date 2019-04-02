import createImmutableSelector from "create-immutable-selector"
import { entrySeq } from "../utils"

export const getIsFetchingAlbums = createImmutableSelector(
  state => state.getIn(["albums", "isFetching"]),
  substate => substate
)

export const getIsFetchedAlbums = createImmutableSelector(
  state => state.getIn(["albums", "isFetched"]),
  substate => substate
)

export const getAlbums = createImmutableSelector(
  state => state.getIn(["albums", "data"]),
  substate => entrySeq(substate)
)

export const getAlbumsNormalized = createImmutableSelector(
  state => state.getIn(["albums", "data"]),
  substate => substate.toJS()
)
