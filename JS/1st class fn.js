// let sum = function(a,b){
//     return a+b;
// }

// const calc = function(a,b,add){ // sum is called here as a callback function add
//     return add(a,b);
// }

// console.log(calc(1,2,sum))

    //! Calculator

    //? Different Operations
    let sum = function(a,b){
        return a+b;
    }

    let sub = function(a,b){
        return a-b;
    }

    let multi = function(a,b){
        return a*b;
    }
    let div = function(a,b){
        return a/b;
    }

    //? Main calculate fn here, we give which operation we need as an argument.
    const calculate = (x,y,op) => {
        console.log("x = "+x);
        console.log("y = "+y);
        return op(x,y)
    }

    console.log("Addition: "+calculate(5,6,sum))
    console.log("Subtraction: "+calculate(5,6,sub))
    console.log("Multiplication"+calculate(5,6,multi))
    console.log("Division"+calculate(5,6,div))