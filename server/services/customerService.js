import Customer from "../models/cutomerModels.js"


const getAllCustomers = (newData = {}) => {
   return new Promise((resolve, reject) => {
      Customer.find(newData).then((result) => {
         if (result && result.length > 0) {
            resolve(result)
         } else if (result && result.length === 0) {
            reject(new Error('No Customer found'))
         } else {
            reject(new Error('Query not Commplete'))
         }
      })
   })
}
const getCustomerById = (id) => {
   return new Promise((resolve, reject) => {
      Customer.findById(id).then(result => {
         if (result) {
            resolve(result)
         } else {
            reject(new Error('No Customer found'))
         }
      })
   })
}
const addCustomer = (newData) => {
   return new Promise((resolve, reject) => {
      Customer.create(newData)
         .then(result => {
            if (result) {
               resolve(result)
            } else {
               reject(new Error('Customer could not be ad, please check your data'))
            }
         })
   })
}

const deleteCustomerById = (id) => {
   return new Promise((resolve, reject) => {
      Customer.findByIdAndDelete(id)
         .then(result => {
            if (result) {
               resolve(result)
            } else {
               reject(new Error('Customer could no be deleted'))
            }
         })
   })
}

const updateCustomer = (id, newData) => {
   return new Promise((resolve, reject) => {
      Customer.findByIdAndUpdate(id, newData, { new: true })
         .then(result => {
            if (result) {
               resolve(result)
            } else {
               reject(new Error('Customer detail could not be updated, please check yout data'))
            }
         })
   })
}

// const getAllCustomers = (newData, callback) => {
//    Customer.find(newData, callback)
// }
// const getCustomerById = (id, callback) => {
//    Customer.findById(id, callback)
// }
// const addCustomer = (newData, callback) => {
//    Customer.create(newData, callback)
// }

// const deleteCustomerById = (id, callback) => {
//    Customer.findByIdAndDelete(id, callback)
// }

// const updateCustomer = async (id, newData, callback) => {
//    await Customer.findByIdAndUpdate(id, newData, { new: true }, callback)
// }


const customerServices = {
   getAllCustomers: getAllCustomers,
   getCustomerById: getCustomerById,
   addCustomer: addCustomer,
   deleteCustomerById: deleteCustomerById,
   updateCustomer: updateCustomer
}
export default customerServices