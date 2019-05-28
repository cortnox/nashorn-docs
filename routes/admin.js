const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');//utility for fetching the project dir path.

router.get('/add-product',(req,res,next)=>{
    console.log('you just clicked v add-product button!');
    //send a response here
    res.sendFile(path.join(rootDir,'views','add-product.html'));//how can I make this dynamic? What ever html I'm about to  type here on this line, I want to type (eventually drag and drop) into the browser, so that it renders dynamically. - this should somehow be an additional argument to the RH when handeled
});

router.post('/add-product', (req,res,next)=>{
    console.log(req.body);//im interested in extracting what the user sent me//without any body parser implemented - I first need to parse the incoming request of the body, because console log currently shows the body as undefined. So I need to create a route that can parse the incoming body request inorder to see what the user has sent me and logic applied in the middleware routing will redirect the user to the next page.
    res.redirect('/');//redirect is another convenience function provided by express.
});

module.exports = router;