---
marp: true
theme: gaia
style: |
  section.lead h1 {
  text-align: center;
  }
  section.middle li{
  text-align: center;
  }
---
<!-- headingDivider: 2 -->
<!--
theme: gaia
class: lead
-->
# Node-Solid : Solidify Node Skills
 Executing Node
Node API
Strems
Asycn Node

# Executing Node

## Node overview
* The most popular JavaScript runtime to emerge in the last few years
* Node is used by millions of developers to build web applications
  * Twitter, Facebook, Google, Instagram, etc.
* we can build simple web application to large scale application 
* using electron we can build desktop application
* node can also be build hardware embedded application
* build apps end-to-end with one language that is JavaScript

## background
* A page is a collection of elements that are rendered on the screen.
  * it consists of HTML, CSS, and JavaScript
  * and DATA from the Server side
* some server side languages to serve data 
  * PHP, Python, Ruby, Java, etc.
* Node will allows us to write both client and server side code in one language

## node.js features
* Node.js has computer features like accessing files and writing to files
  * it can also access the network
  * it can also access the hardware
  * it can also access the database 
* these are c++ specific features that interact with os directly 
* when JS works with C++ to control the computer features it is called Node.js 

## JavaScript Node and Computer
<style scoped> { font-size : 1.5em; }
</style>
JavaScript does three things (1 with c++s help)
1. Saves the data and functionality [numbers, strings, objects]
2. Executes the data and functionality 
3. Has a way to communicate with the computer using c++ features

* var, let and const are stored in memory
* function are stored in the heap, heap is a large memory space
  * function have a execution context
    * this is the scope of the function and the variables that are in the function
    * the function execution context is created when the function is called its temporary and destroyed when the function is done

# Node API
## calling Node in JS
* `http` - is a server side library that allows us to create a server that can be accessed from the internet
* there are 6400 entry points to the http library
*  we ask c++ to create a server and then we can access the server from the internet, so we set the port to 80
```js
  const http = require('http'); // require is a function that is used to import a module
  const server = http.createServer(); // create a server
  server.listen(80); // listen to port 80
```

## Calling methods in node
* if we want to run a function to run we pass it in createServer and then we call the listen method
* `executeFunction(incomingData, setOutGoingData)` a custom function to log to the console
```js
  const http = require('http'); // require is a function that is used to import a module
  const server = http.createServer(executeFunctions); // create a server and execute the logToConsole function
  executeFunction(incomingData, setOutGoingData) {
    console.log(incomingData);
    setOutGoingData().end('Hello World'); // end is a node function that sends the data to the client
  };
 
  server.listen(80); // listen to port 80
```

## calling function under the hood
* node will execute the function and then return the result
* it will also add the arguments to the function
* node automatically create TWO JS OBJECTS FOR US 
  * incomingData - the data that is coming in from the client
  * setOutGoingData - the data that is going out to the client 
* `end` - is a node method that will send data to node which will then be sent to client
* `setOutGoingData.end('welcome')` - will send the data to the client

## Q&A 
* Q: how do we know what method to use to send data to the client?
* A: we look up node docs and find the method that is used to send data to the client is `end`
* Q: who do we know we have to use port 80?
* A: 80 is the default port that node will use if we don't specify a port and that is what we are using in the code

## Req and Res
* 3 parts of HTTP Req
  * request type - GET, POST, PUT, DELETE
  * headers - meta data about the data that is sent to the server 
  * body - the data that is sent to the server

## Express 
* We have to look into in bound request we have to conditionally answer the request.
* Express is a framework that we can use to create a server that can be accessed from the internet, that helps us set up middle ware that analyzes the inbound request and response 
* middle ware patters passes the object through the function and then passes it to the next function to send back the right data 
* Express is a web framework that allows us to create a server that can be accessed from the internet
* Express is a node module that we can use to create a server `const express = require('express')`
* it can be used to create a server that can be accessed from the internet. 
```JavaScript
  const express = require('express'); // require is a function that is used to import a module
  const app = express(); // create a server
  app.listen(80); // listen to port 80

  app.get('/', (req, res) => { // create a route
    res.send('Hello World'); // send the data to the client
  });
```

# HTTPRequestObject
```js 
const tweets = [
  { id: 1, text: 'Hello World' },
  { id: 2, text: 'Hello Universe' },
  { id: 3, text: 'Hello Galaxy' },
];
function doThisOnIncomingData(incomingData, functionToSetOutgoingData) {
  const tweet = tweets[incomingData.id];
  functionToSetOutgoingData(tweet);
}
const http = require('http'); // require is a function that is used to import a module
const server = http.createServer(doThisOnIncomingData); // create a server and execute the logToConsole function
server.listen(80); // listen to port 80
```