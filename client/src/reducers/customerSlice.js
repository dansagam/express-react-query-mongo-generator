import { createSlice } from "@reduxjs/toolkit";
import { getCustomersFromServer } from "./AsyncSlice/customerAsync";

export const customerSlice = createSlice({
   name: 'customer',
   initialState: {
      customers: [],
      customer: {},
      isLoading: false,
      success: {
         getSuccess: false,
         getAllSuccess: false,
         addSuccess: false,
         updateSuccess: false
      },
      customerError: {
         msg: '',
         status: null
      }
   },
   reducers: {
      clearError: (state, action) => {
         return {
            ...state,
            customerError: {
               msg: '',
               status: null
            }
         }
      },
      clearSuccess: (state, action) => {
         return {
            ...state,
            success: {
               getSuccess: false,
               getAllSuccess: false,
               addSuccess: false,
               updateSuccess: false
            }
         }
      }

   },
   extraReducers: {
      [getCustomersFromServer.pending]: (state, action) => {
         return {
            ...state,
            isLoading: true
         }
      },
      [getCustomersFromServer.fulfilled]: (state, action) => {
         return {
            ...state,
            isLoading: false,
            customers: action.payload,
            success: {
               getAllSuccess: true
            }
         }
      },
      [getCustomersFromServer.rejected]: (state, action) => {
         return {
            ...state,
            isLoading: false,
            customerError: {
               msg: action.payload.data.message,
               status: action.payload.status
            }
         }

      }
   }
})

export const { clearError, clearSuccess } = customerSlice.actions



export default customerSlice.reducer