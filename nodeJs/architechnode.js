function order(orderNo) {
    pushOrdertoKitchen(orderNo);
}

function pushOrdertoKitchen(orderNo) {
console.log(`pushing Order ${orderNo} to Kitchen`);
setTimeout(function(){
    console.log(`Order Ready ${orderNo}`);
}, 5000);
}

order(1);
order(2);
order(3);
order(4);
order(5);