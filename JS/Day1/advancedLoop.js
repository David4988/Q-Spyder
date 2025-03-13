
let a = [1,2,3,4,5,6,7]

// let eve = a.filter((val)=> val%2==0)

// let func = (val) => { //! Callback function which returns a boolean
//     return val%2==0
// }

// let eve = a.filter(func) //! higher Order function which returns the values for which the callback function returns true
//?
// let eve = a.map((val)=> {
//     return val+1
// })
// console.log(eve)

// let even=[]
// for(let i=0; i<a.length; i++){
//     if(a[i]%2==0){
//         even.push(a[i])
//     }
// }
// console.log(even)
//?
// a=[40,70,10,20,50,60,70,60]

// b = a.filter((val)=>{ 
//     return val>50
// })
//?
// console.log(b)

// names = ["Philips", "Allen", "John", "Chris", "Smith"]

// nam = names.filter(str=>str.length>5)
// console.log(nam)

const users = [
    {
        name: 'Alice', age:25
    },
    {
        name: 'Bob', age:17
    },
    {
        name: 'Charlie', age:19
    }
]
//?
names = users.filter(str=>str.age>18)
console.log(names)

a = [1,2,3,4,5,6]
sq = a.map((n)=> n*n)
console.log(sq)

//?
arr = ['apple', 'banana', 'orange']

arrUp = arr.map((str) => str.toUpperCase())
console.log(arrUp);

nameObj = users.map((str) => str.name)
console.log(nameObj);

a.forEach((n,i)=> a[i]=n*n)

console.log(a);
