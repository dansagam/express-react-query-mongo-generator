import express from "express"
const router = express.Router()
import {
   addCustomer,
   deleteCustomer,
   getAllCustomerList,
   getCustomerByid,
   updateCustomer
} from "../controllers/customerControllers.js"



router.route('/')
   .get(getAllCustomerList)
   .post(addCustomer)

router.route('/:id')
   .get(getCustomerByid)
   .put(updateCustomer)
   .delete(deleteCustomer)

export default router