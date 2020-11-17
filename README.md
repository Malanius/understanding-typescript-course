# TypeScript

Strongly typed Javascript.

---

## Introduction

`-`

### What is Typescript

- JavaScript superset
- Build upon JS and adds new features to it
- can't be executed directly by the JS environment (browser, node)
- is compiled to pure JS
- TS features are compiled to JS "workarounds"
- add types and type checking to the JS

`-`

### Why typescript

What will happen?

```javascript
function add(num1, num2) {
  return num1 + num2;
}

console.log(add("1", 2));
```

`-`

- the console will log `12`
- will not throw runtime error
- but might be a logical error
- possible mitigation: validate & sanitize user input
- wouldn't it be better to discover this during development?

`-`

### Advantages

- types and type-checking
- type-errors are discovered during compilation rather than runtime
- great IDE support that prompts errors even before compilation
- next-gen JS features compiled for older versions

`-`

- adds non-JS features like Interfaces and Generics
- adds meta-programming features like Decorators
- early adoption of new ECMAScript features
- rich configuration options
- great support in 3rd party libs (either they are written in TS types for it are available)

`-`

### Drawbacks

- more typing (in both meanings of the word)
- adds compilation step to the workflow
- can make building the project more complex

---

## Getting started

`-`

### Installing TS

- requires node.js to be installed
- install TS compiler with the following command

```bash
npm install -g typescript
```

`-`

### Basic compilation

- to compile single file once

```bash
tsc ${file.name}
```

- to compile single file each time it changes

```bash
# short
tsc -w ${file.name}
# long
tsc --watch ${file.name}
```

---

## Basic types

`-`

### Core types, also known to JS

| Type      | Descritption                                            | Example           |
| --------- | ------------------------------------------------------- | ----------------- |
| `number`  | all numbers, no disctintion between integers and floats | `10`, `5.3`       |
| `string`  | all text values                                         | 'Hi, "Hi", \`Hi\` |
| `boolean` | just true/false, no "truthy/falsy" JS nonsense          | `true/false`      |

`-`

| Type     | Descritption                                          | Example     |
| -------- | ----------------------------------------------------- | ----------- |
| `object` | Any JS object, more specific types can be defined     | `{age: 30}` |
| `Array`  | Any JS array, element types can be strict or flexible | `[1,2,3]`   |

`-`

### Core types, TS specific

| Type    | Descritption                              | Example         |
| ------- | ----------------------------------------- | --------------- |
| `Tuple` | Fixed lenght and type array               | `[1,2]`         |
| `Enum`  | Enumerated list of values                 | `enum{NEW,OLD}` |
| `Any`   | Any type possible, disables type checking | `*`             |

`-`

| Type       | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| `Function` | Pointer to function                                                     |
| `unknown`  | When the incoming type is not known                                     |
| `never`    | For functions that don't return (interrupted by error or infinite loop) |

---

## Using types

`-`

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

`-`

### Type inference

- TS can infer the type from the context
- it's considered bad practice to specify a type that can be inferred

```typescript
let num1 = 1; //number
let someString = "abc"; //string
```

`-`

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

`-`

### Arrays

- fixed type arrays can be defined as `${type}[]`
- a flexible array can be defined as `any[]`, but you lose type checking

```typescript
const arr: string[];
```

`-`

### Tuples

- tuple in TS is fixed length, fixed type array

- TS check assignment to tuple array to have the correct type
- it is still possible to push to tuple array
- can be defined as:

```typescript
const t: [nubmer, string] = [1, "string"];
```

`-`

### Enums

- works similar as you know from other languages
- definition:

```typescript
enum {
    NEW, //0
    OLD //1
}
```

`-`

- it is possible to define custom ordinals

```typescript
enum {
    NEW = 5, //5
    OLD //6
}
```

`-`

- it is also possible to use a different type than numbers for ordinals

```typescript
enum {
    NEW = 'NEW', //NEW
    OLD
}
```

- be careful with this, always have a good reason to do it

`-`

### The "any" type

- disables type checking
- behaves as plain JS does
- avoid whenever possible (why use TS when you have everything `any`?)
- possible to configure compilation to mark use of `any` as error

---

## More on typing

`-`

### Union types

- sometimes, you need to support multiple types in variable, this can be done with union types
- defined as `${type} | ${type}...`
- example:

```typescript
const combine = (input1: number | string, input2: number | string) => {};
```

`-`

### Literal types

- it is possible to add specific value instead of type
- can be combined with union types to allow several values

```typescript
const combine = (
  resultConversion: "as-number" | "as-text";
) => {}
```

`-`

### Type aliases/custom types

- it can be cumbersome to always repeat union types or other complex types
- type aliases allow defining custom types that can be used later
- possible to define an alias for type with `type` keyword

```typescript
type Combinable = number | string;
type Person = {
  name: string,
  age: number;
}
const value: Combinable = 1;
const someone: Person = {...}
```

`-`

### Function return type & void

- each function has a return type, mostly it's inferred by TS
- possible to define return type manually with specifying return types after parameters:
- a function that doesn't return value has a `void` return type (in pure JS `undefined` is returned with `return` statement)
- `undefined` is a valid type in TS, will require `return` in the function

```typescript
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
```

`-`

### Function type

- used to specify that some variable should hold a function pointer
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

`-`

### The "unknown" type

- useful in cases we don't exactly know what will be stored in the variable
- more restrictive than `any`
- prevents assigning unknown variables to typed ones without type-check
- way better choice than `any` when input is not known before

`-`

```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "String";

// userName = userInput; // won't work as unknown can't be assigned to string

//TS detects this check and allows assignment of the unknown type to string
if (typeof userInput === "string") {
  userName === userInput;
}
```

`-`

### Never type

- specifies that function doesn't return anything, even default undefined
- useful when function always throws an error or has an infinite loop

```typescript
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};
```

---

## TS compiler & configuration

`-`

### Watch/Compile whole project

- initialize TS project with `tsc --init`
- this creates `tsconfig.json` file containing TS compilator configuration
- now you can use `tsc` or `tsc --watch` to compile whole project

`-`

### Including & Excluding files

- in `tsconfig.json` you can specify files to be included or exluded in the compilation
- `exlude` - paths in this list won't be compiled
- `include` - only paths specified here will be compiled, can be filtered with exclude
- `exclude` or `include` parameters in the configuration files takes a list of
  - files to be included/excluded
  - folder to be included/exluded
  - supports wildcard globbing

`-`

- `files` - you can specify concere files to compile, no paths or globbing here

`-`

### Compiler options

- `target` - which version of JS the TS code should be compiled into
- `module` - specifies how modules are generated (will be dealt with in own section)
- `lib`
  - specify which default objects and features TS knows
  - defaults to target `es` and all `DOM` APIs for web browser

`-`

- `allowJS` - allows JS files to be compiled by TS
- `checkJS` - checks JS files for errors, but won't compile
- `jsx` - specifies how to compile JSX for React

`-`

when building a lib to be used by others, you can include type definitions with it:

- `declaration` - creates `.d.ts` files
- `declarationMap` - generates source maps for `.d.ts` files

`-`

- `sourceMap` - generates source map for debugging purposes

`-`

- `outFile`
  - concatenate and emit output to single file
  - tricky to use properly, see [here](https://basarat.gitbook.io/typescript/main-1/outfile)
- `rootDir` - where the root of the source files is, typically `src`
- `outDir` - where the compiled output should go, i.e. `dist`

`-`

- `noEmit` - will not produce JS files, but still checks the TS files
- `noEmitOnError` - will not produce compiled JS files when errors are present

`-`

### Strict checks

- `strict` - sets all strict options on/off
- `noImplicitAny` - raise error when implicit `any` is present (the type is not specified)
- `strictNullChecks` - requires checks for null for potentially nullable values

`-`

- `strictFunctionTypes` - cheks for function types while inheriting
- `strictBindCallApply` - strict check bind, call, apply functions assigments
- `strictPropertyInitialization` - Ensure non-undefined class properties are initialized in the constructor

`-`

- `noImplicitThis` - `this` impliead as `any` will cause error
- `alwaysStrict` - generated JS files will always have "strict mode" (`"use strict"`)

`-`

### Additional checks

- `noUnusedLocals` - reports unused local variables
- `noUnusedParameters` - reports unused function parameters
- `noImplicitReturns` - check if all code paths in function returns a value
- `noFallthroughCasesInSwitch` - checks missing `break` statements in `switch`

---

## TS & next-gen JS (ES6+)

`-`

### ES6 Compability chart

[here](https://kangax.github.io/compat-table/es6/)

`-`

### `let` and `const`

- `const` - constant value, can't be changed
- `let` - variable value, changeable
- difference between them and old `var` is in how the're scoped - `var` has only function or global scope, no local/block scope for it exists
- compiled to `var` on target < ES6

`-`

---

## Classes

---

## Interfaces

---

## Advanced types

---

## Generics

---

## Decorators

---

## Modules & namespaces

---

## TS & webpack

---

## TS & 3rd party libs

---

## TS & React

---

## TS & node.js w/ Express

---

## Useful resources

- [TypeScript documentation](https://www.typescriptlang.org/docs/home)
- [Understaning TypeScript by Maximilian Schwarzmüller](https://www.udemy.com/course/understanding-typescript/)
