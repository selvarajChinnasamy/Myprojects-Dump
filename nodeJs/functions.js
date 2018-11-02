var a = {x:2};
function mutate(c) {
c.x = 12;
}
console.log(a);
mutate(Object.assign({}, a));
console.log(a);