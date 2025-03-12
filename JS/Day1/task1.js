// let s = "xyz@gmail.com";

// console.log(s.toUpperCase().slice(s.indexOf("@")+1))

// //?Task2: Create a unique identifier from email address. First 3 letters of email, a dash, length of email and convert it into capital case

mailId= "davidson@gmail.com"

const uniqueId = (mailId) =>{
    _3letters = mailId.slice(0,3)
    returnID = ""
    console.log( returnID.concat(_3letters, "-", mailId.length).toUpperCase())
}

uniqueId(mailId)

// //?Task3 Build an online cart, User adds an element it is added to the cart . After each action, display the length of the cart 

// cart = []
// const add = (cart, element) =>{
//     cart.push(element);
//     console.log(`pushed ${element} into the cart\n`)
// }

// const remove = (cart, element) => {
//     cart.splice(cart.indexOf(element),1);
//     // console.log(cart)
//     console.log(`removed ${element} into the cart\n`)
    
// }

// const cartAct = (cart, element, op) =>{
//     // console.log(`operation u want to perform:${op}`)
//     op(cart,element)
//     console.log(`cart: ${cart}`)
//     console.log(`Items in cart: ${cart.length}\n`);
// }
// cartAct(cart, 5, add);
// cartAct(cart, 4, add);
// cartAct(cart, 1, add);
// cartAct(cart, 2, add);
// cartAct(cart, 4, remove);

// //?Task4 Managing Ticket System. New customers are added to queue. Once customer is served remove from the queue. If a vip customer added to the start of the queue.

// let queue = []

// const add = (q, type, customerName) => {
//     if(type == "VIP"){
//         console.log(`customer: ${customerName} is a VIP`);
//         q.unshift(customerName);
//     }
//     else{
//         q.push(customerName)
//         console.log(`Customer ${customerName} is in the queue`)
//     }
// }
// const remove = (q) =>{
//     customer= q.shift();
//     console.log(`Customer ${customer} has cleared`)
// }

// const manageQ = (q, action, customerName, type) => {
//     action(q, type, customerName);
//     console.log(`Queue: [${q}]`)
// }
// manageQ(queue, add, "Gowtham", "VIP")
// manageQ(queue, add, "Davidson", "regular")
// manageQ(queue, add, "Harley", "regular")
// manageQ(queue,remove)

// //? Task 5: You have a product description, in that, check if the word free exists. If it is, convert it into complementry

// prodDesc = "Breakfast and lunch are free"

// const prodDescConv = (desc) =>{
//     return (desc.includes("free")?(desc.replaceAll("free", "complementary")):(desc))
// }
// console.log(prodDescConv(prodDesc))

//? Task 6: You are building a search feature for a website. Clean the input of extra whitespaces, convert it into lower string, replace all hyphens with space and also, check if the word sale is present in it.

let input = "   asd f ghjkl    "

const searchCleanUp = (input) => {
    console.log(`The given input after cleaned: ${input.trim().toLowerCase().replaceAll("-"," ")}`);
    (input.includes("sale"))?(console.log(`The word sale is present`)):console.log("The word sale is not present")
}
searchCleanUp(input)

//? Task 7:

let friendList = ["asdfghj"]

const removeAdd = (list, start, del, ...newAdd)=>{
    list.splice(start, del, ...newAdd)
    console.log(list)
}

const manageFriends = (list, action, start, end, friends)=>{
    
    action(list, start, end, friends)
    
}
manageFriends(friendList, removeAdd, 0, 1, ["Rajiv", "Magesh", "Kanishk"])