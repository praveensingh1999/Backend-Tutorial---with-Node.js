// middleware
// middleware is a fxn that place between request and handler fxn  and middleware fxn have access to req, res, next fxn .

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.

// security -> write your name, entry time, exit time 
// parse json file
// authentication 


// 1. Application Level Middleware - middlewares bound to entire express application using app.use() or app.METHOD()
// app.use(myLogger)
// routes after this middleware will have to implement this before their handler functions

// app.get("/", myLogger, (req, res)=>{
//     console.log("Handler function reached!")
//     res.status(200).send("Welcome to the middleware root route")
// })


// 2. Custom Middlewares 

// const LoggingMiddleware = (req, res, next)=>{
//     //Logging means keeping a record of something 
//     const method = req.method
//     const path = req.path
//     const time = new Date().toLocaleTimeString();

//     console.log(`[${time}]: ${path}, ${method}`)
//     next()
// }


// app.use(LoggingMiddleware)


// 3. Builtin middlewares
// express.json()

// app.use(express.json()) // helps us in parsing the json files that we reciever on the server

// app.get("/customInfo", (req, res)=>{
//     const data = req.body;

//     res.send(data)
// })


// 4. third party middlewares
// import morgan from 'morgan';

// app.use(morgan('combined'))

// app.get("/morganUsage", (req, res)=>{
//     res.send("Welcome to morgan route")
// })







// mvc archeture

//mvc archetecture is a fundamental archetecture pattern in software development that seperate the application into three interconnected components.
// this pattern enables seperation of business logic ui logic and input logic

//model 
//route
//controller 

//mvc model veiw controller. 
//1. model - data and business logic. 
// the model represent the data layer of the application it manages the data logic and rules of application independently of the ui.
//responsibilty 
// 1. manage the validation of data.
//2. business logic
//3. implementation rules and regulation

//veiw - user interface and presentation
// veiw handles everything users see and interact with directly that is routes
// it consistes of all the routes and what paths do they have , what methods do they have

// responsiblity
//1. display the data to user
//2. responds to user requests
// 3. takes the request to the handler fxn
//controller
// logic where er handle the request where we write the handler function for all the routes.