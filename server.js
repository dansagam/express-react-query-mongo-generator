import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import connectDB from './db/connectDB.js'
config({ silent: true })
const app = express()

connectDB()
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'))
}

app.use(express.json())



const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/client/build')))

   app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   )
} else {
   app.get('/', (req, res) => {
      res.send('API is running')
   })
}

const PORT = process.env.PORT || 5000
app.listen(
   PORT, () =>
   console.log(`server running in  ${process.env.NODE_ENV} mode on port ${PORT} 🔥 !`)
)