const getData = async()=>{
    try {
        data = await fetch("https://fakestoreapi.com/products")
        d = await data.json()
        console.log(d)
        display(d)
    } catch (error) {
        
    }

    
    
}
getData()

const display = (data)=>{
    // Creating a heading
    let body = document.body;

    let heading = document.createElement("h1")
    heading.innerHTML="Products";
    body.appendChild(heading)

    let container = document.createElement("div")
    body.appendChild(container)
    container.style=""
    data.forEach(value => {
        let product = document.createElement("div")
        container.appendChild(product)
        container.style="display:flex; flex-wrap:wrap;gap:20px; justify-content:center;align-items:center"
        product.style="border:1px solid black; border-radius:12px;height:400px;width:200px; overflow:hidden; padding:8px"

        let image = document.createElement("img")
        product.appendChild(image)
        image.src=value.image;
        image.style="height:200px;width:200px;"

        let title = document.createElement("h5")
        product.appendChild(title)
        vt=value.title
        title.innerHTML=(vt.length>30)?(`${vt.substring(0,25    )}...`):(vt);
        
        let hr = document.createElement("hr")
        product.appendChild(hr)
        
        let innercard = document.createElement("div")
        product.appendChild(innercard)
        
        let desc = document.createElement("p")
        let vd=value.description;
        desc.innerHTML=(vd.length>30)?(`${vd.substring(0,55)} ...`):(va);
        innercard.appendChild(desc);

        let category = document.createElement("p")
        category.innerHTML=value.category
        innercard.appendChild(category)
        
    });
    
}