

let body = document.body
console.log(document.body);

let section = document.createElement("section")
section.style="flex"

let container = document.createElement("div")
container.style = "background-color:black; height:500px;width:500px"
body.appendChild(container)

let heading1 = document.createElement("h1")
heading1.textContent = "Created h1 using JS"
console.log(heading1);

container.appendChild(heading1) //parent_element.appendChild(tag)
heading1.style.color="red"
heading1.style.border="1px solid black" // element.style.property="value"
container.setAttribute("class","container") //element.setAttribute("attribute","value")

