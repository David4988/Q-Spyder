data= "David"

//!Function declaration (function creating)

function func(name){
    console.log("Ohaio Gozaimazu "+name+" sama")
}

funcECMA6 = (name) =>{
    console.log("Ohaio Gozaimazu " + name+" sama")
}

//? Function invocation (calling a  function)
func(data)
funcECMA6(data)

//Arguments -> values passed to the function
//Parameters -> values stored and used in the function


n1 = 5
n2 = 5

sum = (x,y) =>{
    console.log(x+y);
}
function sum(x,y,z){
    console.log(x+"+"+y+"+"+z)
    console.log(z)
}
sum(n1,n2)

ret = (x,y) => {
    return x+y
}
console.log(ret(n1,n2))

const prod = (x,y) =>{
    console.log(`Given:\n x=${x}, y=${y}`)
    return x*y;
}
console.log("The product of x & y is: "+prod(n1,n2))

const div = (x,y) =>{
    console.log(`Given:\n x=${x}, y=${y}`)
    return x/y;
}
console.log("The division of x & y is: "+div(n1,n2))


const op = (x,y)=>{
    return x+y;
}
let add, diff, mult, divide = op(n1,n2);

console.log(`Sum = ${add}, Diff = ${diff}, mult = ${mult}, division = ${divide}`);

//! Hence, the function returns last value if its inline

const f= op2 = (x,y)=>{
    return x+y
    return x-y 
    return x*y
    return x/y;
}
//! Here, the function returns the value and close as soon as it sees the first return statement

//? Storing a fn inside a variable

let fn = op

console.log(func)
console.log(op)
console.log(fn)

//Named fn -> A function declared with an identifier

const oper = function funct(x,y){
    return x+y, x-y, x*y, x/y;
}

// =>Lambda function
    const opera = function (x,y){
        return x+y
    }
console.log(opera);

// ES6 function
    const operat = (x,y)=>{
        return x+y
    }

console.log(operat);


const greatest = (a,b,c) => {
    if(a>b){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b>c){
            return b
        }
        else{
            return c
        }
    }
}

console.log(greatest(1,4,3));
