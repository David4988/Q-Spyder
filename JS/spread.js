
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

let arr = [...arr1, ...arr2, ...arr3]

console.log(arr)

let obj1 = {
    Name: "John",
    Age:30,
}
let obj2 = {
    Name: "John",
    City: "Chennai"
}
console.log({...obj1, ...obj2})