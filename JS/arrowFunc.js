//? Different Operations
const sum = (a,b)=> a+b;
  
const sub = (a,b)=> a-b;

const multi = (a,b)=> a*b;

const div = (a,b)=>a/b;

//? Main calculate fn here, we give which operation we need as an argument.
const calculate = (x,y,op) => {
    console.log(`x = ${x}`);
    console.log("y = "+y);
    return op(x,y)
}

console.log("Addition: "+calculate(5,6,sum))
console.log("Subtraction: "+calculate(5,6,sub))
console.log("Multiplication"+calculate(5,6,multi))
console.log("Division"+calculate(5,6,div))