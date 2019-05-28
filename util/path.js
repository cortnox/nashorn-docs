const path = require('path');

module.exports = path.dirname(process.mainModule.filename);//help construct and return path of the current project directory - this solve repeating code.//process is a global variable that stores this information