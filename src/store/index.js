import { configureStore } from '@reduxjs/toolkit'

import reserveReducer from './modules/reserve/reducer'

const store = configureStore({
  reducer: {
    reserve: reserveReducer
  }
})

export default store
