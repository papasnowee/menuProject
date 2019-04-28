import React from "react"
import { Switch, Route } from "react-router-dom"
import routes from "../../../router"
import { fromJS } from "immutable"
import MenuComponent from "../../components/Menu"
import { createStructuredSelector } from "reselect"

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: fromJS({}),
      inited: false,
    }

    this.handleSlideToggle = this.handleSlideToggle.bind(this)
  }

  static getDerivedStateFromProps(props, { inited }) {
    if (!inited) {
      let menu = fromJS({})

      routes.forEach(({ id }) => (menu = menu.set(id, false)))

      return {
        menu,
        inited: true,
      }
    }

    return null
  }

  get getRoutes() {
    const _routes = [] // рекурсивнеая функция getRoute пройдется по массиву routes и пропушит массив _routes компонентами <Route/>

    const { routeRendered } = this.props

    function getRoute(routes) {
      routes.forEach(({ id, routePath, routes = null, component: Component }) => {
        //хитрая деструктуризация component: Component
        _routes.push(
          <Route
            key={id}
            path={routePath}
            render={props => {
              routeRendered({ id }) // функция от объекта {id: значение айди}
              return <Component {...props} />
            }}
            exact
          />
        )
        if (routes) getRoute(routes)
      })
    }
    getRoute(routes)

    return _routes
  }

  handleSlideToggle = id => e => {
    const { menu } = this.state
    this.setState({ menu: menu.set(id, !menu.get(id)) })
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  render() {
    return (
      <>
        <MenuComponent
          routes={routes}
          handleSlideToggle={this.handleSlideToggle}
          menu={this.state.menu}
        />
        {this.$renderMenu}
        <Switch>{this.getRoutes}</Switch>
      </>
    )
  }
}

export default HomePage
