import Customer from "../models/cutomerModels.js"


const getAllCustomers = (newData, callback) => {
   Customer.find(newData, callback)
}
// const getAllCustomers = async (newData, callback) => {
//    return await Customer.find(newData, callback)
// }
// const getCustomerById = async (id, callback) => {
//    await Customer.findById(id, callback)
// }
// const addCustomer = async (newData) => {
//    await Customer.create(newData)
// }
// const deleteCustomerById = async (id) => {
//    await Customer.findByIdAndDelete(id)
// }
// const updateCustomer = async (id, newData) => {
//    await Customer.findByIdAndUpdate(id, newData, { new: true })
// }
const getCustomerById = (id, callback) => {
   Customer.findById(id, callback)
}
const addCustomer = (newData, callback) => {
   Customer.create(newData, callback)
}

const deleteCustomerById = (id, callback) => {
   Customer.findByIdAndDelete(id, callback)
}

const updateCustomer = async (id, newData, callback) => {
   await Customer.findByIdAndUpdate(id, newData, { new: true }, callback)
}


const customerServices = {
   getAllCustomers: getAllCustomers,
   getCustomerById: getCustomerById,
   addCustomer: addCustomer,
   deleteCustomerById: deleteCustomerById,
   updateCustomer: updateCustomer
}
export default customerServices