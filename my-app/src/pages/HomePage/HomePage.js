import React from "react"
import { Switch, Route } from "react-router-dom"
import routes from "../../router"
import { fromJS } from "immutable"
import MenuComponent from "../../components/Menu"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.handleSlideToggle = this.handleSlideToggle.bind(this)
  }

  state = {
    menu: fromJS({}),
    inited: false,
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

    function getRoute(routes) {
      routes.forEach(({ id, path, component, routes = null }) => {
        _routes.push(<Route key={id} path={path} component={component} exact />)
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
