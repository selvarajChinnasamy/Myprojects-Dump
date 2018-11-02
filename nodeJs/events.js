const event = require('events');

const myEventEmitter = new event.EventEmitter();

const callThis = function(data){
console.log('data', data);
};

myEventEmitter.on('data', callThis);

myEventEmitter.emit('data', [1, 2]);