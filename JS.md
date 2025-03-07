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

    -> if, else if, else

    -> ternary operator
    
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
