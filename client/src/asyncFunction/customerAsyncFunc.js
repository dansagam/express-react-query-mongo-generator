import axios from 'axios'

export const getCustomersFunc = async (keyword) => {
   const response = await axios.get(`/api/v2/customers?keyword=${keyword}`)
   return response
}
export const getCustomerByIdFunc = async (id) => {
   const response = await axios.get(`/api/v2/customers/${id}`)
   return response
}
export const addCustomerFunc = async (newData, config) => {
   const response = await axios.post(`/api/v2/customers`, newData, config)
   return response
}

export const updateCustomerFunc = async (id, newData, config) => {
   const response = await axios.put(`/api/v2/customers/${id}`, newData, config)
   return response
}

export const deleteCustomerFunc = async (id) => {
   const response = await axios.delete(`/api/v2/customers/${id}`)
   return response
}