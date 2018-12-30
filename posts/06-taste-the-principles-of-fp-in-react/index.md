---
date: 2018-01-31

title: Taste the principles of functional programming in React
seo_title: Taste the principles of functional programming in React
slug: taste-the-principles-of-fp-in-react
description:
  To understand the benefits of functional programming principles in React, you need to first understand the core functional programming principles themselves.
tags:
- functional programming
- javascript
- react
thumbnail:
- function
---

***This post was also [translated to Korean](https://ideveloper2.tistory.com/162?fbclid=IwAR0vUSKvBvr8nFwp0Qg3KstcukPdQ2Dr-yV370zk1ef_tpauFpFWw5ihivA)***

![alt text](./images/code.jpg "Code on a computer screen")

The maintainable component structure is a crucial prerequisite for a stable React application. You can achieve this by writing your code in a functional way using higher-order components (HoCs). The idea is to separate logic from presentation in your components. If you stick to this pattern, you’ll end up with reusable components that are both readable and easy to test as each component is only responsible for a single task.

This is the first post from the series in which I would love to share my experience with you, so you can easily utilize this approach in your own applications. Not only will you learn how to take advantage of the principles of functional programming (FP) by enhancing your presentational components using one or several HoCs, but you’ll also understand the rationale behind this pattern.

### Let's get started

To show you why you should stick to the principles of FP in a React application, in this first post I will talk a little bit about the core principles of FP themselves.

The idea is to *[decompose a program into small functions, which are then combined to form an application](http://blog.scottlogic.com/2016/04/04/a-functional-front-end-with-react.html)*.

So, it’s all about functions. To be more precise, it’s all about **simple functions**. This means that each function should only be responsible for a single task. The simpler the function, the more reusable it is.

### Higher-order functions

In JavaScript, you can use a function like any other value. It can be passed as an argument to a function or it can be returned by it. A function that returns or creates a new function is called a **higher-order function.**

```js
const numbers = [1, 5, 8, 10, 21]
const createAddingFunction = number => arr => arr.map(num => num + number)
const numbersPlusOne = createAddingFunction(1)
console.log(numbersPlusOne(numbers))  // [2, 6, 9, 11, 22]
```

`createAddingFunctions` is a higher-order function. It takes a `number` and creates a new function waiting for the array to be passed. In the example, we pass it `1` and get back a new function waiting for an array. We store it as `numbersPlusOne`. Then we pass the `numbers` array to it. The function then iterates over the array’s elements and increases each by one.

As you can see, we’re telling the JavaScript engine **what** we want to do — we want to map over the array’s elements. This code is self-explanatory. You just see the code and you immediately know what’s going on. Such code is called **declarative**. Functional programming is all about declarative code.

![alt text](./images/sign.jpg "Neon sign")

### Avoid side effects

As a functional programmer, you want to avoid side effects in your functions as much as possible. In other words, a function shouldn’t be changing anything that’s not local to the function itself. You can reuse such a function easily, anywhere in your application. Functions without side effects are called **pure.** They always return the same output, given the same arguments.

If you want to write pure functions, you should also avoid mutating your values. This is called the principle of **immutability**. However, this doesn’t mean you don’t change your values. It means that when you want to change a value, you create a new one rather than mutating the original one.

However, in JavaScript, values such as objects and arrays are mutable. In order to respect the principle of immutability, we can treat the values as immutable.

For example, adhering to this principle, you won’t be able to accidentally mutate an object that was passed to a function as its parameter.

```js
// pure function
const numbers = [1, 5, 8, 10, 21]
const createAddingFunction = number => arr => arr.map(num => num + number)
const numbersPlusOne = createAddingFunction(1)
console.log(numbersPlusOne(numbers))  //[2, 6, 9, 11, 22]
console.log(numbers)  // [1, 5, 8, 10, 21]

// impure function
const numbers = [1, 5, 8, 10, 21]
const numbersPlusOne = numbers => {
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] + 1
    }
    return numbers
}
numbersPlusOne(numbers) // [2, 6, 9, 11, 22]
console.log(numbers) // [2, 6, 9, 11, 22]
```

Here we have an example of a pure (same as in a previous example) and impure function. In the first case, the fact that we passed an array to the pure function didn’t affect the `numbers` array in any way.

However, in the second scenario, the array was mutated inside the impure function. Such behavior can make your code pretty unpredictable. And especially in the functional programming realm, we want to avoid that.

### Composition

By now, we know we should be creating simple pure functions. However, what if we need behavior that is so complex that it can’t be stored in a single function? We could achieve this by combining several functions into a new compound function using composition.

```js
const number = 15
const increment = num => num + 5
const decrement = num => num - 3
const multiply = num => num * 2

const operation = increment(decrement(multiply(number)))
console.log(operation)  //32
```

**Composition** means that we pass the output of the first function call as the input to the second function call, its output to the third function and so on. As a result, we get a compound function.

In our example, we have a number and three functions. We wrap them all inside each other, and we get a compound function waiting for the `number` argument. By using composition, we don’t need to create variables for storing the result of the single functions.

### Combined

To really see the benefits of all these FP principles, you need to combine them together.

Ideally, your application should be composed of **pure functions** whose data are treated as **immutable.** That means they’re not modifying their upper scope and you’re thus free to reuse them in any part of your program. Each function should be responsible for a single task and should be separated from the other ones. You can use them as they are or you can **compose** them together to achieve more complex behavior.

**By sticking to FP principles, you will end up with simple reusable functions that can be composed together.**
