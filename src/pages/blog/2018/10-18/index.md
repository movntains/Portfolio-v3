---
path: '/blog/javascript-hoisting'
date: '2018-10-18'
title: 'Understanding JavaScript Hoisting'
medium: 'https://medium.com/@movntains/understanding-javascript-hoisting-283e8e9b5ac1'
---

When learning JavaScript, it’s easy to be intimidated by a lot of jargon, such as “syntax parser”, “lexical environment”, “execution context”, and “hoisting”. Such terms surely have to be as complex as they sound, right? Not so. Let’s demystify some of this stuff and talk about what’s going on behind the scenes with JavaScript.

## Syntax Parsers, Lexical Environments, & Execution Contexts

First of all, let’s get some definitions for these terms that (hopefully) make some sense.

A **syntax parser** is a program that reads code and determines what it does, as well as if its grammar is valid. More common names for a syntax parser are _interpreter_ and _compiler_. Basically, they read code character by character and determine if the syntax is valid. If it is, then they implement that syntax in a way that the computer can understand.

“Lexical” means “having to do with words or grammar”. The **lexical environment**, then, is where something sits physically in code. In other words, it’s where the piece of code is written and what other code surrounds it. A lexical environment exists in programming languages in which _where_ something is written is _important_. JavaScript is one such language. So, in the simplest terms, the compiler cares about where things are.

An **execution context** is essentially a wrapper to help manage the code that’s running. But in what way is it related to lexical environments? Well, there are lots of lexical environments in code. The lexical environment that is currently running is managed via execution contexts, which can contain things beyond what’s written in code.

## The Execution Context & Hoisting

An execution context is created in 2 phases: the _creation_ phase and the _execution_ phase.

In the creation phase, the syntax parser runs through the code and sets it up for translation. As it does so, it recognizes **where** variables and functions have been created.

So what exactly is hoisting? Well, before the code begins to be executed line by line, the JavaScript engine has already set aside _memory space_ for the variables and functions that have been created in the code. This means that the variables and functions exist in memory, so when the code begins to execute line by line, it can access them. It’s worth noting that a function in its **entirety** is placed into memory space, but only a variable’s _declaration_, **not** its initialization, is placed into memory space. Simply put, if the code contains `let x = 5;`, then **only** `x` will be hoisted, **not** its initialized value (i.e., `5`).

In simple terms, the consequences of hoisting are that variables and functions can be used in code **before** the lines in which they are actually declared and defined. But enough words. Let’s look at some examples.

### No Hoisting

```javascript
const a = 'Hello, World!';

function b() {
  console.log('Called b!');
}

b();
console.log(a);

/*
OUTPUT:

Called b!
Hello, World!
*/
```

In this example, there is **no** hoisting. The variable `a` and the function `b()` are both declared/defined **before** they are used elsewhere in the code.

### Hoisting

```js
b();
console.log(a);

let a = 'Hello, World!';

function b() {
  console.log('Called b!');
}

/*
OUTPUT:

Called b!
Hello, World!
*/
```

In this example, hoisting **is** utilized. Both the function `b()` and the variable `a` are used in the code **before** they’re actually declared/defined. However, the output of the code is the same. This is because of hoisting. `a` and `b()` are placed into memory **before** the code is executed. So, when the code is finally executed, those values can be accessed even though the lines containing the variable declaration and function definition have not yet been executed.

## TL;DR

JavaScript variables and functions are set aside in memory **before** the code containing them is executed line by line. For this reason, they can be accessed in code **before** the lines that contain their declarations/definitions have been executed.

It’s worth noting, though, that the JavaScript engine does **not** know what a variable’s value will ultimately end up being until the code is executed, so it uses `undefined` as a placeholder. **All** variables are initially set to `undefined` when they’re hoisted. For this reason, it’s better to avoid hoisting and instead only use variables in the code _after_ they have been declared and initialized.
