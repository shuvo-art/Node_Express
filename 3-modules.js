// GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-graned')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)