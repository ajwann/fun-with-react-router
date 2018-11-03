import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = (props) => (
  <div>
    <p>Welcome to my React Router demo app.<br />
    Navigate to /search with a query string that contains<br />
    a 'name' param and a 'message' param!</p>
    <button onClick={() => props.changePage('/search')}>Search</button>
    <button onClick={() => props.changePage('/about')}>About</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (route) => push(route)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
