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

    const Rating = (rate, ratingCard) =>{
        
        console.log(rate)

        let nrate=Math.floor(rate)

        console.log(nrate);
        
        
        // if(rate<5){
            // console.log("Yay");
            
            for(let i=0;i<nrate;i++){
                let rating = document.createElement("i");
                rating.classList.add("fa-solid", "fa-star");
                rating.style.color = "#FFD43B"
                
                ratingCard.appendChild(rating)
                console.log("success")
            }
            if(rate-nrate>=0.5){
                let hRating = document.createElement("i");
                hRating.classList.add("fa-regular", "fa-star-half-stroke");
                hRating.style.color = "#FFD43B"
                ratingCard.appendChild(hRating)
            }else{
                let hRating = document.createElement("i");
                hRating.classList.add("fa-regular", "fa-star");
                hRating.style.color = "#FFD43B"
                ratingCard.appendChild(hRating)
            }
        // }else{
            // console.log("boo")
        // }
    }

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
        product.style="border:1px solid black; border-radius:12px;height:450px;width:225px; overflow:hidden; padding:8px"

        let image = document.createElement("img")
        product.appendChild(image)
        image.src=value.image;
        image.style="height:200px;width:200px;"

        let title = document.createElement("h4")
        product.appendChild(title)
        vt=value.title
        
        title.innerHTML=(vt.length>30)?(`${vt.substring(0,25    )}...`):(vt);
        
        let hr = document.createElement("hr")
        product.appendChild(hr)
        
        let innerCard = document.createElement("div")
        innerCard.style = "display:flex;flex-direction:column; align-items:center; justify-content: space-around "
        product.appendChild(innerCard)
        
        let desc = document.createElement("p")
        let vd=value.description;
        desc.innerHTML=(vd.length>30)?(`${vd.substring(0,45)} ...`):(va);
        innerCard.appendChild(desc);

        let category = document.createElement("p")
        category.innerHTML=value.category
        innerCard.appendChild(category)

        let priceCard = document.createElement("div")
        priceCard.style = "display:flex; justify-content: space-between; height:50px; width:100%;"
        innerCard.appendChild(priceCard)

        let price = document.createElement("p")
        price.innerHTML = `Rs. ${value.price}`;
        priceCard.appendChild(price)
        
        let ratingCard = document.createElement("div");
        ratingCard.style="height:100%; width: 100px;display:flex; justify-content:center; align-items:center"
        priceCard.appendChild(ratingCard);

        Rating(value.rating.rate,ratingCard)
    });
    
}

