var x = new Promise((resolve, reject) => {
    return resolve('print promise response');
    // for (let i = 0; i< 100000000; i++) {
    //     if (i === 100000000) {
    //         return resolve('print promise response');
    //     }
    // }
});

console.log(x);
var y = '';
x.then((res) => {
    console.log('response --- ', res);
    y = res;
});
console.log('y --- ', y);
console.log('outside');