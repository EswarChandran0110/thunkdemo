import { combineReducers } from "redux";

const reducer = (state={},action) => {
    switch(action.type){
            case 'Going to Get Data' :
            return {...state, myFlag: true }
            case 'Received Data' :
                return{...state, payload: action.apidata, myFlag: false}
            default:
                return state
            }
}

const rootReducer = combineReducers({
    reducer
})

export default rootReducer