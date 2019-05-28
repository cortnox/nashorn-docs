
const path = require('path');//core module - 
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
//specifyng as GET route will throw "Cannot GET /<whatevercouldnotbehandled>" //this gives me a chance to setup a 404 page if the user types in an undentified request
router.get('/',(req,res,next)=>{
    //console.log('thanks to next(), Yes, you did just execute that message!');
    //send a response here    //res.send('<h1>Hello</h1>');//how can I make this dynamic? What ever html I'm about to  type here on this line, I want to type (eventually drag and drop as file) into the browser, so that it renders dynamically.
    //res.sendFile('./views/shop.html');//this allows us to send an entire html file for this root//I want funtionality where this can be dynamically added.//however we get TypeError: path must be absolute or specify root to res.sendFile, This means that the request is looking for file inside the '/' root directory, but it cant find it. We need something that can construct the path correctly.
    res.sendFile(path.join(rootDir,'views','shop.html')); //the join method builds a workable path by concatinating different segments.//__dirname is a global variable that conveniently holds the absolute file path name on the OS - to this project folder. this basically concats [project dir]+[folder within project dir] + [file within folder of project dir .html] - this is a useful utility that allows the server to runs on windows mac or linux OS's
});

module.exports = router;