# TypeScript Interactive Beginner Guide

Welcome to the **TypeScript** beginner's guide! Let's learn by doing! 🧑‍💻

---

## 🚀 What is TypeScript?

TypeScript is a superset of JavaScript that adds **static typing**.

**Quiz:**
> What does "static typing" mean?
>
> - A) Types are checked at runtime
> - B) Types are checked at compile time

<details>
<summary>Answer</summary>
B) Types are checked at compile time!
</details>

---

## ⚙️ Setting up TypeScript

**Let's Set It Up Together!**

```bash
# 1. Install TypeScript
npm install -g typescript

# 2. Check your installation
node -v
npm -v
tsc --version

# 3. Create a project folder
mkdir ts-project
cd ts-project
npm init -y

# 4. Create tsconfig.json
npx tsc --init
```

✅ Great! You're all set!

---

## 🧩 Basic Syntax Exercises

### Variables

**Challenge:** Create a variable that stores your favorite number.

```typescript
let favoriteNumber: number = 7;
```

### Arrays

**Challenge:** Create an array of your 3 favorite fruits.

```typescript
let fruits: string[] = ["Apple", "Mango", "Banana"];
```

### Tuples

**Challenge:** Create a tuple that stores your name and age.

```typescript
let person: [string, number] = ["Jason", 25];
```

### Enums

**Challenge:** Create an enum for days of the week.

```typescript
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let today: Day = Day.Saturday;
```

---

## 🛠 Functions

**Mini Task:** Create a function that says hello to someone.

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Jason"));
```

🔵 **Try This:** Modify the function to greet in uppercase letters!

---

## 🧩 Interfaces

**Challenge:** Define a `Book` interface.

```typescript
interface Book {
  title: string;
  author: string;
  year: number;
}

const book: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};
```

---

## 🏗 Classes

**Challenge:** Create a class `Car` with `brand` and `speed`.

```typescript
class Car {
  constructor(public brand: string, public speed: number) {}

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed} km/h!`);
  }
}

const myCar = new Car("Toyota", 120);
myCar.accelerate();
```

✅ Well Done!

---

## 📦 Type Aliases

**Quick Task:** Create a type alias for a `PetName` which can be a `string` or `number`.

```typescript
type PetName = string | number;

let myPet: PetName = "Buddy";
```

---

## 📢 Quick Tips

- Prefer `interface` when describing object shapes.
- Use `unknown` instead of `any` whenever possible.
- Enable `strict: true` in `tsconfig.json` for maximum safety.

**Think About It:**
> Why is `unknown` safer than `any`?

<details>
<summary>Answer</summary>
Because you must perform a type check before using it!
</details>

---

## 🛠 Compiling TypeScript

```bash
# Compile a single file
npx tsc filename.ts

# Compile your entire project
npx tsc
```

---

## 🎯 Bonus: Sample tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## 🏁 Conclusion

TypeScript makes your JavaScript code smarter, safer, and scalable. Keep experimenting!

🌟 **Final Challenge:**

> Create an interface `Student` and a class `CollegeStudent` that implements it.

Happy coding! 🚀✨
