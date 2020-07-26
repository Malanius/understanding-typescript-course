# TypeScript

Strongly typed Javascript.

---

## Introduction

` `

### What is Typescript

- JavaScript superset
- Build up on JS and adds new features to it
- can't be executed directly by JS environment (browser, node)
- is compiled to pure JS
- TS features are compiled to JS "workarounds"
- add types and type checking to the JS

` `

### Why typescript

What will happen?

```javascript
function add(num1, num2) {
  return num1 + num2;
}

console.log(add("1", 2));
```

` `

- console will log `12`
- will not throw runtime error
- but might be logical error
- possible mitigation: validate & sanitize user input
- wouldn't it be better to discover this during development?

` `

### Advantages

- types and type-checking
- type-errors are discovered during compilation rather than runtime
- great IDE support that promts errors even before compilation
- next-gen JS features compiled for older versions

` `

- adds non-JS features like Interfaces and Generics
- adds meta-programming features like Decorators
- early adoption of new ECMASCript features
- rich configuration options
- great support in 3rd party libs (eiter they are written in TS types for it are available)

` `

### Drawbacks

- more typing (in both meanings of the word)
- adds compilation step to the workflow
- can make building the project more complex

---

## Getting started

` `

### Installing TS

- requires node.js to be installed
- install TS compiler with following command

```bash
npm install -g typescript
```

` `

### Basic compilation

- to compile single file run following command

```bash
tsc ${file.name}
```

---

## Basics

` `

### Core types, also known to JS

| Type      | Descritption                                            | Example           |
| --------- | ------------------------------------------------------- | ----------------- |
| `number`  | all numbers, no disctintion between integers and floats | `10`, `5.3`       |
| `string`  | all text values                                         | 'Hi, "Hi", \`Hi\` |
| `boolean` | just true/false, no "truthy/falsy" JS nonsense          | `true/false`      |

` `

| Type     | Descritption                                          | Example     |
| -------- | ----------------------------------------------------- | ----------- |
| `object` | Any JS object, more specific types can be defined     | `{age: 30}` |
| `Array`  | Any JS array, element types can be strict or flexible | `[1,2,3]`   |

` `

### Core types, TS specific

| Type    | Descritption                              | Example         |
| ------- | ----------------------------------------- | --------------- |
| `Tuple` | Fixed lenght and type array               | `[1,2]`         |
| `Enum`  | Enumerated list of values                 | `enum{NEW,OLD}` |
| `Any`   | Any type possible, disables type checking | `*`             |

` `

| Type    | Descritption                              | Example         |
| ------- | ----------------------------------------- | --------------- |
| `Tuple` | Fixed lenght and type array               | `[1,2]`         |
| `Enum`  | Enumerated list of values                 | `enum{NEW,OLD}` |
| `Any`   | Any type possible, disables type checking | `*`             |

` `

### Type assigment

- to assign type use the `: ${type}` syntax

```typescript
// Variables
const number1: number = 1;
// Function parameters
const f1 = (par1: number, par2: string) => {};
// Function return value
const f2 = (n1, n2): nubmer => {};
```

` `

### Type inference

- TS can infer the type from the context
- it's considered bad practice to specify type that can be infered

```typescript
let num1 = 1; //num
let someString = "abc"; //string
```

` `

### Specific object types

- it is possible to specify object type with keys and type of their value:

```typescript
const person: {
  name: string;
  age: number;
} = {
  name: "Malanius",
  age: 30,
};
```

` `

### Arrays

- fixed type arrays can be defined as `${type}[]`

```typescript
const arr: string[];
```

- flexible array can be defines as `any[]`, but you loose type checking

` `

### Tuples

- tuple in TS is fixed lenght, fixed type array
- can be defined as:

```typescript
const t: [nubmer, string] = [1, "string"];
```

- TS check assigment to tuple array to have correct type
- it is still possible to push to tuple array

` `

### Enums

- works simmilar as you know from other languages
- definition:

```typescript
enum {
    NEW, //0
    OLD //100
}
```

` `

- it is possible to define custom ordenals

```typescript
enum {
    NEW = 5, //5
    OLD //6
}
```

` `

- it is also possible to use different type than nubmers for ordenals

```typescript
enum {
    NEW = 'NEW', //NEW
    OLD
}
```

- be careful with this, always have a good reason to do it

` `

### The "any" type

- disables type checking
- behaves as plain JS does
- avoid whenever possible (why use TS when you have everythign any?)
- possible to configure compilation to mark use of any as error

---

## More on typing

` `

### Union types

- sometimes, you need to support multiple types in variable, this can be done with union types
- defined as `${type} | ${type}...`
- example:

```typescript
const combine = (input1: number | string, input2: number | string) => { ...}
```

` `

### Literal types

- it is possible to add specific value instead of type
- can be combined with union types to allow several values

```typescript
const combine = (
  resultConversion: "as-number" | "as-text//;
) => {}
```

` `

### Type aliases/custom types

- it can be cumbersome to always repeat union types or other complex types
- type aliases allows to define custom types that can be used later
- possible to define alias for type with `type` keyword

```typescript
type Combinable = number | string;
type Person = {
  name: string,
  age: number;
}
const value: Combinable = 1;
const someone: Person = {...}
```

` `

### Function return type & void

- each function has a return type, mostly it's infered by TS
- possible to defien return type manually with specifing return types after parameters:

```typescript
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
```

- function that doesn't return value has a `void` return type (in pure JS `undefined` is returned with `return` statement)
- `undefined` is valid type in TS, will require `return` in the function

` `

### Function type

- used to specify that some variable should hold a function poiter
- function types can be declared as well

```typescript
let combineValues: (a: number, b: number) => number;
```

- it is also possible to define type of `callback` function:

```typescript
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};
```

` `

### The "unknown" type

- useful in cases we don't exactly know what will be stored in variable
- more restrictive than any
- prevents assigning unknown variables to typed ones without type-check
- way better choice than any when input is not known before

```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "String";

// userName = userInput; // won't work as unknown can't be assigned to string
//TS detects this check and allows assigment of the unknown type to string

if (typeof userInput === "string") {
  userName === userInput;
}
```

` `

### Never type

- specifies that function doesn't never return anything, even default undefined
- useful when function always throws error or has an infinite loop

```typescript
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};
```
