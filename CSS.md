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
