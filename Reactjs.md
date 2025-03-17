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
