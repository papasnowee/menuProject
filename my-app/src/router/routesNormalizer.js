import routes from "./routes"
import memoizee from "memoizee"
import { clone } from "ramda"

function routesNormalizer(routes) {
  const normalized = {}

  const normalizer = item => {
    const cloned = clone(item)

    if (item.routes) {
      delete cloned.routes
      item.routes.forEach(normalizer)
    }
    normalized[item.id] = cloned
  }

  routes.forEach(normalizer)
  return normalized
}

const memoRoutesNormalizer = memoizee(routesNormalizer)

const routesNormalized = memoRoutesNormalizer(routes)

export { routesNormalized }
