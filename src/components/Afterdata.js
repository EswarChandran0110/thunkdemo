import React from 'react'
import {connect} from 'react-redux';

function Afterdata({myStatus,myData}) {

  // let a = myState.myData 

  return (
    <div>
        {!myStatus}
        ?
        { console.log(myData)}
        {/* {myData.map((item) => (
           <div>
            <ul id={item.id} key={item.id}>
              <li>{item.userId}</li>
              <li>{item.title}</li>
            </ul>
           </div>
        ))}
        */}
        :
        null
        </div>
  )
}

const mapStateToProps = (state) => ({
      //  "myState" : {
       myStatus: state.myFlag,
       myData: state.payload
      //  }
})

export default connect(mapStateToProps,null) (Afterdata)