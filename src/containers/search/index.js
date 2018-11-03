import React from 'react'

const Search = props => {
  let params = new URLSearchParams(props.location.search)
  let paramsObject = {}
  for (let param of params) {
    paramsObject[param[0]] = param[1]
  }

  return( 
    <div>
      <p>Hello { paramsObject.name || 'whatever-your-name-is' }!</p>
      { paramsObject.message ? <p>Your message: { paramsObject.message }</p> : <p>Your query string is: { props.location.search }</p> }
    </div>
  )
}

export default Search
