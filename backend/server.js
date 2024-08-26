require('dotenv').config()

const express = require ('express')
const mongoose = require ('mongoose')

//express app
const app = express()
const userRoutes = require('./routes/user')

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/register',userRoutes)
app.use('/api/login',userRoutes)


//connect to mongodb
mongoose.connect(process.env.MONG_URI)
   .then(() => {
       console.log('connected to mongodb')
       //listen for requests
       app.listen(process.env.PORT, () => {
       console.log('Connected to DB and listening on port', process.env.PORT)
})
   })
    .catch((err) => {
         console.log(err)
    })




