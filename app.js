// GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name} !!!`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)