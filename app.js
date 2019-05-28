const path = require('path');//
const rootDir = require('./util/path');
const http = require('http');//provides runtime functionalty - creating server , listen for incoming requests on the web-browser
const express = require('express');//which will do all the heavy lifting so that we can mainly and simply focus on the business logic
//const routes = require('./routes');//vanilla nodejs route handler that can only handle a string//commented out to be replaced with express routes
const app = express();//run the express object(app) as a exported function by instantiating (app)//app stores of express logic//sets is a key characteristic of express
//console.log(routes.someText);//vanilla
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');//the adminRoutes is connected to the admin.js file - so that refractored code is used in the main app.
const shopRoutes = require('./routes/shop');//the adminRoutes is connected to the shop.js file - so that refractored code is used in the main app.
const nhRoutes = require('./routes/nh');

//lets register a body parser here so that our routing is able to handle and process the body and its data submitted by the user.//for this i dont want to reinvent the wheel so I'm going to use a third party package called body-parser which can be installed with $> npm install --save body-parser |.
app.use(bodyParser.urlencoded({extended: false}));//based on the documentation and usage the urlencoded() register is actually an imbedded middleware with a next() function, that will take the raw contents of the request (html|json|some file|etc - (content-type what ever is inthe body.)) and parse it into an accessable object that can then be handelled by the our own middleware routes//

app.use('/admin',adminRoutes);//'/admin' is a route filtering mechnanism. for this route requests must prefix with the '/admin/' common segment
app.use('/nh', nhRoutes);
//all middleware beyond "/" must not pass "/" middleware, it is vital that middleware is ordered correctly inorder for handeling to behave as desired. - any middleware that is beyond "/" will not execute - becuase the code cannot be reached logically.
app.use(shopRoutes);
/****************************************************************************************************************************************************************************************************************************** */
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));    //res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});
//const server = http.createServer(app);//app can be used as a valid request handler -- next we need to define the logic to handle the incoming requests
app.listen(3000);

// app.use((req,res,next)=>{
//    console.log('did I just execute this message?');
//    next();//throw execution to the next middle ware
// });//routes(middleware) gives express its 'pluggable' nature//pass a function to app.use((req,res,next)=>{});//this will execute for every incoming request.//this allows us to hook into this particular 'funnel' through which the request is sent
// app.use('/',(req,res,next)=>{
//     console.log('this always runs -> did I just execute this message?');
//     //send a response here
//     res.send('<h1>Hello</h1>');//how can I make this dynamic? What ever html I'm about to  type here on this line, I want to type (eventually drag and drop) into the browser, so that it renders dynamically.
//     next();
//  });