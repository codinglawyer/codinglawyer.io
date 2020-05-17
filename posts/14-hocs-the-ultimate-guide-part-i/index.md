---
date: 2018-08-18

title: Higher-order components&#58 the ultimate guide (part I)
seo_title: Higher-order components&#58 the ultimate guide (part I)
slug: hocs-the-ultimate-guide-part-i
description:
   You'll learn how to enhance your presentational components using higher-order components in your React application,and you’ll also understand the principles behind this pattern.
tags:
- react
- functional programming
- recompose
featuredImage: ./images/bus-sign.jpg
---

![alt text](./images/bus-sign.jpg "Bus sign")

The maintainable component structure is a crucial prerequisite for a stable React application. You can achieve this by writing your code in a functional way using higher-order components (HoCs). If you stick to this pattern, you’ll end up with reusable components that are both readable and easy to test as each component is only responsible for a single task.

In this article I’d love to share my experience, so you can easily utilize this approach in your own applications. Not only will you learn how to enhance your presentational components using one or several HoCs, but you’ll also understand the principles behind this pattern.

### Why is this post so long?

When I started learning HoCs myself, I had no problem finding resources dealing with this topic. However, many of them assumed certain previous knowledge of complex topics, such as functional programming (FP) principles. As a result, it was challenging for me to understand what was going on under the hood and how the composition of several HoCs works.

It was this experience that motivated me to write this article in a broader and more beginner-friendly way. So, it covers not only HoCs, but also the principles of FP and the core ideas that one must understand to be able to unleash the power of higher-order components.

This article is also based on *[my first tech conference talk](https://www.codinglawyer.io/posts/my-first-tech-talk)* I gave at the International JavaScript Conference (iJS) 2017 in Munich. You can find all the source code on *[Github](https://github.com/codinglawyer/hocs-code)*.

### Getting started

Let’s get started by looking at some code:

```js
const starWarsChars = [
   { name:'Luke', side:'light' },
   { name:'Darth Vader', side:'dark' },
   { name:'Obi-wan Kenobi', side:'light'},
   { name:'Palpatine', side:'dark'},
]

class FilteredList extends React.Component {
   constructor(props) {
      super(props)
      this.state = { value: this.props.defaultState }
   }
   updateState(value) {
      this.setState({ value })
   }
   render() {
      const otherSide = this.state.value === 'dark' ? 'light' : 'dark'
      const transformedProps = this.props.list.filter(char => char.side === this.state.value)
      return (
         <div>
            <button onClick={() => this.updateState(otherSide)}>Switch</button>
            {transformedProps.map(char =>
               <div key={char.name}>
                  <div>Character: {char.name}</div>
                  <div>Side: {char.side}</div>
               </div>
            )}
         </div>
      )
   }
}

ReactDOM.render (
   <FilteredList defaultState='dark' list={starWarsChars} />,
   document.getElementById('app')
)
```

`FilteredList` is a huge component that does so many things. It maintains the state and filters the `list` of the Star Wars characters according to their side. Moreover, it renders the character list with a button to the screen.

It takes care of all the logic and presentation, and because of that, it’s hardly ever reusable.

If you decide to reuse this component elsewhere, you’ll always need to use all the component’s logic and UI. You can’t just cherry pick the functionality you really need for a particular scenario. Instead, you’ll be forced to rewrite an already existing piece of behavior as a different component.

![alt text](./images/one-does-not-simply.jpg "One does not simply meme")

As a result, such repeated code would be difficult to maintain, especially in a larger application.

At the end of this article, we’ll be able to write a fully reusable version of this code using the principles of functional programming (FP).

Stay tuned.

### Taste the principles of functional programming

To show you why you should stick to the principles of FP in a React application,I need to talk a little bit about the core principles of FP themselves.

The idea is to decompose a program into simple **reusable functions**.

So, it’s all about functions. To be more precise, it’s all about **simple functions**. This means that each function should only be responsible for a single task. The simpler the function, the more reusable it is.

### Higher-order functions

In JavaScript, you can use a function like any other value. It can be passed as an argument to a function or it can be returned by it. A function that **returns or creates a new function** is called a higher-order function.

```js
const numbers = [1, 5, 8, 10, 21]
const createAddingFunction = number => arr => arr.map(num => num + number)
const numbersPlusOne = createAddingFunction(1)
console.log(numbersPlusOne(numbers))  // [2, 6, 9, 11, 22]
```

`createAddingFunctions` is a higher-order function. It takes a `number` and creates a new function waiting for the array to be passed. In the example, we pass it `1` and get back a new function waiting for an array. We store it as `numbersPlusOne`. Then we pass the `numbers` array to it. The function then iterates over the array’s elements and increases each by one.

As you can see, we’re telling the JavaScript engine **what** we want to do — we want to map over the array’s elements. This code is self-explanatory. You just see the code and you immediately know what’s going on. Such code is called **declarative**. Functional programming is all about declarative code.

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

Composition means that we pass the output of the first function call as the input to the second function call, its output to the third function and so on. As a result, we get a compound function.

In our example, we have a `number` and three functions. We wrap them all inside each other, and we get a compound function waiting for the `number` argument. By using composition, we don’t need to create variables for storing the result of the single functions.

### Combined

To really see the benefits of all these FP principles, you need to combine them together.

Ideally, your application should be composed of **pure functions** whose data are treated as **immutable.** That means they’re not modifying their upper scope and so you’re free to reuse them in any part of your program. Each function should be responsible for a single task and should be separated from the other ones. You can use them as they are or you can **compose** them together to achieve more complex behavior.

By sticking to FP principles, you’ll end up with simple reusable functions that can be composed together.

### Functional programming and React

Now that we are familiar with the basic principles of FP, we can take a look at how to use them to our advantage in React.

React applications are composed of components. But what exactly is a component?

```js
// Class-based component
class Button extends React.Component {
   render(){
      return <button>{this.props.title}</button>
   }
}

// Functional component
const Button = (props) =>
   <button>{props.title}</button>
```

Since the class is just syntactic sugar over functions and the functional component is basically a function, **components are just functions**. It’s a function that takes input data (props) and returns a tree of React elements (UI)which is rendered to the screen. However, it doesn’t need to return UI all the time. It can return a component as well as we’re going to see later.

So React UI is just a **composition of functions**. That sounds awfully like FP,right?

### Smart and presentational components

A component is typically composed of logic and presentation. However, if we decide to write all our components as such, we would end up with dozens of components having only a single purpose. On the other hand, if we try to *[separate these concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)*, we’ll be able to create simple reusable components. Following this idea, we should prefer defining our components as smart (logic) and presentational (UI).

![alt text](./images/doors.jpg "Yellow and green door")

The **presentational** component takes care of all the UI. It will typically have the form of a **functional** component, which is just a render method. You can think of them as functions.

The component containing mostly logic is called **smart**. It typically handles data manipulations, API calls, and event handlers. It will often be defined as a **class** since it provides us with more functionality (such as internal state and lifecycle).

Each component should be responsible for a single task and written so generally that it can be reused throughout the application. Such a task should be either logic (smart component) or presentation (presentational component). The combination of both in a single component should be minimized.

**smart class component**

```js
class DisplayList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         starWarsChars: [
            { name:'Luke Skywalker', side:'light' },
            { name:'Darth Vader', side:'dark' },
            { name:'Obi-wan Kenobi', side:'light' },
            { name:'Palpatine', side:'dark' },
         ]
      }
   }
   render() {
      return (
         <div>
            {this.state.starWarsChars.map(char =>
               <div key={char.name}>
                  <div>Character: {char.name}</div>
                  <div>Side: {char.side}</div>
               </div>
            )}
         </div>
      )
   }
}

ReactDOM.render(
   <DisplayList />,
   document.getElementById('app')
)
```

**presentational functional component**

```js
const starWarsChars = [
   { name:'Luke', side:'light' },
   { name:'Darth Vader', side:'dark' },
   { name:'Obi-wan Kenobi', side:'light'},
   { name:'Palpatine', side:'dark'},
]

const DisplayList = ({ list }) =>
   <div>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>

ReactDOM.render (
   <DisplayList list={starWarsChars} />,
   document.getElementById('app')
)
```

Let’s take a look at the functional component. It’s pretty reusable since it only takes care of the UI. So, if you want to display a list of Star Wars characters elsewhere in your application, you can easily reuse this component. It also doesn’t have any side effects since it doesn’t affect its outer scope in any way.

You can see that the functional component is just a **pure function** that takes props object and returns the same UI given the same props.

Not only is that React application a composition of functions in general, but it can also be a **composition of pure functions**.

As we’ve already learned, pure functions are the basic building blocks of FP. So if we prefer using functional components, we’ll be able to **apply various FP techniques** such as the higher-order components in our code.

### Adding more logic

Let’s take a look at our functional component again. It takes a list of Star Wars characters as a prop and renders them to the screen. It’s pretty reusable since it doesn’t contain any logic.

Now, what if we wanted to display only characters belonging to the dark side? The simplest solution will be to filter the `list` prop inside the component.

```js
const FilteredList = ({ list, side }) => {
   const filteredList = list.filter(char => char.side === side)
   return (
      <div>
         {filteredList.map(char =>
            <div key={char.name}>
               <div>Character: {char.name}</div>
               <div>Side: {char.side}</div>
            </div>
         )}
      </div>
   )
}

ReactDOM.render (
   <FilteredList side='dark' list={starWarsChars}/>,
   document.getElementById('app')
)
```

This will do the trick. We renamed `DisplayList` to `FilteredList` since it now contains filtering functionality. We are also now passing the `side` prop according to which list will be filtered.

However, is this the ideal solution? As you can see, the `FilteredList` component isn’t reusable anymore. Because of the filter function buried inside of it, this component can hardly ever be reused.

If we wanted to display characters elsewhere in our application without any filtering, we would need to create another component. Furthermore, if we wanted to use the filter function in other components, we would have to duplicate this behavior as well.

Fortunately, there’s a **more elegant and declarative solution** that lets us keep our presentational component reusable. We are able to filter the characters list before it’s passed as the prop to the `DisplayList` component.

```js
const withFilterProps = BaseComponent => ({ list, side }) => {
   const transformedProps = list.filter(char => char.side === side)
   return <BaseComponent list={transformedProps} />
}

const renderDisplayList = ({ list }) =>
   <div>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>

const FilteredList = withFilterProps(renderDisplayList)

ReactDOM.render (
   <FilteredList side='dark' list={starWarsChars} />,
   document.getElementById('app')
)
```

We renamed our functional component `renderDisplayList` to make it obvious that it’s responsible only for the UI rendering.

First, let’s take a look at the `FilteredList` component. This component gets created by passing our functional component `renderDisplayList` to the `withFilterProps` higher-order function. When this happens, we get back a functional component and store it as `FilteterdList` waiting for the props object to be passed.

We render the `FilteredList` component at the end of the example by passing the props. It filters the character list from the props according to the `side` prop. The filtered list is then passed as the props to the `renderDisplayList,` which subsequently renders the list of characters to the screen.

### Introducing higher-order components

![alt text](./images/chip.jpg "Computer chip")

Let’s now talk about the nature of the higher-order function `withFilterProps`. In React’s vocabulary, such a function is called a higher-order component (HoC). Just as the higher-order function creates a new function, the HoC creates a new component.

HoC is a **function** that **accepts** **a component** and **returns a new component that renders the passed one**. This new component is enhanced with an additional functionality.

```js
const HoC = BaseComponent => EnhancedComponent
```

In our example, the `withFilterProps` HoC takes the `renderDisplayList` component and returns a new functional component that renders the `renderDisplayList`. The `renderDisplayList` component is enhanced with the filtering props logic.

Because we abstracted all the logic to the HoC, our base functional component only takes care of the UI rendering and is reusable again.

The HoC is a special type of a function that wraps the presentational component and enhances it with an advanced functionality. Think of them as the **wrappers for your functional components.**

Thanks to the HoC pattern, you can enhance your simple functional components with whatever logic you want. This is the power of the HoC pattern. You can edit/update/transform props, maintain internal state, or affect the component rendering outside of your presentational component.

Sticking to this pattern will enable you to use only functional components as your base components throughout your application and get rid of all the class components.

If we again consider the distinction between smart and presentational components, the base component will always be the presentational one (since it’s just a pure function). On the other hand, the HoC will take the role of a **smart** component since it deals only with the logic, which is then passed down to the presentational component. However, if you don’t need the class-specific behavior, you can also define HoC as a functional component (as you’ve just seen).

Since you made it this far, let’s slow down a little bit and talk about food :)

### Meatloaf or Pancake

At the beginning of this article, we saw this hard-to-reuse component that takes care of all the logic and presentation.

```js
class FilteredList extends React.Component {
   constructor(props) {
      super(props)
      this.state = { value: this.props.defaultState }
   }
   updateState(value) {
      this.setState({ value })
   }
   render() {
      const otherSide = this.state.value === 'dark' ? 'light' : 'dark'
      const transformedProps = this.props.list.filter(char => char.side === this.state.value)
      return (
         <div>
            <button onClick={() => this.updateState(otherSide)}>Switch</button>
            {transformedProps.map(char =>
               <div key={char.name}>
                  <div>Character: {char.name}</div>
                  <div>Side: {char.side}</div>
               </div>
            )}
         </div>
      )
   }
}

ReactDOM.render (
   <FilteredList defaultState='dark' list={starWarsChars} />,
   document.getElementById('app')
)
```

You can think of this component as **meatloaf**.

![alt text](./images/meatloaf.jpg "Meatloaf")

When preparing meatloaf, you take the meat, breadcrumbs, garlic, onion, and eggs, mix them together, put the raw meatloaf into the oven, and wait until it’s cooked. There’s no way that you can take the eggs or the onion from the meatloaf, since everything is irrevocably combined together.

This is the same as a component that is a mixture of logic and UI. You just can’t take something from it. **You need to use it as is or not at all.**

Try to think of the presentational components as **pancakes**.

![alt text](./images/pancake-simple.jpg "Plain pancake")

However, simple pancakes without any decoration are pretty boring, and no one eats them like this anyway. So you want to decorate them. You can pour maple syrup on them or put some berries or chocolate on top of them. So many possible decorating layers for you to use!

![alt text](./images/pancake-maple-syrup.jpg "Pancakes with maple syrup")

In the React application, these decorating layers are represented by the HoCs. So, just as you decorate a pancake according to your taste, you also decorate the presentational component using HoC with the functionality you want. As a result, **you can reuse a particular presentational component in different places of your application** and decorate it with the HoC you want for a particular case.

However, you can’t do that with the component that is responsible for all the logic and presentation, since everything is irrevocably combined together.

I hope that this metaphor gave you a better understanding of the HoC pattern. If not, at least I made you hungry :).

### Make all the components reusable again

Now, that we know how to create a HoC, we’ll take a look at how to make it reusable.

Making components reusable means to **decouple them from the data**. This means that they shouldn’t be dependent on a particular props structure. Sticking to reusable components helps you to avoid unnecessary duplication. You just pass a different set of props each time.

By using the HoC pattern in the previous example, we moved all the logic to the HoC, and just let the base component render the UI. As a result, our **presentational component became reusable** since it just receives data as props and renders it to the screen.

But it would be pretty difficult to reuse our HoC as well since it’s too specific.

```js
const withFilterProps = BaseComponent => ({ list, side }) => {
   const transformedProps = list.filter(char => char.side === side)
   return <BaseComponent list={transformedProps} />
}
```

It can be applied only in the cases where the `list` and `side` props are present. You don’t want this kind of specificity in your application since you want reusable HoCs that can be used in various scenarios.

Let’s make the HoC reusable.

![alt text](./images/make-components-reusable.jpg "Make all the things meme")

```js
const withTransformProps = transformFunc => {
   const ConfiguredComponent = BaseComponent => {
      return baseProps => {
         const transformedProps = transformFunc(baseProps)
         return <BaseComponent {...transformedProps} />
      }
   }
   return ConfiguredComponent
}

const renderDisplayList = ({ list }) =>
   <div>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>

const FilteredList = withTransformProps(
   ({ list, side }) => ({
      list: list.filter(FilteredListchar =>
         char.side === side)
   })
)(renderDisplayList)

ReactDOM.render (
   <FilteredList
      side='dark'
      list={starWarsChars}
   />,
   document.getElementById('app')
)
```

This code still does the same thing as the previous HoC example. We filter the props using the HoC component and then pass them to the base component. However, the old name would be misleading, since the HoC is no longer limited only to the filtering logic, so we renamed it `withTransformProps`.

We also no longer care about the props structure. We are newly passing a `transformFunc` as a **configuration function** to the `withTransformProps`. This function is responsible for the props transformation.

Let’s take a look at the `FilteredList` enhanced component. It gets created when we pass the configuration function (responsible for the props transformation) to the `withTransformProps`. We get back a specialized HoC with the transformation function stored inside the closure. We store it as the `ConfiguredComponent`. It expects the `BaseComponent` to be passed. When the `renderDisplayList` is passed to it, we get back a functional component that is waiting for the props to be passed. We store this enhanced component as the `FilteredList`.

The props get passed when we render the `FilteredList` component. Then, the transforming function we passed earlier takes the props and filters the characters according the side. The returned value is then passed as the props to the `renderDisplayList` base component which renders filtered Start Wars characters to the screen.

However, our HoC syntax is pretty verbose. We don’t need to store the specialized HoC as the `ConfiguredComponent` inside a variable.

```js
const withTransformProps = mapperFunc =>
   BaseComponent => baseProps => {
      const transformedProps = mapperFunc(baseProps)
      return <BaseComponent {...transformedProps} />
   }
```

This solution is much cleaner.

The idea behind this approach is to **have a reusable HoC that can be configured for any scenario** in which we want to do something with the props before they get passed to the base component. That’s a powerful abstraction, isn’t it?

In our example, we passed a custom filtering function that could be different for every use case. And if we later decide that we want to change some of the HoC’s behavior, we just need to change it in a single reusable component and not in many different places of our application.

```js
const HoC = config => BaseComponent => EnhancedComponent
```

The HoC and the base component are both **reusable** and **independent** of each other. The HoC doesn’t know where its data goes and the presentational component has no idea where its data is coming from.

Writing reusable HoCs and presentational components will help you to avoid unnecessary repetition and force you to write simpler components. **As a result,you’ll be writing cleaner, maintainable, and readable code.**

Congratulations! By now you should be able to write reusable higher-order components yourself. I also hope you have a better understanding of the ideas behind this pattern.

### Stay tuned for Part II

*[In the second post](https://www.codinglawyer.io/posts/hocs-the-ultimate-guide-part-ii)*, you’ll learn the difference between class HoC and the functional one. We’ll also spend a good amount of time understanding how the composition of several higher-order components works. All of this will allow us to enhance our base components with even more behavior that can be easily reused throughout our application.

***This post was also published on [my Medium blog](https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851) (2018) and on [codementor.](https://www.codementor.io/davidkopal/higher-order-components-the-ultimate-guide-hlup3gc4i)***