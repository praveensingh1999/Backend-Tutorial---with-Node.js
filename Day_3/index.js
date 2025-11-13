import express from 'express';

const app = express();

// to identify a middleware fxn look at the argumentand it should have a next argument
const  myLogger = (req, res, next)=>{
    console.log("logger!");
    next();
}


app.get("/before", (req, res)=>{
    console.log("before middleware ");
    res.send("before midlleware")
})
// implementtation of a middleware
// this middleware will be applicable on all the routes that are written after this in this file
app.use(myLogger)


// this middleware will enble only for this route
app.get("/middleware", myLogger, (req, res)=>{
    console.log("this mylogger middleware will be applicable for  this route only ");
    res.send("done");
})
app.get("/response", (req, res)=>{
    console.log("handler fxn reached");
     res.status(200).json({
        message: "response data you get",
        status: "success"
     })
})

app.listen(3000, ()=>{
    console.log("server is running at 3000 port");
})