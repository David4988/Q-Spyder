//? Arrow function
const add = (x:number, y:number) =>x+y;

console.log(add(5,6));

// console.log(add("a","b")) //! Type 'string' is not assignable to type 'number'.

//? No of arguments must match the No of Parameters

const subt = (x:number,y:number) =>{
    return x-y
}
// subt(2,3,4) //! Expected 2 arguments, but got 3.
// subt(2) //!Expected 2 arguments, but got 1.ts(2554) function.ts(10, 24): An argument for 'y' was not provided.

//? Explicit specification of return type of a function

const prod = (x:number, y:number) => `${x*y}` //! This function has a return type "any"

// const prod = (x:number, y:number):number => `${x*y}`

// console.log(prod(5,6)) //! Type 'string' is not assignable to type 'number'.