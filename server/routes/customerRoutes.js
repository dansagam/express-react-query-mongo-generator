import express from "express"
const router = express.Router()
import {
   addCustomer,
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
   .delete()

export default router