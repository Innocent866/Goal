const express = require('express')
const app = express()
const port = process.env.PORT||8080
const connect = require('./db/mongoDB')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('./router/userRouter')


// middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// API's
app.use('/',userRouter)

// home page route
app.get('/',(req, res)=> {
  res.send('Hello World render')
})

// db connection and server
connect()
.then(()=>{
    try{
        app.listen(port, ()=>console.log(`server connected to http://localhost:${port}`))
    }catch(error){
        console.log('invalid database connection');
    }
})

