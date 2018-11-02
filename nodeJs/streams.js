var fs = require('fs');

var data = fs.createReadStream('buffer.js', 'utf8');

data.on('data', (data) => console.log('--------------------------------------------------', data));

data.on('end', (data) => console.log('End.'));

data.on('error', (data) => console.log('Error.'));