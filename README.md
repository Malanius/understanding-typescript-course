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

console.log(add('1', 2));
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
- early adoption of new ECMASCript features

` `

### Drawbacks

- more typing (in both meanings of the word)
- adds compilation step to the workflow
- can make building the project more complex

---

## Basics
