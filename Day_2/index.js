import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// root route   http://localhost:3000/


//express provides us with a very clean way of handling what we recieve as a request and what we can send back as a response 
//req, res -> request and response objects that are provided by express 
// app.get("/", (req, res)=>{
//     console.log("root route is called");
//     const header = req.headers;
//     const body = req.body;
//     const ip = req.ip //gives us the ip address of the request
//     const path = req.path //on which path we have recieved request
//     const protocol = req.protocol //using which protocol 
//     const hostname = req.hostname 
//     const method = req.method //method of the request
//     const route = req.route
//     const url = req.url

   // res.send({header, body}); // send in json format
   // res.send("welcome to node.js and express.js"); // send plain text
 //res.send("<h1>welcome to node.js</h1>") // send html element
//  res.send({
//     name: 'praveen'
//  })    // send json format

 // res.send([1,2,3,4,5]) // send array also
// res.json({
//     name: "ram", // send in json formate

// })

// res.sendFile(__dirname + '/index.html'); // send file also





//})


// dynamic routing

//route parameters
//dynamic routes use parameters as placeholders in url path, define with a colon(:)
// these params act as a varibles that caputure values from the url


// app.get("/user/:username/:age", (req, res)=>{
//     const username = req.params.username;
//     const age = req.params.age;
//     res.send(`welcome to the server ${username}, with age ${age}`);
// })


//query parameters
// for searching , query parameters are key value pairs appended to the url after a question mark(?)
// that allow clients to pass additional information to the server without changing the route structure
// root route/search?q=tech&name=praveen
app.get("/search", (req, res)=>{
    const query = req.query.q;
    const name = req.query.name;
    res.send(`You search for ${query} and name : ${name}`);
})

// diference between route params and query params is in route params we always pass data in path is mandatory
// where as in query params we have optional to pass data if not pass then it store undefined.
// here is route params is  hard code here the search paramter is mandatory but in query params search paramter is optional .

app.listen(3000, ()=>{
    console.log("server is running at 3000");
})

