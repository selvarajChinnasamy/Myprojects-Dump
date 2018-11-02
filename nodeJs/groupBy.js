let a = [{ type: "Dog", name: "Spot" },
{ type: "Cat", name: "Tiger" },
{ type: "Dog", name: "Rover" },
{ type: "Cat", name: "Leo" }];
key = "type";

a = a.reduce((pre, newv) => {
(pre[newv[key]] = pre[newv[key]] || []).push(newv);
return pre;
}, {});

console.log(a);