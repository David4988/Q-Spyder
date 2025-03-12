// //? Create

// let arr = [42, "Hi", true, {name: "John"}, [1, 2], null, undefined,() => "func", Symbol("sym")];

// console.log(arr.length);

// //? Read

// console.log(arr[3]);

// console.log(arr[arr.length-1]);

// console.log(arr[7]()); // To access a fn use () after the index

// console.log(arr[4][1]);

// //? Update

// arr[1]="Bye"

// console.log(arr)

let a=[1,2,3,4,5,6,7]

// a[7]="New value"
// a[10]="Another value"
console.log(a)

// //? Delete

// delete a[7]
// console.log(a)

//? push()

a.push("New value", 6,7,null)
console.log(a)

//? pop()

console.log(a.pop())

//? shift()

a.shift()
console.log(a)

//? unshift()

a.unshift("New value", 6,7,null)
console.log(a)

//? slice()

console.log(a.slice(2,10))

//? reverse()

console.log(a.reverse())

console.log((Array.isArray(a))? "Array":"Not an array")