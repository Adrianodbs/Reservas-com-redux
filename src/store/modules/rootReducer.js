import { combineReducers } from 'redux'
import reserveSlice from './reserve/reducer'

const rootReducer = combineReducers({
  reserve: reserveSlice.reducer
})

export default rootReducer
