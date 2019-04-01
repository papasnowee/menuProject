import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import Paper from "@material-ui/core/Paper"
import TableBody from "./TableBody"
import TableHead from "./TableHead"
import { Map } from "immutable"
import { normalize, schema } from "normalizr"
import TextField from "@material-ui/core/TextField"

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
})

const flatNormalizer = items => {
  const item = new schema.Entity("items")
  const result = normalize(items, {
    data: [item],
  })
  return result.entities.items
}

class SimpleTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: "",
      data: [],
      inited: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  static propTypes = {
    searchFields: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    searchFields: ["name", "description", "title"],
  }

  static getDerivedStateFromProps({ data }, { inited }) {
    if (!inited && data && data.length > 0) {
      return { data }
    }

    return null
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  get filtredData() {
    const { search, data } = this.state
    const { searchFields } = this.props
    let filtredData = Map({})

    const lower = s => s.toLowerCase()

    const entrySeq = data =>
      data
        .entrySeq()
        .toJS()
        .map(([key, value]) => value)

    if (search.length === 0 || data.length === 0) return data

    const filter = key => {
      const result = data.filter(
        item => item[key] && lower(item[key]).includes(lower(search))
      )
      filtredData = filtredData.merge(flatNormalizer({ data: result }))
    }

    searchFields.forEach(filter)

    return entrySeq(filtredData)
  }

  render() {
    const { search } = this.state
    const { classes, rows } = this.props

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <div>
            <TextField
              type="text"
              name="search"
              value={search}
              onChange={this.handleChange}
            />
          </div>
          <TableHead rows={rows} />
          <TableBody data={this.filtredData} />
        </Table>
      </Paper>
    )
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTable)
