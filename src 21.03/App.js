import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from './router'
import { fromJS } from 'immutable'

class App extends React.Component {
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
    const _routes = []

    function getRoute(routes) {
      routes.forEach(({ id, path, component, routes = null }) => {
        _routes.push(<Route key={id} path={path} component={component} />)
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

  get $renderMenu() {
    const { menu } = this.state

    const menuBuilder = routes =>
      routes.map(({ id, path, label, routes = null }) => (
        <li className="menu__item" key={id}>
          <Link to={path}>{label}</Link>
          {routes ? (
            <>
              <button type="button" onClick={this.handleSlideToggle(id)}>
                {menu.get(id) ? '-' : '+'}
              </button>
              <ul style={{ display: `${menu.get(id) ? 'block' : 'none'}` }}>
                {menuBuilder(routes)}
              </ul>
            </>
          ) : null}
        </li>
      ))

    return (
      <nav>
        <ul>{menuBuilder(routes)}</ul>
      </nav>
    )
  }

  render() {
    return (
      <>
        {this.$renderMenu}
        <Switch>{this.getRoutes}</Switch>
      </>
    )
  }
}

export default App
