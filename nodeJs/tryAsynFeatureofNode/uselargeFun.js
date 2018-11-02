// let func = require('./largeSyncFunction');
// console.log('test0');
// func.syncFun().then(res => {
//     console.log(res);
// });
// console.log('test1');

function start(){
    return new Promise((resolve, reject) =>{
        for(let i = 0;i<= 1000000000;i++) {
            if(i === 1000000000) {
               resolve();
            }
        }
    });
}
function clbc() {
    console.log('call back');
}
console.log('before');
var x = start().then(res => clbc());
console.log('value of x = ', x);
console.log('after');