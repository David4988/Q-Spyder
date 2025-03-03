# CSS (Cascading Style Sheets)

    -> Cascading means that the styles are applied to the elements in the order they are defined.

    -> Style sheets means that the styles are defined in a separate file.

    -> Created by Håkon Wium Lie in 1996
    -> Currently we are using CSS3 released in 2011

## CSS Syntax

### Selector

#### * the part of the CSS that selects the HTML elements **you want to style.**

```css
selector {
    propertyName: value;
    .
    .
    .
}
```

## 3 ways to apply CSS

### 1. Inline CSS

#### * CSS is applied to the **HTML elements directly.**

```css
<p style="color: red;">This is a paragraph.</p>
```

### 2. Internal CSS

#### * CSS is applied to the **HTML elements** inside the `<style>` tag

```css
<style>
    p { color: red; }
</style>
```

### 3. External CSS

#### * CSS is defined in a separate file

```html
<link rel="stylesheet" href="styles.css">
<p>This is a paragraph.</p>
```

```css
p { color: red; }
```

### Hierarchy between Inline, Internal and External CSS

#### * Inline CSS > Internal CSS or External CSS(whichever is defined last)

```html
<p style="color: red;">This is a paragraph.</p>
```

```css
<style>
    p { color: red; }
</style>
```

```css
<link rel="stylesheet" href="styles.css">
<p>This is a paragraph.</p>
```

```css
p { color: red; }
```

## CSS Selectors types

### 1. Element Selector

#### * Selects all elements with the given element name

index.html

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

style.css

```css
p { color: red; }
```

### 2. ID Selector

#### * Selects the element with the given ID

index.html

```html
<p id="unique">This is a paragraph.</p>
```

style.css

```css
#unique { color: red; }
```

### 3. Class Selector

#### * Selects all elements with the given class

index.html

```html

<p class="highlight">This is a paragraph.</p>
<p>This is another paragraph.</p>
```

style.css

```css
.highlight { color: red; }
```

### 4. Universal Selector

#### * Selects all elements

style.css

```css
* { color: red; }
```

### 5. Group Selector(,)

#### * Selects all elements with the given selectors

index.html

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

style.css

```css
p, h1 { color: red; }
```

### 6. Descendant Selector(space)

#### * Selects all elements that are descendants of a given element

index.html

```html
<div>
    <p>This is a paragraph.</p><!--This will be selected-->
    <section>
        <p>This is another paragraph.</p><!--This will also be selected-->
    </section>
</div>
```

style.css

```css
div p { color: red; }
```

### 7. Child Selector(>)

#### * Selects all elements that are children of a given element

index.html

```html
<div>
    <p>This is a paragraph.</p> <!--This will be selected-->
    <section>
        <p>This is another paragraph.</p> <!--This will not be selected-->
    </section>
</div>
```

style.css

```css
div > p { color: red; }
```

### 8. Pseudo-classes Selector(:)

#### * Selects elements based on their state

```html
<a href="https://www.google.com">Google</a>
```

```css
a:hover { color: red; }
```

#### * :hover -> when the mouse is over the element

```css
a:hover { color: red; }
```

#### * :active -> when the element is active

```css
a:active { color: red; }
```

#### * :focus -> when the element is focused

```css
input:focus { color: red; }
```

#### * :visited -> when the element is visited

```css
a:visited { color: red; }
```

#### * :first-child -> when the element is the first child of its parent

```css
p:first-child { color: red; }
```

#### * :last-child -> when the element is the last child of its parent

```css
p:last-child { color: red; }
```

#### * :nth-child(n) -> when the element is the nth child of its parent

```css
p:nth-child(2) { color: red; }
```

#### * :nth-child(odd) -> when the element is the odd child of its parent

```css
p:nth-child(odd) { color: red; }
```

#### * :nth-child(even) -> when the element is the even child of its parent

```css
p:nth-child(even) { color: red; }
```

#### * :nth-child(2n) -> when the element is the nth child of its parent

```css
p:nth-child(2n) { color: red; }
```

#### * :nth-child(all) -> when the element is the all child of its parent

```css
p:nth-child(all) { color: red; }
```

#### * :nth-child(2n+1) -> when the element is the nth child of its parent

```css
p:nth-child(2n+1) { color: red; }
```

### 9. Space Selector(>)

#### * Selects the element that is the child of the given element

```html
<div>
    <p>This is a paragraph.</p> <!--This will be selected-->
</div>
<p>This is another paragraph.</p> <!--This will not be selected-->
```

```css
div > p { color: red; }
```

### 10. Adjacent Sibling Selector(+)

#### * Selects the element that is the adjacent sibling of the given element

```html
<p>This is a paragraph.</p> <!--This will be selected-->
<p>This is another paragraph.</p> <!--This will not be selected-->
```

```css
p + p { color: red; }
```

### 11. General Sibling Selector(~)

#### * Selects all elements that are siblings of the given element

```html
<p>This is a paragraph.</p> <!--This will be selected-->
<p>This is another paragraph.</p> <!--This will also be selected-->
```

```css
p ~ p { color: red; }
```

## Selectors Hierarchy

### 1. Specificity

#### * Selects the most specific element

```html
<p>This is a paragraph.</p>
<p id="unique">This is another paragraph.</p>
```

```css
p { color: red; }
#unique { color: blue; }
```

### 2. Inheritance

#### * Inheritance is when the styles are applied to the element from its parent

```html
<p>This is a paragraph.</p>
```

```css
p { color: red; }
```

### 3. Cascade

#### * Cascade is when the styles are applied to the element from its parent

```html
<p>This is a paragraph.</p>
```

```css
p { color: red; }
```

### 4. Importance

#### * Importance is when the styles are applied to the element from its parent

```html
<p>This is a paragraph.</p>
```

```css
p { color: red; }
```

## Styles

### 1. Color

#### * Sets the color of the text

```html
<p style="color: red;">This is a paragraph.</p>
```

```css
p { color: red; }
```

### 2. Background Color

#### * Sets the background color of the element

```html
<p style="background-color: red;">This is a paragraph.</p>
```

```css
p { background-color: red; }
```

### 3. Font Size

#### * Sets the font size of the text

index.html

```html
<p style="font-size: 16px;">This is a paragraph.</p>
```

style.css

```css
p { font-size: 16px; }
```

### 4. Font Weight

#### * Sets the weight of the font

index.html

```html

<p style="font-weight: bold;">This is a paragraph.</p>
```

style.css

```css
p { font-weight: bold; }
```

### 5. Border

#### * Sets the border of the element

index.html

```html

<div style="border: 1px solid red;">This is a div.</div>
```

style.css

```css
div { border: 1px solid red; }
```

## Units

### 1. Absolute Units

#### * Absolute units are fixed values

#### * the size of the element is fixed and cannot be changed

    px -> pixels

    cm -> centimeters

    mm -> millimeters

    in -> inches

    pt -> points

index.html

```html
<p style="font-size: 16px;">This is a paragraph.</p>
```

style.css

```css
p { font-size: 16px; }
```

### 2. Relative Units

#### * Relative units are relative to the parent element

#### * makes the font size of the element relative to the font size of the parent element

#### * increases responsiveness of the element for different screen sizes

     em -> relative to the font size of the element.

     rem -> relative to the font size of the root element.

     % -> relative to the parent element.

     vh -> relative to the height of the viewport.

     vw -> relative to the width of the viewport.

index.html

```html
<div style="font-size: 16px;">
    <p style="font-size: 1em;">This is a paragraph.</p>
</div>
```

style.css

```css
div { font-size: 16px; }
p { font-size: 1em; }
```

## Text

### 1. Text Alignment

#### * Aligns the text to the left, right, center, or justify

#### * works only with block-level elements

    -> text-align: left;

    -> text-align: right;

    -> text-align: center;

    -> text-align: justify;

```css
p {
    text-align: left;
    text-transform: uppercase;
}
```

```html
<p>This is a paragraph.</p>
```

### 2. Text Transformation

#### * Transforms the text to uppercase, lowercase, or capitalize

    -> text-transform: uppercase;

    -> text-transform: lowercase;

```css
p {
    text-transform: uppercase;
}
```

html

```html
<p>This is a paragraph.</p>
```

### 3. Text Decoration

#### * Adds a line through the text

#### -> line, style, color, thickness

    -> text-decoration: line-through;

    -> text-decoration: underline;

    -> text-decoration: overline;

    -> text-decoration: none;

    -> text-decoration-color: red;

    -> text-decoration-style: solid;

    -> text-decoration-thickness: 1px;

    -> text-decoration-skip-ink: none;

style.css

```css  
p {
    text-decoration: underline;
}
```

index.html

```html
<p>This is a paragraph.</p>


### 4. Text Color

#### * Sets the color of the text.

style.css

```css
p { color: red; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 5. Text Line Height

#### * Sets the line height of the text

    -> line-height: 1.5;

    -> line-height: 1.5em;

    -> line-height: 1.5rem;

    -> line-height: 1.5%;

```css
p { 
    line-height: 1.5;
 }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 6. Font Size

#### * Sets the size of the font

    -> font-size: 16px;

    -> font-size: 1.5em;

```css
p { font-size: 16px; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 7. Font Family

#### * Sets the font family of the text

#### * Can also import fonts from google fonts

    -> font-family: Arial, sans-serif;

    -> font-family: 'Roboto', sans-serif;
style.css

```css
p { font-family: Arial, sans-serif; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 8. Font Weight

#### * Sets the weight of the font

    -> font-weight: normal;

    -> font-weight: bold;

    -> font-weight: 700;

    -> font-weight: 900;

```css
p {
     font-weight: bold; 
  }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 9. Font Style

#### * Sets the style of the font

    -> font-style: normal;

    -> font-style: italic;

    -> font-style: oblique;

```css
p { font-style: italic; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 10. Font Variant

#### * Sets the variant of the font

    -> font-variant: normal;

    -> font-variant: small-caps;

```css
p { font-variant: small-caps; }
```

index.html

```html
<p>This is a paragraph.</p>
```

## Colors

### 1. Color Name

#### * Sets the color of the text

```css
p { color: red; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 2. Hexadecimal Color

#### * Sets the color of the text in hexadecimal format

    -> #000000;

    -> #ffffff;

    -> #ff0000;

style.css

```css
p { color: #000000; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 3. RGB Color

#### * Sets the color of the text in RGB format

    -> rgb(0, 0, 0);
    -> rgb(255,255,255)

```css
p{  
    color: rgb(0, 0, 0);
}
```

index.html

```html
<p>This is a paragraph.</p>
```

### 4. RGBA Color

#### * Sets the color of the text in RGBA format

#### * here, 'A' (Alpha) is the opacity of the color

    -> rgba(0, 0, 0, 0.5);

    -> rgba(255,255,255,0.5);

style.css

```css
p { color: rgba(0, 0, 0, 0.5); }
```

index.html

```html
<p>This is a paragraph.</p>
```
## Background

### 1. Background Color

#### * Sets the background color of the element -> any color

```css
p { background-color: red; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 2. Background Image

#### * Sets the background image of the element -> url("online addr."/image.jpg)

```css
p { background-image: url('image.jpg'); }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 3. Background Position

#### * Sets the position of the background image -> repeat, no-repeat, repeat-x, repeat-y

```css
p { background-position: center; }
```

index.html

```html
<p>This is a paragraph.</p>
``` 

### 4. Background Size

#### * Sets the size of the background image

    1. cover -> scales the image to cover the element(both width and height)

    2. contain -> scales the image to fit the element(width or height)

    3. 100% 100% -> scales the image to 100% of the element(both width and height)

    4. 100% 50% -> scales the image to 100% of the element(width) and 50% of the element(height)



```css
p { background-size: cover; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 5. Background Repeat

#### * Sets the repeat of the background image

```css
p { background-repeat: no-repeat; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 6. Background Attachment

#### * Sets the attachment of the background image

```css
p { background-attachment: fixed; }
```

index.html

```html
<p>This is a paragraph.</p>
```

```css
p {
    background-color: red;
    background-image: url('image.jpg');
    background-attachment: fixed;
    
}
```
## Border

### 1. Border Width

#### * Sets the width of the border

```css
p { border-width: 1px; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 2. Border Style

#### * Sets the style of the border

```css
p { border-style: solid; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 3. Border Color

#### * Sets the color of the border

```css
p { border-color: red; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 4. Border Shorthand

#### * Sets the border of the element -> width, style, color

```css
p { border: 1px solid red; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 5. Border Radius

#### * Sets the radius of the border

```css
p { border-radius: 10px 12px 14px 16px; } /* top-left, top-right, bottom-right, bottom-left */
``` 

index.html

```html
<p>This is a paragraph.</p>
```

### 6. Border Image

#### * Sets the image of the border

```css
p { border-image: url('image.jpg') 10; }
```

index.html

```html
<p>This is a paragraph.</p>
```

### 7. Border Image Shorthand

#### * Sets the border image of the element -> image, width, repeat

```css
p { border-image: url('image.jpg') 10 repeat; }
```

index.html

```html
<p>This is a paragraph.</p>
```

## Box Model

### Has 4 parts:

    1. Margin
    2. Border
    3. Padding
    4. Content

### 1 Border

#### * Sets the border of the element -> width, style, color

```css
p { border: 1px solid red; }
```

index.html

```html
<div>
    <p>This is a paragraph.</p>
</div>
```

### 2. Padding

#### * Sets the space between the content and the border

```css
p { padding: 10px; }
```

index.html

```html
<div>
    <p>This is a paragraph.</p>
</div>
```

### 3. Margin

#### * Sets the space outside the border

#### * Don't use it too much, as it will waste space on the page

```css
p { margin: 10px 40px 0 20px; } <!--top right bottom left-->
```

index.html

```html
<div>
    <p>This is a paragraph.</p>
</div>
```

### 4. Box-sizing

#### * Sets the box-sizing of the element

#### * Default is content-box (height/width only apply to the content)

#### * border-box (height/width apply to the content, padding, and border) (almost mandatory)

```css
p { box-sizing: border-box; }
```

index.html

```html
<div>
    <p>This is a paragraph.</p>
</div>
