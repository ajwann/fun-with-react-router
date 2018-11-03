import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Search = props => {
  let params = new URLSearchParams(props.location.search)
  let paramsObject = {}
  for (let param of params) {
    paramsObject[param[0]] = param[1]
  }

  return( 
    <div>
      <h1>React Router Demo</h1>
      <p>Welcome { paramsObject.name || 'to my react-router demo app!' }</p>
      { paramsObject.message ? <p>Your message: { paramsObject.message }</p> : <p>Your query string is: { props.location.search }</p> }
      <button onClick={() => props.changePage()}>About this app</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Search)
