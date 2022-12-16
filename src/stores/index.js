import {applyMiddleware, createStore,compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

//approach 1 to add thunk - here we are adding thunk via applymiddleware with the reducers
const store = createStore(reducers, applyMiddleware(thunk))
//approach 2 to add thunk - here we are adding thunk directly with the createStore, both the approaches were different but serves same.
// const store = applyMiddleware(thunk) (createStore(reducers))
//approach 3 to add thunk - here we are adding thunk using compose keyword
// const store = createStore(reducers,compose(applyMiddleware(thunk)))

export default store