function  getData(event){
    event.preventDefault()
    console.log("form submitted")
    console.log(event)
let Name = document.getElementById("name").value
let age = document.getElementById("age").value

    console.log(Name)
    console.log(age)
}

form = document.querySelector("form")
form.addEventListener("submit",getData)