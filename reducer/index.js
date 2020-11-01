import {
  combineReducers
} from 'redux'
import config from './config'
import layouts from './layouts'
import auth from './auth'
import database from './database'

const rootReducer = combineReducers({
  config,
  auth,
  layouts,
  database
})

export default rootReducer