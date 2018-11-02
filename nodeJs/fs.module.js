const fs = require('fs');

// const readFile = fs.readFileSync('./buffer.js', 'utf8');

// fs.writeFileSync('writefile.js', readFile);

const readStream = fs.createReadStream('./buffer.js', 'utf8');

readStream.on('data', function(data){
console.log(data);
console.log('------------------------------------------------------------------------------------------------');
});



