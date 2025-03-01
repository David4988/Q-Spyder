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

#### 1. ordered list < ol > (type=1,a,A,i,I,start; start = number)

#### 2. unordered list < ul > (type=disc,square, circle, none)

#### 3. description list < dl >

#### 4. list item < li >

```html
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
```

### Images (Inline-block element)

#### 1. src -> source of the image (compulsary)

#### 2. alt -> alternative text for the image

#### 3. width -> width of the image

#### 4. height -> height of the image
``` html
    <img src="https://via.placeholder.com/150" alt="Placeholder">
```

### Audio(inline element)

#### 1. src -> source of the audio

#### 2. controls -> adds controls to the audio

``` html
    <audio src="https://www.soundjay.com/human/sounds/bell-ringing-01.wav" controls></audio>
```

### Video

#### 1. src -> source of the video

#### 2. controls -> adds controls to the video

``` html
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
```

### Anchor Tag

#### 1. href -> source of the link

#### 2. target -> where to open the link (blank, self, parent, top)

```html
    <a href="https://www.google.com" target="_blank">Google</a>
```

### Image with Anchor Tag

#### * Makes image clickable and links to specified URL
```html
    <a href="https://www.google.com">
        <img src="https://via.placeholder.com/150" alt="Placeholder">
    </a>
```

### Table

#### 1. table < table >

#### 2. table row < tr >

#### 3. table data < td >

#### 4. table header < th >

#### 5. Attributes

    -> border -> adds border to the table
    -> width -> width of the table
    -> height -> height of the table
    -> align -> alignment of the table
    -> valign -> vertical alignment of the table
    -> colspan -> number of columns to span
    -> rowspan -> number of rows to span
    -> cellpadding -> padding inside the table
    -> cellspacing -> padding outside the table

### Forms

#### 1. form < form > (without it, the submit button will not work)

    -> action -> url of the server

#### 2. input < input >

    -> name attrib. -> name of the input(acts as a container for the input, required if you want to submit the form)
    -> type attrib. -> type of the input
    -> value attrib. -> value of the input
    -> placeholder attrib. -> placeholder of the input
    -> required attrib. -> required input
    -> minlength attrib. -> minimum length of the input
    -> maxlength attrib. -> maximum length of the input
    -> min attrib. -> minimum value of the input
    -> max attrib. -> maximum value of the input

#### input types

    -> text -> single line text input
    -> password -> password input
    -> email -> email input
    -> number -> number input
    -> date -> date input
    -> radio -> radio input
    -> url -> url input
    -> checkbox -> checkbox input
    -> button -> button
    -> submit -> submit button

#### 3. label < label >

    -> for -> id of the input
    -> name -> name of the input (acts as a container for the input)
    -> placeholder -> placeholder of the input
    -> required -> required input

#### 4. textarea < textarea >

#### 5. select < select >

#### 6. option < option >(used to create dropdown list)

#### 7. button < button > (default type is submit)

#### button types

    -> submit -> submit the form
    -> reset -> reset the form

#### 8. fieldset < fieldset >

    -> groups related inputs together

#### 9. legend < legend >

    -> naming of fieldset

#### Form attributes

    -> name -> name of the input
    -> for -> id of the input
    -> id -> id of the input
    -> value -> value of the input
    -> checked -> checked input
    -> disabled -> disabled input
    -> required -> required input
    -> minlength -> minimum length of the input
    -> maxlength -> maximum length of the input
    -> min -> minimum value of the input
    -> max -> maximum value of the input
    -> multiple -> multiple input
    -> placeholder -> placeholder of the input
    -> title -> title of the input
    -> type -> type of the input
    -> value -> value of the input
    -> colspan -> number of columns to span
    -> rowspan -> number of rows to span
    -> checked -> checked input
