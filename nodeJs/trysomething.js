// const net = require('net');
// const colors = require('colors');
// const server = net.createServer();
// server.listen(9000, ()=>console.log('The server Listening on the port 9000'.green, server.address()));
// server.on('connection', (socket)=>{
//     // console.log('connection Extablished', socket);
//     console.log('connection Extablished'.green);
//     socket.write('hello');
//     socket.on('data', (data)=> {
//         console.log(data);
//         socket.write('hello');
//     });
// });

//blocking scope
// function foo() {
//     var a = 10;
//     console.log('first', a);
//     (function(){
//         var a = 20;
//         console.log('second', a);
//     }())
//     console.log('third', a);
// }
// foo();


//areo function -> Don't do this
// let a = {
//     name : 'selva',
//     age : 21,
//     currentAge :  () =>{ this.age = this.age + 1; console.log(this.age) }
// }
// a.currentAge();

//one last process

// process.on('uncaughtExpection', (err) => {
//     fs.writeSync(1, `Caught Expection : ${err}`);
// });