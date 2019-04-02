import About from "./About"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  getIsFetchingNews,
  getIsFetchedNews,
  getNews,
  getNewsRequest,
} from "../../../ducks/news"

const mapStateToProps = state => ({
  isFetching: getIsFetchingNews(state),
  isFetched: getIsFetchedNews(state),
  news: getNews(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getNewsRequest,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
