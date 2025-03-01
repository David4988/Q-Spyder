### Radio Button Input

#### * Radio buttons with same 'name' attribute form a group where only one can be selected
```html
    <form>
        <!-- Only one favorite color can be selected -->
        <input type="radio" name="color" value="red"> Red
        <input type="radio" name="color" value="blue"> Blue
        <input type="radio" name="color" value="green"> Green

        <!-- Different group - one can be selected here -->
        <input type="radio" name="size" value="small"> Small
        <input type="radio" name="size" value="medium"> Medium
        <input type="radio" name="size" value="large"> Large
    </form>
```

#### * Key attributes:
    -> name -> groups radio buttons (same name = same group)
    -> value -> data sent when form is submitted
    -> checked -> pre-selects an option 