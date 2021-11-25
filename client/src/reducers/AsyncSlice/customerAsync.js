import { createAsyncThunk } from "@reduxjs/toolkit";
import {
   addCustomerFunc,
   deleteCustomerFunc,
   getCustomerByIdFunc,
   getCustomersFunc,
   updateCustomerFunc
} from "../../asyncFunction/customerAsyncFunc";

export const getCustomersFromServer = createAsyncThunk('customer/getCustomers',
   async (arg, { getState, rejectWithValue }) => {
      try {
         const { data } = await getCustomersFunc()
         return data.data
      } catch (err) {
         return rejectWithValue(err.response)
      }
   }
)
export const getCustomerByIdFromServer = createAsyncThunk('customer/getCustomerById',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await getCustomerByIdFunc(id)
         return data.data
      } catch (err) {
         return rejectWithValue(err.response)
      }
   }
)
export const addNewCustomerToServer = createAsyncThunk('customer/addNewCustomer',
   async (newData, { rejectWithValue }) => {
      try {
         const { first_name, last_name, mobile_number, age, dob } = newData

         const posted = {
            name: {
               first_name: first_name,
               last_name: last_name
            },
            phone_number: {
               mobile_phone_number: mobile_number
            },
            age: age,
            dob: dob
         }
         const config = {
            headers: {
               "Content-Type": "application/json"
            }
         }

         const { data } = await addCustomerFunc(posted, config)
         return data.data
      } catch (err) {
         return rejectWithValue(err.response)
      }
   }
)


export const deleteCustomerFromServer = createAsyncThunk('customer/deleteCustomer',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await deleteCustomerFunc(id)
         return data.data
      } catch (err) {
         return rejectWithValue(err.response)
      }
   }
)

export const updatedCustomerToServer = createAsyncThunk('customer/updateCustomer',
   async (receivedData, { rejectWithValue }) => {
      try {
         const { _id, first_name, last_name, mobile_number, age, dob } = receivedData

         const posted = {
            name: {
               first_name: first_name,
               last_name: last_name
            },
            phone_number: {
               mobile_phone_number: mobile_number
            },
            age: age,
            dob: dob
         }
         const config = {
            headers: {
               "Content-Type": "application/json"
            }
         }
         const { data } = await updateCustomerFunc(_id, posted, config)
         return data.data
      } catch (err) {
         return rejectWithValue(err.response)
      }

   }
)