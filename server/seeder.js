import mongoose from 'mongoose'
import { config } from 'dotenv'
import Customer from './models/cutomerModels.js'
import { customers } from './data/customerData.js'
import connectDB from './db/connectDB.js'

config()

connectDB()

const importData = async () => {
   try {
      await Promise.all([
         Customer.deleteMany()
      ])
      await Customer.insertMany(customers)
      console.log('data imported')
      process.exit()
   } catch (err) {
      console.error(`${err} exists`)
      process.exit(1)
   }
}

const destroyData = async () => {
   try {
      await Promise.all([
         Customer.deleteMany()
      ])
      console.log('Data destroyed')
      process.exit()

   } catch (err) {
      console.log(err)
      process.exit(1)
   }
}


if (process.argv[2] === '-d') {
   destroyData()
} else {
   importData()
}