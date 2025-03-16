
async function getDataTS() {
    console.log("Before API call");
    try{
        let response: Response = await fetch("https://fakestoreapi.com/products")
        let data:Object = (await response).json()
        console.log(data)
    }catch(e){

    }
    

    
    
}