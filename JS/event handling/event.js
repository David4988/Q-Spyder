const clicked = (e) => {
    console.log("Hello");
    console.log(e);
    

}
let button = document.querySelector("button");
button.addEventListener("dblclick",clicked)

let div = document.querySelector("div")
div.addEventListener("mouseenter",(e)=>console.log("enter"))
div.addEventListener("mouseleave", (e)=>console.log("leave"))
div.addEventListener("mousemove", (e)=>console.log("moving"))
// let section = document.querySelector("section");
// section.addEventListener("mousemove")
button.removeEventListener("dblclick",clicked)