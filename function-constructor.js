function createObj(name, age) {
    this.name = name;
    this.age = age;
    this.IncreaseAge = function () {
        this.age++;
    }
}

var myObj = new createObj('selva', 21);
var myObj1 = new createObj('selva', 2);

myObj.IncreaseAge.call(myObj1);


//Prototype

function foo() { }


// scops

var a = 10;
function foo() {
    var b = a;
    console.log(b);
    function foo1() {
        var b = 20;
        var c = b;
        console.log(c);
    }
    foo1();
}
foo();


var obj = [{
    name: "selva",
    designation: "JS Developer"
},
{
    name: "naveen",
    designation: "Tech Architect"
},
{
    name: "adi",
    designation: "Srum Master"
},
{
    name: "chetan",
    designation: "Lead QA"
},
{
    name: "simmy",
    designation: "QA"
},
{
    name: "vikash",
    designation: "Sr JS Developer"
},
{
    name: "reev",
    designation: "JS Developer"
},
{
    name: "parv",
    designation: "JS Developer"
},
{
    name: "anail",
    designation: "QA"
}
];

var isJSDeveloper = function (pre, current) {
    console.log(pre);
};

var myName = function (item) {
    return item.name === 'selva';
};

obj.map(isJSDeveloper);

//currying

var fun =  (a) => 
     (b) =>
     (c) => console.log(a, b, c);



//call stack
let a = 10;
function foo(){
    a = 20;
}
foo();
console.log(a);