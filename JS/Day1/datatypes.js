console.log("Primitive Datatypes:\n");


//TODO String
let a= "Hello"
console.log(a)
console.log("datatype of "+a+" is: "+typeof(a))

//TODO Bool
let b= true
console.log(b)
console.log("datatype of "+b+" is: "+typeof(b))

//TODO Number
let c= 3
console.log(c)
console.log("datatype of "+c+" is: "+typeof(c))

//TODO Null
let d= null
console.log(d)
console.log("datatype of "+d+" is: "+typeof(d))

console.log("\n\nNon Primitive Datatypes:\n ")

//! Object

let e = {
    Name: "Pagani",
    Drive: () => {
        console.log("Start")
    },
}
// function drive(){
//     console.log();
// }
console.log(e)
console.log("datatype of "+e+" is: "+typeof(e))

//! Array

let f = [0,1,2,3,4,5]
console.log(f)
console.log("datatype of "+f+" is: "+typeof(f))