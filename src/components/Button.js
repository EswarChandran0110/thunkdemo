import React from 'react'
import { receivedData } from '../actions'
import { connect } from 'react-redux'

function Button({actionFunction}) {
  return (
    <div>
        <button onClick={actionFunction}>Click here</button>
    </div>
  )
}

const mapDispatchToProps = {
  actionFunction : receivedData
}

export default connect(null, mapDispatchToProps)(Button)