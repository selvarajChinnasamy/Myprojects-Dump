const util = require('util');
const event = require('events');

function Person(){};

util.inherits(Person, event.EventEmitter);

const myObj = new Person();

const callThis = function(data){
    console.log('data', data);
    };

myObj.on('data', callThis);
myObj.emit('data', [1, 2, 3]);

console.log(myObj);