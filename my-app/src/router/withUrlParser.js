import React from "react"

export function withUrlParser(Component) {
  return class WithUrlParser extends React.PureComponent {
    urlParse(params, location) {
      const { search } = location

      const paramsFromUrl = new URLSearchParams(search)

      const map = {}
      const mapper = p => (map[p] = paramsFromUrl.get(p))

      return Array.isArray(params) ? params.forEach(mapper) : paramsFromUrl.get(params)
    }

    render() {
      return <Component urlParse={this.urlParse} />
    }
  }
}

// export function withUrlParser(Component) {
//   return class WithUrlParser extends Component {
//     urlParse(params) {
//       const {
//         location: { search },
//       } = this.props

//       const paramsFromUrl = new URLSearchParams(search)

//       const map = {}
//       params.forEach(p => (map[p] = paramsFromUrl.get(p)))

//       return Array.isArray(params) ? map : paramsFromUrl.get(params)
//     }
//   }
// }
