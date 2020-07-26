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
- adds non-JS features like Interfaces and Generics
- adds meta-programming features like Decorators
- early adoption of new ECMASCript features
- rich configuration options

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

| Type      | Descritption                                            | Example           |
| --------- | ------------------------------------------------------- | ----------------- |
| `object`  | Any JS object, more specific types can be defined       | `{age: 30}`       |
| `Array`   | Any JS array, element types can be strict or flexible   | `[1,2,3] `        |

` `

### Core types, TS specific

| Type      | Descritption                                            | Example           |
| --------- | ------------------------------------------------------- | ----------------- |
| `Tuple`   | Fixed lenght and type array                             | `[1,2]`           |
| `Enum`    | Enumerated list of values                               | `enum{NEW,OLD}`   |
| `Any`     | Any type possible, disables type checking               | `*`               |