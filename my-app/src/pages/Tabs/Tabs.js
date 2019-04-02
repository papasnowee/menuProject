import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Login from "../../components/forms/Login"
import Registration from "../../components/forms/Registration"

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

function tabsWithOnLogin(onLogin) {
  return function SimpleTabs() {
    const [value, setValue] = React.useState(0)
    function handleChange(event, newValue) {
      setValue(newValue)
    }
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Войти" />
            <Tab label="Зарегистрироваться" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Login onLogin={onLogin} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Registration onLogin={onLogin} />
          </TabContainer>
        )}
      </div>
    )
  }
}

export default tabsWithOnLogin
