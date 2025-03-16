# Basics of TypeScript

## Intro

### What is TypeScript?

- TypeScript is a superset of JavaScript that adds static types.
- It was developed by Microsoft and first released in 2012.
- TypeScript compiles to plain JavaScript, making it compatible with any browser or JavaScript engine.

### Why Use TypeScript?

- **Static Typing**: Helps catch errors at compile time rather than runtime.
- **Enhanced IDE Support**: Provides better autocompletion, navigation, and refactoring.
- **Improved Code Quality**: Encourages better coding practices and maintainability.

## Basic Types

### **Primitive Types:**

- **Number**: Represents both integer and float-point numbers

```typescript
let name:number = 30
```

- **String**: Represents textual data.

```typescript
let name:string = "Jane Doe"
```

- **Boolean**: Represents boolean values.

```typescript
let is active = true
```

### Special Types

- **Any**: Represents any datatype and disables type checking

- **Void**: Represents the absence of any value, commonly used for functions that do not return a value.

```typescript
    function logMessage(message: string): void {
        console.log(message);
    }
```

- **Null and Undefined**: Represent the absence of a value.

```typescript
let n: null = null;
let u: undefined = undefined;
```

## Arrays and Tuples

### **Arrays**

- Arrays can be defined with a specific type.

```typescript
    let numbers: number[] = [1, 2, 3];
```

### **Tuples**

- Tuples allow you to express an array with a fixed number of elements whose types are known.

```typescript
    let user: [string, number] = ["Alice", 25];
```

## Type Inference

### * A feature in TS that allows to automatically determine the type of a given variable by its value

```typescript
    let numbers = 5
```

## Parameters & Arguments

### * Unlike functions in JS, the **number of arguments given** must match to the **number of parameters present**

```typescript
const subt = (x:number,y:number) =>{
    return x-y
}
// subt(2,3,4) //! Expected 2 arguments, but got 3.

// subt(2) //!Expected 2 arguments, but got 1.ts(2554) function.ts(10, 24): An argument for 'y' was not provided.
```

### We can specify the **return type** of a function by **mentioning it after the parameters**

### By default, a function returns a type of "any".

```typescript
 const prod = (x:number, y:number):number => `${x*y}`

// console.log(prod(5,6)) //! Type 'string' is not assignable to type 'number'.
```

## Arrays

- Arrays can be defined as a type of object that can store multiple values of the **same datatype**

### Two types of Arrays

1. Square bracket notation

```ts

let arr1 = [1,2,3]
let arr2 = [1,'a',true]

```

2. generic Array`<type>` notation

```ts

let arr1: Array<number> = [1,2,3]
let arr2: Array<string> = [1,'a',true]

```

## Objects

- represents a **collection of properties,** each with a **key** and an associated **value**.

- The properties of an object can have **specific types** and an obj. itself can be annotated with a type, often defined using an **interface** or **type alias**.

- **Type aliases** are often used to **define custom types** that can be used throughout the codebase.

```typescript

type Params = {
    Name:string;
    Age:number;
    Hobbies: string[];
    FavGames: string[];
    KnownLang: string[];
    Addr: object;
    eat: () => string;
    play: () => string;
    sleep: () => string;
}

const person:Params = {
    Name:`Davidson`,
    Age:20,
    Hobbies: [`Anime`, `Genshin`, `Zenless Zone Zero`],
    FavGames: [`Genshin`, `Zenless Zone Zero`, `Honkai Star Rail`, `Honkai Impact 3`,`Sekiro`, `Ghost of Tsushima`],
    KnownLang:[`Tamil`, `English`, `Japanese`],
    Addr: {
                No: `17`,
                Street: `Vasantham Apts`,
                City: `Chennai`,
                State: `TamilNadu`,
            },
    eat: () => `He is sleeping`,
    play:() => `Playing Z`,
    sleep:()=> `He is sleeping`,
}

```

- We can specify that a property is *optional* by adding a question mark (?) after the property name.

## Intersection types

### * Combine multiple types into a single type by using the *intersection operator **'&'***

## Union

### * Combine multiple types into a single type by using the *union operator *'|'

### Used to declare a type that can have one of several possible types

```typescript

type Color = 'number' | 'string' | 'null';
const numbers = (string | number)[] = [1,2,3,4,5,6,7]

```

## Literal Types

### * A type that can only be a **specific literal** value

```typescript

let color: "red" | "green" | "blue";

color = "red" ; // valid
color = "yellow" //invalid

```

## Tuples

### * an array with **fixed number** of elements, where each element can have a different type

``` typescript

const games: [string, number, string] = ["Jason", 20, "Sophomere"]
console.log(games);

```

## Enums

### * way to define a set of **named constants**

```typescript

enum personEnum{
    Name = "Davidson",
    Age = 20,
    Hobbies = "Guitar, Anime, Games"
}

console.log(`Name: ${personEnum.Name}`)

console.log(personEnum)

```

## Interface

### * a way to define a **contract for the shape of the object**

### * specifies the **properties and types** that an *object must have*

### * they are not only used to define the structure of an object, but also to describe the shape of functions and classes

``` typescript

interface MovieDetails{
    readonly name: string,
    ratings: number,
    printMovieInfo(name: string,price:number,ratings:number): string | number;
}

interface MovieGenre extends MovieDetails{
    genre:string
}
const movie1:MovieGenre = {
    name:"Star Wars",
    genre: "Action",
    ratings:8.9,
    printMovieInfo(
        name: string,
        price:number,
        ratings:number
    ): string | number {
        return `Movie Name: ${name}, Price: ${price}, Rating: ${ratings} `
    },
};

```

### **Declaration Merging**

#### * The ability to extend or augment an existing declaration

#### * allows you to add new properties or methods to an existing interface without modifying the original declaration

``` typescript

interface MovieDetails{
    readonly name: string,
    ratings: number,
    printMovieInfo(name: string,price:number,ratings:number): string | number;
}

interface MovieDetails{
    genre:string
}

const movie1:MovieDetails = {
    name:"Star Wars",
    genre: "Action",
    ratings:8.9,
    printMovieInfo(
        name: string,
        price:number,
        ratings:number
    ): string | number {
        return `Movie Name: ${name}, Price: ${price}, Rating: ${ratings} `
    },
};

```

## Type Narrowing

### * process of refining a variable's type within a conditional block of code

### mechanisms provided by type narrowing

- Type guards -> uses typeof operator to filter the type of a variable

- The instanceof operator -> use it to check whether an obj. is an instance of a particular class or a constructor

- Intersection types
