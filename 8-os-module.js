const os = require('node:os')

const user = os.userInfo()
console.log(user)

// info about system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)