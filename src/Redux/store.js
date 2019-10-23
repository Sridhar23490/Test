import {createStore, combineReducers} from 'redux'
import {tabReducer} from './Reducers/HeaderTabsReducer'
import {imgReducer} from './Reducers/HeaderTabsReducer'
import {productReducer} from './Reducers/HeaderTabsReducer'
import {historyReducer} from './Reducers/HeaderTabsReducer'



// const redux = require('redux')
// const combineReducers = redux.combineReducers


const rootReducer = combineReducers({
    tabReducer, imgReducer, productReducer,historyReducer
})

const store = createStore(rootReducer)
// console.log(store.getState())

export default store