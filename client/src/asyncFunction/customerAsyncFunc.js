import axios from 'axios'
import customerLists from '../mockdata/CUSTOMER_LIST_MOCK_DATA'
import customerDetail from '../mockdata/CUSTOMER_FULL_MOCK_DATA'

export const getCustomersFunc = async (keyword) => {
   if (process.env.REACT_APP_MOCK_DATA) {
      console.log('using the MOCK data from mockdata customer store')
      return [...customerLists]
   } else {
      const apiUrl = process.env.REACT_APP_SERVER_URL || ''
      const response = await axios.get(
         `${apiUrl}/api/v2/customers?keyword=${keyword}`
      )
      return response
   }
}
export const getCustomerByIdFunc = async (id) => {
   if (process.env.REACT_APP_MOCK_DATA) {
      console.log('using the MOCK data from mockdata customer store')
      return { ...customerDetail, _id: id }
   } else {
      const apiUrl = process.env.REACT_APP_SERVER_URL || ''
      const response = await axios.get(`${apiUrl}/api/v2/customers/${id}`)
      return response
   }
}
export const addCustomerFunc = async (newData, config) => {
   if (process.env.REACT_APP_MOCK_DATA) {
      console.log('add the new data to the mockdata store')
      return [...customerLists, newData]
   } else {
      const apiUrl = process.env.REACT_APP_SERVER_URL || ''
      const response = await axios.post(
         `${apiUrl}/api/v2/customers`,
         newData,
         config
      )
      return response
   }
}

export const updateCustomerFunc = async (id, newData, config) => {
   const apiUrl = process.env.REACT_APP_SERVER_URL || ''
   const response = await axios.put(
      `${apiUrl}/api/v2/customers/${id}`,
      newData,
      config
   )
   return response
}

export const deleteCustomerFunc = async (id) => {
   const apiUrl = process.env.REACT_APP_SERVER_URL || ''
   const response = await axios.delete(`${apiUrl}/api/v2/customers/${id}`)
   return response
}
