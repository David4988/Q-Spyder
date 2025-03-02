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

#### * CSS is applied to the **HTML elements** inside the `<style>` tag.

```css
<style>
    p { color: red; }
</style>
```

### 3. External CSS

#### * CSS is defined in a separate file.

```html
<link rel="stylesheet" href="styles.css">
<p>This is a paragraph.</p>
```

```css
p { color: red; }
```

### Hierarchy between Inline, Internal and External CSS

#### * Inline CSS > Internal CSS > External CSS

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

#### * Selects all elements with the given element name.

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

#### * Selects the element with the given ID.

index.html
```html
<p id="unique">This is a paragraph.</p>
```

style.css

```css
#unique { color: red; }
```

### 3. Class Selector

#### * Selects all elements with the given class.

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

#### * Selects all elements.

style.css

```css
* { color: red; }
```

### 5. Descendant Selector(space)

#### * Selects all elements that are descendants of a given element.

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

### 6. Child Selector

#### * Selects all elements that are children of a given element.

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

### 7. Pseudo-classes Selector(:)

#### * Selects elements based on their state.

```html
<a href="https://www.google.com">Google</a>
```

```css
a:hover { color: red; }
```

#### * :hover -> when the mouse is over the element.

```css
a:hover { color: red; }
```

#### * :active -> when the element is active.

```css
a:active { color: red; }
```

#### * :focus -> when the element is focused.

```css
input:focus { color: red; }
```

#### * :visited -> when the element is visited.

```css
a:visited { color: red; }
```

#### * :first-child -> when the element is the first child of its parent.

```css
p:first-child { color: red; }
```

#### * :last-child -> when the element is the last child of its parent.

```css
p:last-child { color: red; }
```

#### * :nth-child(n) -> when the element is the nth child of its parent.

```css
p:nth-child(2) { color: red; }
```

#### * :nth-child(odd) -> when the element is the odd child of its parent.

```css
p:nth-child(odd) { color: red; }
```

#### * :nth-child(even) -> when the element is the even child of its parent.

```css
p:nth-child(even) { color: red; }
```

#### * :nth-child(2n) -> when the element is the nth child of its parent.

```css
p:nth-child(2n) { color: red; }
```

#### * :nth-child(all) -> when the element is the all child of its parent.

```css
p:nth-child(all) { color: red; }
```

#### * :nth-child(2n+1) -> when the element is the nth child of its parent.

```css
p:nth-child(2n+1) { color: red; }
```

### 8. Space Selector(>)

#### * Selects the element that is the child of the given element.

```html
<div>
    <p>This is a paragraph.</p> <!--This will be selected-->
</div>
<p>This is another paragraph.</p> <!--This will not be selected-->
```

```css
div > p { color: red; }
```

### 9. Adjacent Sibling Selector(+)

#### * Selects the element that is the adjacent sibling of the given element.

```html
<p>This is a paragraph.</p> <!--This will be selected-->
<p>This is another paragraph.</p> <!--This will not be selected-->
```

```css
p + p { color: red; }
```

### 10. General Sibling Selector(~)

#### * Selects all elements that are siblings of the given element.

```html
<p>This is a paragraph.</p> <!--This will be selected-->
<p>This is another paragraph.</p> <!--This will also be selected-->
```

```css
p ~ p { color: red; }
```

## Styles

### 1. Color

#### * Sets the color of the text.

```html 
<p style="color: red;">This is a paragraph.</p>
```

```css
p { color: red; }
```

### 2. Background Color

#### * Sets the background color of the element.

```html
<p style="background-color: red;">This is a paragraph.</p>
```

```css
p { background-color: red; }
```

### 3. Font Size

#### * Sets the font size of the text.

index.html

```html
<p style="font-size: 16px;">This is a paragraph.</p>
```
style.css

```css
p { font-size: 16px; }
```

### 4. Font Weight

#### * Sets the weight of the font.

index.html

```html

<p style="font-weight: bold;">This is a paragraph.</p>
```

style.css
```css
p { font-weight: bold; }
```

### 5. Border

#### * Sets the border of the element.

index.html

```html

<div style="border: 1px solid red;">This is a div.</div>
```

style.css

```css
div { border: 1px solid red; }
```