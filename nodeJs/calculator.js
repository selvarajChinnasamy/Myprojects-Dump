function Calculator(val) {
    this.val = val;
    this.one = function() {
        return new Calculator(1);
    }
    this.plus = function() {
        return this.val + '+';
    }
    this.two = function() {
        return 2;
    }
}
let calc = new Calculator();
console.log(calc.one().plus());
