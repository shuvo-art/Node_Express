// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');
const customEmitter = new EventEmitter();   

// on and emit methods

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
});

customEmitter.on('response', (...args) => {
    const [name, id, arg3, arg4 ] = args;
    console.log(`${name} data received user ${id} with id:${arg3} and ${arg4}`);
});

customEmitter.emit('response', 'john', 34, 'book', 'pen'); 
