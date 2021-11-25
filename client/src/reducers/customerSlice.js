import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
   name: 'customers',
   initialState: {
      customers: [],
      customer: {},
   },
   reducers: {

   }
})



export default customerSlice.reducer