import React from "react"

export function withUrlParser(Component) {
  return class WithUrlParser extends React.Component {
    urlParse(params, location) {
      const { search } = location
      const paramsFromUrl = new URLSearchParams(search)

      const map = {}
      const mapper = p => (map[p] = paramsFromUrl.get(p))
      return Array.isArray(params) ? params.forEach(mapper) : paramsFromUrl.get(params)
    }

    render() {
      return <Component urlParse={this.urlParse} {...this.props} />
    }
  }
}
