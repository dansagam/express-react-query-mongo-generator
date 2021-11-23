import mongoose from 'mongoose'
import { config } from 'dotenv'

config({ path: './config/config.env' })

connectDB()

const importData = async () => {
   try {
      console.log('data imported')
      process.exit()
   } catch (err) {
      console.error(`${err} exists`)
      process.exit(1)
   }
}

const destroyData = async () => {
   try {
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