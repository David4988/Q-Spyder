# Basics on How Internet Works

## Intro

#### 3 - tier arch

    -> Client(Presentation Layer) - make requests to the server
    -> Server(Logic Layer) - make requests to the database
    -> Database(Data Layer) - gets request from the server and sends response to the server

#### * DNS: Translates Domain -> ip address

### How a website works

 ![Day1 Image](BasicsofInternet.png "Basics of Internet")

#### * HTTP (Hypertext Transfer Protocol) /

#### * HTTPS (Hypertext Transfer Protocol Secure): Protocol that allows the client/browser to request and receive resources from the server

#### * Images: Images that are used in the webpage

#### * Web: Interconnected data that can be accessed via the internet

#### *Webpage: A simple doc created using HTML

### Website vs Webapp

#### * Website -> focues on providing content

#### * Web App -> focuses on providing functionalities

#### * Static Webpage  

        -> doesnt respond to user
        -> doesnt require user interaction
        -> doesnt need to interact with a database

#### * Dynamic Webpage

        -> responds to user
        -> requires user interaction
        -> needs to interact with a database

## Hyper Text Markup Language (HTML)

### **Intro:**

#### * Created by Tim Berners-Lee in 1991(Version 1)

#### * Currently we use Version Language HTML5 (2014)

#### * HTML is used to **provide structure** to the webpage

#### * Hyper -> Refers to **links**

#### * Text -> Refers to the **text** on the webpage

#### * Markup -> Refers to the **predefined tags** that are used to **structure** the webpage

#### * Language -> Refers to **the way we communicate** with the browser

### **Basic Structure of a HTML doc:**

  ```html
  <!DOCTYPE html> <!-- Tells the browser that the document is an HTML document version 5 -->
<html lang="en"> <!-- Parent element -->
<head><!-- Provide the Meta(extra) information-->
 <meta charset="UTF-8"> <!-- Provides the character encoding of the webpage -->
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title> <!-- Title of the webpage -->
</head>
<body> <!-- Title of the webpage -->
 <p>
  Not my first webpage
 </p>
</body>
</html>
  ```

#### * default HTML structure -> boilerplate code

#### * HTML is *case-insensitive*

### HTML Tags

#### * Tags -> predefines keywords, enclosed between <>

#### * paired tags -> requires an opening and a closing tag

#### * unpaired tags -> requires only an opening tag

#### * br -> moves to the next line

``` html
    <br>
```

#### * hr -> new horizontal line

```html
    <hr>
```

### Elements

    -> Opening Tag + Content + Closing Tag

    ```html
    <p>
        This is a paragraph
    </p>
    ```

#### * Block level elements -> takes the full viewport width of the page

```html
    <div>Hello</div> <!-- Block level element -->
    <div>World</div> 
```

#### * Inline element -> takes onlythe width of the content

```html
    <span>Hello</span> <!-- Inline element -->
    <span>World</span> 
```

#### * Inline-block element -> takes the width of the content and the height of the content

```html
    <img src="https://via.placeholder.com/150" alt="Placeholder"> <!-- Inline Block element -->
```

### Attributes

#### * Attributes -> provide extra functionality to the elements, always written in the opening tag

#### 1. id -> unique identifier for the element

```html
    <div id="unique">Hello</div>
```

#### 2. class -> used to group similar elements

```html
    <div class="group">Hello</div>
    <div class="group">World</div>
```

#### 3. style -> used to add styles to the element

```html
    <div style="color: red;">Hello</div>
```

#### 4. title -> provides additional information about the element when u hover over it

```html
    <div title="Additional Information">Hello</div>
```

### heading tags:

     -> h1 -> 2 em
     -> h2 -> 1.5 em
     -> h3 -> 1.17 em
     -> h4 -> 1 em
     -> h5 -> 0.83 em
     -> h6 -> 0.67 em

#### Understanding Heading Tags

#### * Heading tags (h1 to h6) are used to define HTML headings on a webpage

#### * Key characteristics:
    -> Block-level elements
    -> Create a hierarchical structure
    -> h1 is most important, h6 is least important
    -> Should be used in order (h1 -> h2 -> h3, etc.)

#### * Example usage:

    <h1>Main Title of the Page</h1>
    <h2>Major Sections</h2>
    <h3>Sub-sections</h3>
    <h4>Sub-sub-sections</h4>

#### * Best Practices:
    -> Use only one h1 per page
    -> Don't skip heading levels
    -> Use for structure, not styling
    -> Important for SEO and accessibility

### Paragraph Tag (<p>)

#### * Block-level element used for text content

#### * Characteristics:
    -> Adds automatic margins
    -> Cannot contain other p tags
    -> Most common text container

#### * Example:

    <p>This is a paragraph of text.</p>
    <p>Another paragraph with <span>inline content</span>.</p>

### Formatting Tags

#### 1. bold < b >

#### 2. italic < i >

#### 3. underline < u >

#### 4. highlight < mark >

### Non-semantic tags

#### 1. div < div >

#### 2. span < span >

### Semantic Tags (introduced in HTML5)

#### * tags which has its own purpose

#### * block-level elements

#### * increases code readability and SEO

#### 1. header < header >

#### 2. footer < footer >

#### 3. section < section >

#### 4. article < article >

#### 5. main <  >

#### 6. navbar < nav >

### Lists

#### 1. ordered list < ol >

#### 2. unordered list < ul >


