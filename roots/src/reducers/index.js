import { combineReducers } from 'redux'
import auth from './auth.js'
import companys from './companys'

export default combineReducers({auth, companys})