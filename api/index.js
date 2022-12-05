const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
require('dotenv').config()

const port = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log('database connected')
})

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})