// es6 
import express from 'express'
const app = express(); // this called an instance of express

// delopedon port
// port - interface through which our application access the network.

// port listner - here we want to receive the request meant for this server.

app.listen(3000, ()=>{
    console.log(`server is runing on http:localhost:3000/`)
})

