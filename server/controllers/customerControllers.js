import customerService from "../services/customerService.js";

export const getAllCustomerList = async (req, res, next) => {
   try {
      const keyword = req.query.keyword ? {
         name: {
            first_name: {
               $regex: req.query.keyword,
               $options: 'i',
            },
         },
      } : {}
      const customers = await customerService.getAllCustomers({ ...keyword })
      if (customers) {
         res.status(201).json({
            success: true,
            data: customers
         })
      } else {
         res.status(404)
         throw new Error('Customers not found')
      }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const getCustomerByid = async (req, res, next) => {
   try {
      const customerId = req.params.id
      const foundCustomer = await customerService.getCustomerById(customerId)
      if (foundCustomer) {
         res.status(201).json({
            success: true,
            data: foundCustomer
         })
      } else {
         res.status(404)
         throw new Error('Customers not found')
      }
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
      const addedCustomer = await customerService.addCustomer(newData)
      if (addedCustomer) {
         res.status(201).json({
            success: true,
            data: addedCustomer
         })
      } else {
         res.status(501)
         throw new Error('Customers cannot be added, check you data, please')
      }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const updateCustomer = async (req, res, next) => {
   try {
      const { age, dob, last_name, first_name, mobile_number } = req.body
      const foundCustomer = await customerService.getCustomerById(req.params.id)
      if (foundCustomer) {
         foundCustomer.name.first_name = first_name
         foundCustomer.name.last_name = last_name
         foundCustomer.age = age
         foundCustomer.dob = dob
         foundCustomer.phone_number.mobile_phone_number = mobile_number
         const updatedCustomer = await customerService.updateCustomer(foundCustomer._id, foundCustomer)
         if (updatedCustomer) {
            res.status(201).json({
               success: true,
               data: updatedCustomer
            })
         } else {
            res.status(404)
            throw new Error('Customer updated cannot be donw')
         }
      }
   } catch (err) {
      res.status(400)
      next(err)
   }
}
export const deleteCustomer = async (req, res, next) => {
   try {
      const deletedCustomer = await customerService.deleteCustomerById(req.params.id)
      if (deletedCustomer) {
         res.status(201).json({
            success: true,
            message: "customer Deleted"
         })
      } else {
         res.status(404)
         throw new Error('Customer not found')
      }
   } catch (err) {
      res.status(400)
      next(err)
   }
}
      // customerService.getCustomerById(req.params.id, (err, result) => {
      //    if (err) {
      //       res.status(404)
      //       throw new Error('Customer not found')
      //    } else {
      //       result.name.first_name = first_name
      //       result.name.last_name = last_name,
      //          result.age = age
      //       result.dob = dob
      //       result.phone_number.mobile_phone_number = mobile_number
      //       customerService.updateCustomer(result._id, result, (err, updatedCustomer) => {
      //          if (err) {
      //             res.status(404)
      //             throw new Error('Customer updated cannot be donw')
      //          } else {
      //             res.status(201).json({
      //                success: true,
      //                data: updatedCustomer
      //             })
      //          }
      //       })
      //    }
      // })
      // customerService.getCustomerById(customerId, (error, foundCustomer) => {
      //    if (error) {
      //       res.status(404)
      //       throw new Error('Customers not found')
      //    } else {
      //       res.status(201).json({
      //          success: true,
      //          data: foundCustomer
      //       })
      //    }
      // })