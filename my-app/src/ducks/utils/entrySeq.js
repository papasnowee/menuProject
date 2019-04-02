export const entrySeq = data =>
  data
    .entrySeq()
    .toJS()
    .map(([key, value]) => value)
