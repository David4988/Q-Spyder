
console.log("start")
setTimeout((greet) => {
    console.log("Processing")
    console.log(greet)
}, 2000,"Good Morning") //? setTimeout(handler,timeOut, n[] arguments)

let id=setInterval(()=>{
    console.log("Processing interval");
},3000)
console.log(id)
let id2=setTimeout(()=>clearInterval(id),8000)
console.log(id)
clearTimeout(id2)

console.log("end")