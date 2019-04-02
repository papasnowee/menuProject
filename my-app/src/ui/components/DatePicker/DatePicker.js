import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'

const styles = {
  grid: {
    width: '60%',
  },
}

class MaterialUIPickers extends React.Component {
  handleChange = value => {
    const { onChange, name } = this.props
    if (onChange) onChange({ target: { name, value } })
  }

  render() {
    const { classes, selectedDate, label } = this.props

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label={label}
            value={selectedDate}
            onChange={this.handleChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    )
  }
}

export default withStyles(styles)(MaterialUIPickers)
