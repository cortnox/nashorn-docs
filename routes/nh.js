const path = require('path');//use OS to get to this file and send the location
const express = require('express');
const router = express.Router(); //equivelent to app.express();
const rootDir = require('../util/path');//utility for fetching the project dir path.

router.get('/nh',(req,res,next)=>{
    console.log('you just clicked the nh button.');
    res.sendFile(path.join(rootDir,'views','nh.html'));//statically sends file. - nashorn documentation.
});

module.exports = router;
