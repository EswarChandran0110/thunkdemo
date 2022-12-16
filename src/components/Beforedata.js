import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {receivedData} from '../actions'

function Beforedata({myStatus},{actionFunction}) {

  useEffect(()=>{
     myDataFetch()
  })
 const myDataFetch = async (actionFunction) => {
        const myResponse = await fetch('https://jsonplaceholder.typicode.com/albums')
        const responseInJson = await myResponse.json()
        console.log(responseInJson)
        actionFunction(responseInJson)
        // return responseInJson
  }

  return (
    <div>
        {myStatus}
        ?
        <div>
           <center><h1> Hey We are Waiting for Data</h1></center>
        </div>
        :
           null
    </div>
  )
}

const mapDispatchToProps = {
  actionFunction : receivedData
}

const mapStateToProps = (state) => ({
          myStatus : state.myFlag
})

export default connect(mapStateToProps,mapDispatchToProps)(Beforedata)