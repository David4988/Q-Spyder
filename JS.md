# JavaScript

## Introduction

### * Programming language -> language used to create programs

### * JS -> is a high-level, interpreted programming language that allows you to implement interactive features on web pages

### * Need an environment to run JS code

### * Browser -> Chrome, Firefox, Edge, Safari, Opera

### * Node.js -> runtime environment for executing JS code outside of a browser

    1. Rendering engine -> software that renders HTML, CSS and displays the results on the screen

    2.JS engine -> software that interprets JS code and executes it

### Types of Programming Languages

    1. Compiled languages -> languages that are compiled into machine code before execution

    2. Scripting languages -> languages that are interpreted at runtime

## History of JS

### * JS was created in 1995 by **Brendan Eich** in a company called **Netscape Communication Coorporations** renamed now as **Mozilla**

### * Was created in 10 days

### * First name was Mocha

### * Netscape Navigator -> browser that was very popular in the 90s

### * JSE-SpiderMonkey -> JS engine that was used in Netscape Navigatorv

### * JS was initially called LiveScript

### * ECMA -> European Computer Manufacturers Association

### * JS was standardized by ECMA in 1997

## Characteristics of JS

### * Client-side Scripting Language-> Runs on browser and no need for a server to process every action

### * Dynamically Typed Language -> no need to specify the data type of the variable

### * Weakly Typed Language -> can change the type of the variable

### * Interpreted Language -> no need to compile the code

### * Synchronous in Nature(Single-threaded) -> step by step execution

## Ways to Run JS Code

    1. Browser -> requires a HTML file (Web page)

    2. Node.js -> doesn'
    
## Ways to add JS to HTML

    1. Internal -> using the script tag in the head or body section

    2. External -> using the script tag in the head or body section

``` js
    var a = 10;
    console.log(a);

    const b = () => {
        console.log("Hello World");
    }
    b();
```

## Basic Rules for Keywords

    1. Cannot be used as identifiers

    2. Cannot be used as variables, functions, labels, etc.

## Basic Rules for Identifiers

    1. Identifiers must start with a letter, underscore(_) or dollar($) sign

    2. Identifiers can contain letters, digits, underscores and dollar signs

    3. Cannot contain spaces or special characters

    4. Cannot start with numbers
    

## Variables

    1. Variables are used like a container that stores data

    2. Variables are declared using the var, let or const keyword

|  | var | let | const |
| :--- | :---: | :---: | :---: |
| Declaration | yes | yes | no |
| Initialization | yes | yes | no |
| Declaration + Initialization | yes | yes | yes |
| Redeclaration | yes | no | no |
| Reinitialization | yes | yes | no |
| Reinitialization + Redeclaration | yes | no | no |

## Data Types

    1. Primitive Data Types (Basic Data Types) -> number, string, boolean, null, undefined

        -> stored as value
        -> stores simple data
        -> used for simple operations
        -> immutable



    2. Non-Primitive Data Types (careated using basic data types) -> object, array, function
    
        -> stores as reference
        -> stores complex data
        -> used for complex operations
        -> mutable

## Objects

    -> any programmable entity that can represent a real world entity

## Conditional Statements

    -> used to execute different blocks of code based on different conditions

    -> if, else if, if else, nested if

    -> ternary operator (condition)?trueStmt:falseStmt
    
## Itration Statements

    -> used to execute a block of code multiple times

    -> for, while, do while

    for(initialization; condition; increment/decrement){
        //code to be executed
    }


    while(condition){
        //code to be executed
    }
    

    do{
        //code to be executed
    }while(condition);

    -> for in, for of

## Functions

### * Block of code that can be used to perform a particular task whenever we want

### Calling a func -> Invoking a function

```js
    //Function declaration (function creating)
function func(){
    console.log("Good Mourning")
}

funcECMA6 = () =>{
    console.log("I'll inform you shorty")
}

//Function invocation (calling a  function)
func()
funcECMA6()
```

### By default, returns undefined

### Rules

    No restrictions
    
    Number of parameters may or may not match the number of arguments passed

### *Multiple return statements wont work, as only the first return stmt is considered

### *Even if we return multiple values using the same return stmt, only the latest value is returned

### Function types

    1.Named fn -> A function declared with an identifier

    2.First class func -> A function stored as a value to a variable
                       -> should only call with variable name, not the function
    
    3.Functional Expression -> the whole expression of storing a function in a variable

    4.Anonymous func -> a functional expression which doesnt have the function name

    5. Higher Order function -> a function which accepts another function as an argument

    6. Arrow func ->  a function which is a syntactic sugar for writing functions
                  -> is of two types
                    1. Explicit return => needs a return keyword and '{}'
                    2. Implicit return => does not need a return and {}, its in a single line

### Eg

```js
    //First class fn in functional exression
    let fn = function op(x,y){ 
    return x+y, x-y, x*y, x/y;
    }
    //Only the function oart, not the variable 'fn'
    
    // On the whole, its called as a functional expression
    console.log(fn)
```

### *If we remove the function name from the first class function, it becomes an anonymous function

### Eg

```js
    // Anonymous function
    const opera = function (x,y){
        return x+y
    }
```

### Example for callback function

```js
//! Calculator

//? Different Operations
let sum = function(a,b){
    return a+b;
}

let sub = function(a,b){
        return a-b;
}

let multi = function(a,b){
    return a*b;
}
let div = function(a,b){
    return a/b;
}

//? Main calculate fn here, we give which operation we need as an argument.
const calculate = (x,y,op) => {
    console.log("x = "+x);
    console.log("y = "+y);
    return op(x,y)
}

console.log("Addition: "+calculate(5,6,sum))
console.log("Subtraction: "+calculate(5,6,sub))
console.log("Multiplication"+calculate(5,6,multi))
console.log("Division"+calculate(5,6,div))
```

## Arrow function

### 1. No need of function **keyword 'function' and the func. name**

### 2. No need of curly braces if there is a **single statement** and it will automatically return the value(**implicit return**)

### 3. No need of paranthesis if there is a **single parameter**

### arrow functions are mainly used in callback functions

## Strings

### Collection of characters enclosed between single quotes, double quotes or backticks

### Back ticks uses "String Interpolation"

### the created string is called a template literal

Eg

```js
    let s1 = "John"
    let age = 28
    let city = "New York"

    console.log(`I am ${s1}, i am ${age} and I live in ${city}`)
```

## String Properties
    
    1. .length [do not use paranthesis with it]
    eg. 

```javascript

let s = "Yo, Genki ni shiteiru?"
console.log(s.length);

```

    2. .toUpperCase() & .toLowerCase()
    eg.

```javascript

let s = "Yo, Genki ni shiteiru?"
console.log(s.toUpperCase())
```

    3. .substring() -> returns a substring of a string

```javascript

let s = "Yo, Genki ni shiteiru?"
console.log(s.substring(0,5))

```

    4. .includes() -> checks if a string is present in another string

```javascript

let s = "Yo, Genki ni shiteiru?"
console.log(s.includes("Genki"))

```

    5. charAt() -> returns the character at a particular index

```js

console.log(s.charAt(5))

```

    6. concat() -> joins multiple strings

```js

console.log(s.concat("Hello"))

```

    7. indexOf() -> returns the index of a character in a string

```js

console.log(s.indexOf("Genki"))

```

    8.split() -> splits a string into an array

```js

console.log(s.split(" "))

```

    9.slice() -> returns a substring of a string

```js

console.log(s.slice(0,5))

```

    10.replace() -> replaces a substring in a string

```js

let s = "Good Morning, I'll reply you shortly, Kind regards"

console.log(s.replace("shortly","shorty"),("regards","retards"))

```

## Arrays

### -> collection of data stored in **contiguous memory** locations

### -> **separated by commas, enclosed within square brackets**

### -> can be **heterogenous** in nature

### -> **size of elements** in an array is not fixed and **can be changed**

### -> Arrays are **mutable**

### -> Arrays is like a **Bitch** (Gowtham's eg)

### **Array Operations**

    -> .length [dont use '()']
    -> .push() [add an element at the end of the array]
    -> .pop() [remove an element from the end of the array]
    -> .unshift() [add an element at the beginning of the array]
    -> .shift() [remove an element from the beginning of the array]
    -> .reverse() [reverses the array]
    -> .slice() [extract a part of the array]
    -> .includes()[checks if an element is present]
    ->Array.isArray[checks if it is an array]
    -> .join() [joins the array elements into a string]
    -> .splice() [add or remove (modify) elements from the array] .
    -> .splice(start, delete count, extra elements to be added)

## Object

### * A programatical representation of a real world entity

### * Key-value pair, separated by colon

### * Properties -> info about object

### Eg.

```js

const obj =  {
    Name: "Davidson",
    Age: 20,
    Hobies: ["Anime", "Genshin", "Zenless Zone Zero"],
}

console.log(obj)

```

### * Use dot notation (.) to access the properties of an object

```js   

const obj =  {
    Name: "Davidson",
    Age: 20,
    Hobies: ["Anime", "Genshin", "Zenless Zone Zero"],
}

console.log(obj.Name)

```

### * Dot notation only works when we **know the key** we ae accessing

### * But, by using Bracket notation [] we can **access the property directly**

### * So, always go for bracket notation for **dynamic access of the object**

### * When you want to create keys which **doesnt follow usual naming convention**, enclose them in **double quotes** (can only be accessed using bracket notation)

```javascript

const obj =  {
    "Name-first": "Davidson",
    "1Age": 20,
    "Hobies Games": ["Anime", "Genshin", "Zenless Zone Zero"],
}
```

### Updating

```javascript

obj.Name = "Baka"

```

### Creating a key

#### Just specify the new key to the object

```javascript

obj.DOB= "01-01-2000"

```

### Getting all keys present in an object

```javascript

console.log(Object.keys(obj))

```

### Getting all values present in an object

```javascript

console.log(Object.values(obj))

```

### Getting all key-value pairs present in an object

```javascript

console.log(Object.entries(obj))

```

### JSON (JavaScript Object Notation)

#### * A data interchange format

#### * Used for storing and transferring data between a server and a client

#### * Light-weight and easy to read

#### * JSON stores everything in a sting format, while JS stores everything in its respective format

#### * it does not allow function and undefined datatypes

#### * the keys must be a string

    JSON.stringify() -> converts a JavaScript object or value into a JSON string

    JSON.parse() -> converts a JSON string into a JavaScript object

## Advanced Loop

### Filter

#### -> filter method is used to **filter out the elements of an array based on a condition**

#### -> it returns a new array containing the elements that pass the test implemented by the provided function

#### filter(func) [So, filter is a Higher Order Function, func is the callback function]

```javascript
    
let a = [1,2,3,4,5,6,7]

let eve = a.filter((val)=> {
    return val%2==0
})

console.log(eve)

```

### Map

#### -> map method is used to **transform each element of an array into a new value**

#### -> it returns a new array

#### map(func) [So, map is a Higher Order Function, func is the callback function]

```javascript

a = [1,2,3,4,5,6]
sq = a.map((n)=> {
    return n*n
})
console.log(sq)

```

### ForEach

#### -> forEach method is used to **execute a provided function once for each element in an array**

#### -> used for iteration

#### -> it does not return any array/value

#### forEach(func) [So, forEach is a Higher Order Function, func is the callback function]

### Reduce

## Destructuring

### * used to extract data from arrays or objects into individual variables

```javascript

let arr = [1,2,3,4,5,6,7]

let [a,b,c,d,e,f,g] = arr

console.log(a,b,c,d,e,f,g)