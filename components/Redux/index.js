import { configureStore } from '@reduxjs/toolkit'
import mySlice from './reducer'

export const store = configureStore({
  reducer: {
    card: mySlice,
  },
})
