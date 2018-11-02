let syncFun = function() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i <= 100; i++) { if(i === 100){resolve(i)} }
    });
}
module.exports.syncFun = syncFun;
