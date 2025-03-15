

// async function getData(){ // Handled by your Worker thread
//     console.log("Before API call");
    
//     let response = await fetch("https://fakestoreapi.com/products") // Fetch returns a promise, await waits for the promise to settle(pending -> settled state)
//     console.log("After API call");
    
//     p = await response.json()
//     console.log(p)
// }
// getData();
// console.log("hello") 

const getData = async () => {
    try{
        let response = await fetch("https://api.escuelajs.co/api/v1/products")
        data = await response.json() // .json() returns a promise
    }catch(e){ // Even when faced with an error, the program flow is not stop
        console.log(e);
        
    }
    console.log(data);   
}
getData()