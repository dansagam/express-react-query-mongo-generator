import { configureStore } from '@reduxjs/toolkit'
import customerSlice from '../reducers/customerSlice'

export const store = configureStore({
   reducer: {
      customer: customerSlice
   }
})