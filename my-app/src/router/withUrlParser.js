import { PureComponent } from "react"

export function withUrlParser(Component) {
  return class WithUrlParser extends PureComponent {
    urlParse(params) {
      const {
        location: { search },
      } = this.props

      const paramsFromUrl = new URLSearchParams(search)

      const map = {}
      params.forEach(p => (map[p] = paramsFromUrl.get(p)))

      return Array.isArray(params) ? map : paramsFromUrl.get(params)
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
