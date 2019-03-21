import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from './router'
import withStylesWithParams from './components/WithStylesWithParams'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

function withStyleWithMyOptions(options) {
  const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })

  class SimpleListMenu extends React.Component {
    state = {
      anchorEl: null,
      selectedIndex: 1,
    }

    handleClickListItem = event => {
      this.setState({ anchorEl: event.currentTarget })
    }

    handleMenuItemClick = (event, index) => {
      this.setState({ selectedIndex: index, anchorEl: null })
    }

    handleClose = () => {
      this.setState({ anchorEl: null })
    }

    render() {
      const { classes } = this.props
      const { anchorEl } = this.state

      return (
        <div className={classes.root}>
          <List component="nav">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="When device is locked"
              onClick={this.handleClickListItem}
            >
              <ListItemText
                primary="When device is locked"
                secondary={options[this.state.selectedIndex]}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      )
    }
  }
  return withStyles(styles)(SimpleListMenu)
}

class App extends React.Component {
  get getRoutes() {
    const _routes = []

    function getRoute(routes) {
      routes.forEach(({ path, component, routes = null }) => {
        _routes.push(<Route path={path} component={component} />)
        if (routes) getRoute(routes)
      })
    }
    getRoute(routes)

    return _routes
  }

  get $renderMenu() {
    function menuBuilder(routes) {
      const menuItem = []

      routes.forEach(({ path, component, label, routes = null }) => {
        if (routes) {
          const options = [
            <li className="menu__item">
              <Link to={path}>{label}</Link>
              {routes ? <ul>{menuBuilder(routes)}</ul> : null}
            </li>,
          ]
          const WithStylesWithParams = withStyleWithMyOptions(options)
          menuItem.push(WithStylesWithParams)
        }
      })
      return menuItem
    }

    return (
      <nav>
        <ul className="menu">{menuBuilder(routes)}</ul>
      </nav>
    )
  }

  render() {
    return (
      <>
        <ul>{this.$renderMenu}</ul>
        <Switch>{this.getRoutes}</Switch>
      </>
    )
  }
}

export default App
