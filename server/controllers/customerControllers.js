import customerService from "../services/customerService.js";

export const getAllCustomerList = (req, res, next) => {
   try {
      const keyword = req.query.keyword ? {
         name: {
            first_name: {
               $regex: req.query.keyword,
               $options: 'i',
            },
            last_name: {
               $regex: req.query.keyword,
               $options: 'i',
            }
         },
      } : {}
      // const customers = customerService.getAllCustomers({ ...keyword })
      customerService.getAllCustomers({ ...keyword }, (error, customers) => {
         if (error) {
            res.status(404)
            throw new Error('Customers not found')
         } else {
            res.status(201).json({
               success: true,
               count: customers.length,
               data: customers
            })
         }
      })
      // if (customers) {
      //    res.status(201).json({
      //       success: true,
      //       data: customers
      //    })
      // } else {
      //    res.status(404)
      //    throw new Error('Customers not found')
      // }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const getCustomerByid = async (req, res, next) => {
   try {
      const customerId = req.params.id
      // const foundCustomer = customerService.getCustomerById(customerId)
      customerService.getCustomerById(customerId, (error, foundCustomer) => {
         if (error) {
            res.status(404)
            throw new Error('Customers not found')
         } else {
            res.status(201).json({
               success: true,
               data: foundCustomer
            })
         }
      })
      // if (foundCustomer) {
      //    res.status(201).json({
      //       success: true,
      //       data: foundCustomer
      //    })
      // } else {
      //    res.status(404)
      //    throw new Error('Customers not found')
      // }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const addCustomer = async (req, res, next) => {
   try {
      const { age, dob, last_name, first_name, mobile_number } = req.body
      const newData = {
         name: {
            first_name: first_name,
            last_name: last_name
         },
         age: age,
         dob: new Date(dob),
         phone_number: {
            mobile_phone_number: mobile_number
         }
      }
      // const addedCustomer = await customerService.addCustomer(newData)
      customerService.addCustomer(newData, (err, addedCustomer) => {
         if (err) {
            res.status(404)
            throw new Error('Customers cannot be added')
         } else {
            res.status(201).json({
               success: true,
               data: addedCustomer
            })
         }
      })
      // if (addedCustomer) {
      //    res.status(201).json({
      //       success: true,
      //       data: addedCustomer
      //    })
      // } else {
      //    res.status(404)
      //    throw new Error('Customers cannot be added')
      // }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const updateCustomer = (req, res, next) => {
   try {
      const { age, dob, last_name, first_name, mobile_number } = req.body
      const newData = {
         name: {
            first_name: first_name,
            last_name: last_name
         },
         age: age,
         dob: new Date(dob),
         phone_number: {
            mobile_phone_number: mobile_number
         }
      }
      customerService.getCustomerById(req.params.id, (err, result) => {
         if (err) {
            res.status(404)
            throw new Error('Customer not found')
         } else {
            result.name.first_name = first_name
            result.name.last_name = last_name,
               result.age = age
            result.dob = dob
            result.phone_number.mobile_phone_number = mobile_number
            customerService.updateCustomer(result._id, result, (err, updatedCustomer) => {
               if (err) {
                  res.status(404)
                  throw new Error('Customer updated cannot be donw')
               } else {
                  res.status(201).json({
                     success: true,
                     data: updatedCustomer
                  })
               }
            })
         }
      })
      customerService.updateCustomer(req.params.id, newData)

   } catch (err) {
      res.status(400)
      next(err)
   }
}