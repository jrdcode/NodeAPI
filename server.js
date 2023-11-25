require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const app = express()

const PORT = process.env.PORT || 3000
const HELLO = process.env.HELLO

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes

app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog My name is Jason')
})

mongoose.set('strictQuery', false)
mongoose
  .connect(`${HELLO}`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`)
    })
    console.log('connected to MongoDB')
  })
  .catch(() => {
    console.log(error)
  })
