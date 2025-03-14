
const data= "David"

//!Function declaration (function creating)

function func(name){
    console.log("Ohaio Gozaimazu "+name+" sama")
}

const funcECMA6 = (name) =>{
    console.log("Ohaio Gozaimazu " + name+" sama")
}

//? Function invocation (calling a  function)
func(data)
funcECMA6(data)

//Arguments -> values passed to the function
//Parameters -> values stored and used in the function


const n1 = 5
const n2 = 5

const sum = (x,y) =>{
    console.log(x+y);
}
function sum1(x,y){
    console.log(x+y)
}
sum(n1,n2)

interface Func {
    (name: string): void;
}

interface Sum {
    (x: number, y: number): void;
}

interface Prod {
    (x: number, y: number): number;
}

const product: Prod = (x, y) => {
    console.log(`Given:\n x=${x}, y=${y}`);
    return x * y;
};
console.log("The product of x & y is: "+product(n1,n2))

