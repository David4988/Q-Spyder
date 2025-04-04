# Reactjs

## Intro

### * React is a *JavaScript library* for building user interfaces

| Library | FrameWork|
|---------|---------|
| A collection of functions which you can use however you want | A collection of libraries|
| No proper syntax, no proper rules | Has a proper syntax and rules|
| Doesnt provide you with everything| Provides you with everything|
| Needs additional libraries | Doesnt need additional frameworks |
| Eg. Reactjs|Eg. Angular, Tailwind |

### * Used to create *Single page applications*

| Single page | Multipage|
|------------|---------|
| Has a **single** html page | Has **multiple** HTML files, navigates from one file to another|
| requests are **continuous**| requests always **start from zero** |
| Renders **different data** based on some **conditions** | Needs to **fetch multiple** HTML pages |
| Not Search Engine Optimized | Search Engine Optimized |
| **Takes much time** to load at the **start**, then its faster than multi page| Same loading speed for all pages |

### * Single Page Application idea in 2002

### * 2009 Angularjs was created as the first single page application, but had so many bugs and errors (also didnt have a component based Arch.)

### * Reactjs was created in 2011 by Facebook with the dev Jordan Walke

### *  But was tested and was open-sourced in the year 2013 for public use

## Characteristics

- free and open source

- is a JS Library

- Component based arch. -> dividing webpage into components and call them when required

![React Characteristics](./React-Char.png)

- Declarative -> no need to specify each and every step to perform a task

- Unidirectional -> data only flows from parent to child

- Learn Once, write anywhere -> can use it for mobile, web apps

- Virtual DOM(Diffing Algo.) -> a copy of the actual DOM, adding any component will be done on Virtual DOM. Then the VDOM will be compared with the Real DOM and only the changes will be applied on the Real DOM. The complete process is called ***Reconcilation***

### * DOM -> Tree like stucture of the web page

## Virtual DOM

![Virtual DOM](./Virtual-DOM.png)

### * Exact Copy of real DOM

### * A real dom is created by the browser

### * Virtual DOM is created by Reactjs

### * Changes are made on the Virtual DOM first, then using Diffing algorithm the changes are identified and applied on the Real DOM

### diffing -> comparing real dom with the virtual DOM

### Grouping the changes and 

## Creating a react App

### Go to src folder and create a folder named **main.jsx**

### perform these steps

```jsx

import React from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")).render(<h1>Hello</h1>) //Creating the root element by selecting it from the index.html using getElementById() and rendering the h1 tag
```

### **Creating a React Element using createElement()**

```jsx
let obj = React.createElement("h1", {id:"first"}, "Created using React createElement")
ReactDOM.createRoot(document.getElementById("root")).render(obj) //Creating the root element by selecting it using getElementById()

```

## Rules of JSX

### * Since the above method is complecated, we use .jsx

### * JSX elements must be closed

### * JSX expressions must have one parent element

### * to provide class, use className in JSX, to provide 'for' attribute is 'htmlFor' as 'class' is a keyword in JS

### * inbuilt tags must be in lower case, attributes must be in camel case

### * custom tags must me in Pascal case

### * Use {} for JSX expression

## React Fragment

### ``<React.Fragment>`` is used for enclosing multiple elements as, creting sections and divs unnecessarily, creates extra nodes, which is bad for performance

### An alternate for that is ``<></>`` empty fragment

### 

## * Using JS in JSX

### * We use JS expressions inside a `{}`

### * We can pass number, string and array

### * We can use those JS expressions that can return a value

### * We cant use bool, null and undefined types

### `filter()`, `map()` and `ternary operators` could be used in JSX Expressions

## Components

### * a reusable, independent, js functions that can be used multiple times within an application

### * Components allows us to break down the UI into smaller parts

### * In 2019, React introduced "React Hooks", which made function based components stateful

## Types of Components

1. Function Based Component

2. Class Based Component

## Creating Components

1. Create them in the ``src`` folder - must be a JSX file

2. The first alphabet of the file name must be in caps Eg ``App.jsx``

3. Syntax may be class or function based

4. Then export your component

5. And import it with proper address whenever you want and use custom defined tag (wraped inside angular braces)

### * Component composition -> calling the user defined component using tags Eg `<App/>`

## Props

### * To make our components dynamic, we provide it with properties

### * We pass arguments to components

### * The arguments are passed as a **single object**

### * When **Props**, **except string**, use **curly braces** to enclose it

### * We use unpaired tags to give objects, paired tags to give props to other components as **children**

### Props are **read-only **

### Parent Component:

```jsx  

const Form = () => {
  let Name = "John"
  let Age = 20
  return (
    <React.Fragment key={1}>
            <form action="" className=' p-10'>
            <h1 className='text-3xl font-semibold'>Form</h1>
                <fieldset className='flex gap-4 py-5'>
                    <label htmlFor="name" className='text-lg' name={Name}>Enter you Name</label>
                    <input type="text" className='border rounded-sm' /><br></br>
                    <label htmlFor="name" className='text-lg'>Enter you Age</label>
                    <input type="number" className='border rounded-sm'/>
                </fieldset>
            </form>
            <Info name = {"John"} age={20}/>
        </React.Fragment>
  )
}

```

### Child Component:

```jsx

const Info = (props) => {
    console.log(props)
    const person = {
        Name: props.name,
        Age: props.age,
        Skills: ["HTML ", "CSS ", "JavaScript"]
    }

    return (
        <div className="flex flex-col gap-7 p-10">
            <h1 className='text-4xl font-semibold'>Info</h1>
            <h1>Name: {person.Name}</h1>
            <h1>Age: {person.Age}</h1>
            <h1>Skills: {person.Skills}</h1>
        </div>
    );
};

```

### Passing props as JSX element

#### Parent Component

```jsx

PropsChildren>{<Info name = {"Usopp"} age={Person.Age} hobbies={Person.Hobbies} favGames={Person.FavGames} knownLang={Person.KnownLang} addr={Person.Addr} eat={Person.eat} play={Person.play} sleep={Person.sleep}/>}</PropsChildren>

```

#### Child Component

```jsx

const PropsChildren = (props) => {
    console.log(props.children)
  return (
    <div>{props.children}</div>
  )
}


```

## Using Keys for each child in a list

### * Keys help React identify which items have changed, are added, or are removed

### * When creating same elements again and again in a list, we use ``key`` attrib. to help React identify which items have changed, are added, or are removed and change only the elements that have changed

## Conditional Rendering

### 1. Ternary Operator

```jsx

<h2>{(age>18)?"": "Not"} Eligible to vote</h2>

```

### 2. Short Circuit 'AND' operator (&&)

```jsx

<h2>{age< 18 && "Not"} Eligible to Vote</h2>

```

## True and False Values in JS

| Falsy values | Truthy values |
| --- | --- |
| false | everything else that is not falsy |
| 0 | true |
| "" or '' (Empty string) | '0' (0 in a string) |
| null | ' ' (space in a string) |
| Nan | empty function |

## Events

### * Doesnt use normal browser events, it uses something called as Synthetic events

### Synthetic Events -> created over browser events which are compatible with all browsers (``Cross Browser Compatibility``)

### * Because, of difference in Engine across browsers, events need to be compatible with all browser engine

### * If u need to pass arguments to a function in events, you will pass the fn directly as an arrow function, as you can give arguments in a named function

```jsx

<button onClick={() => console.log(`You clicked me Pervert 😠`)} className='border rounded-md bg-gray-300 my-2'>Direct function</button><br></br> {/* This will work */}

```

## React Hooks

### ->JS functions used to provide extra functionalities to functions

## UseState Hook

### * Virtual DOM wont keep track of data changes/updation of variable in jsx

### * It *manages change* in data when we give *props* from one component to the other, but not *inside the same component*

### State -> Data stored/managed in component level(storing/ managing data in the same component)

### * The useState hook is a function that lets you add React state to a functional component

```jsx

const [count, setCount] = useState(0) // const [changingVar, callbackFn] = useState(initial)

```

## UseEffect Hook

### * The useEffect hook lets you perform side effects in your components

### * Sideffects like datafetching, directly updating the DOM

### * It is called every time the component is rendered by

Eg 

```jsx

import React, { useEffect, useState } from 'react'

const UseEffectFileFetch = () => {
  const [data, setData] = useState([])
  useEffect(()=> {
    async function getData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dataa = await response.json()
        console.log(dataa)
        if(dataa && dataa.length) setData(dataa)
    }
    getData()
  },
  )
  
  return (
    <div>
        <p>Hello</p>
        <ul>
            {data.map((todo)=>( <li key={todo.key}>{todo.title}</li>))}
        </ul>
    </div>
  )
}

export default UseEffectFileFetch

```

## UseReducer()

### * similar to useState, but it is designed for complex state objects or transitions involving multiple sub-values

### * allows you to handle state in a functional, immutable way

```jsx

const [state,dispatch] = useReducer(reducer, initialState)

```

### `state` -> current state value

### `dispatch` -> fuction you call to send actions to the reducer

### `reducer` -> function which describes **how the state should change** based on actions, takes the *current* and *action* as inputs and returns a *new state*