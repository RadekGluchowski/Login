import { combineReducers } from 'redux';
import { loginAppReducer } from './loginAppReducer'

export const rootReducer = combineReducers({
    loginAppReducer: loginAppReducer
})