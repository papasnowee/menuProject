import { normalize, schema } from "normalizr"

export const flatNormalizer = items => {
  const item = new schema.Entity("items")
  const result = normalize(items, {
    data: [item],
  })
  return result.entities.items
}
