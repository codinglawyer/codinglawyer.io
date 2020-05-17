---
date: 2018-08-28

title: Higher-order components&#58 the ultimate guide (part II)
seo_title: Higher-order components&#58 the ultimate guide (part II)
slug: hocs-the-ultimate-guide-part-ii
description:
   You'll learn how to enhance your presentationanl components using higher-order components in your React application, and you’ll also understand the principles behind this pattern.
tags:
- react
- functional programming
- recompose
featuredImage: ./images/avocado.jpg
---

*[In the first part](https://www.codinglawyer.io/posts/hocs-the-ultimate-guide-part-i)*, you learned how to write reusable higher-order components (HoC) and hopefully understood the ideas behind this pattern as well. Now, you are going to learn the difference between class HoC and the functional one and we'll spend a good amount of time understanding how the composition of several higher-order components works.

### Functional or class-based HoCs?

![alt text](./images/avocado.jpg "Avocado")

Let’s talk a little bit about the difference between functional HoCs and class-based ones. When is it more convenient to stick to the former and when should you go for the latter?

Since we want to follow the principles of FP, we should be using **functional components** as much as possible. We’re already doing this with presentational components as we’ve seen above. And we should do this with HoCs as well.

### Functional HoC

A functional HoC just wraps the base component, injects it with new props along with the original ones, and returns a new component. It doesn’t change the original component by modifying its prototype as the classes do. We saw such an HoC above. Here’s a quick reminder:

```js
const withTransformProps = mapperFunc =>
   BaseComponent => baseProps => {
      const transformedProps = mapperFunc(baseProps)
      return <BaseComponent {...transformedProps} />
   }
```

This HoC doesn’t have any side effects. It doesn’t mutate anything. It’s a pure function.

When creating an HoC, we should define it as a functional component if possible.

### Class-based HoCs

However, sooner or later, you’ll need to access the internal state or lifecycle methods in your component. You can’t achieve this without classes since this behavior is inherited from the *[React.Component](https://reactjs.org/docs/react-component.html)*, which can’t be accessed within the functional component. So, let’s define a class-based HoC.

```js
const withSimpleState = defaultState => BaseComponent => {
   return class WithSimpleState extends React.Component {
      constructor(props) {
         super(props)
         this.state = { value: defaultState }
         this.updateState = this.updateState.bind(this)
      }
      updateState(value) {
         this.setState({ value })
      }
      render() {
         return (
            <BaseComponent
               {...this.props}
               stateValue={this.state.value}
               stateHandler={this.updateState}
            />
         )
      }
   }
}

const renderDisplayList = ({ list, stateValue, stateHandler })=> {
   const filteredList = list.filter(char => char.side === stateValue)
   const otherSide = stateValue === 'dark' ? 'light' : 'dark'
   return (
      <div>
         <button onClick={() => stateHandler(otherSide)}>Switch</button>
         {filteredList.map(char =>
            <div key={char.name}>
               <div>Character: {char.name}</div>
               <div>Side: {char.side}</div>
            </div>
         )}
      </div>
   )
}

const FilteredList = withSimpleState('dark')(renderDisplayList)

ReactDOM.render (
   <FilteredList list={starWarsChars} />,
   document.getElementById('app')
)
```

Our new class-based HoC `withSimpleState` expects a configuration parameter `defaultState` which is pretty self-explanatory. It also maintains a state named `value` and defines an event handler `updateState` that can set the value of the state. Finally, it passes the state utilities along with the original props to the base component.

`renderDisplayList` now contains filtering logic that was previously stored inside the `withTransformProps` HoC, so it’s not reusable anymore.

Let’s take a look at the `FilteredList` component. First, we pass the configuration string `dark` to the `withSimpleState` and get back a specialized HoC waiting for the base component. So, we pass it the `renderDisplayList` component and get back a class component waiting for the props to be passed. We store this component as the `FilteredList`.

At the end of the example, we render the component by passing the props to it. When this happens, the class component sets the state `value` to `dark` and passes the state and its handler to the `renderDisplayList` component along with the `list` prop.

`renderDisplayList` then filters the `list` prop according to the passed state value and sets the `otherSide` variable. Finally, it renders the filtered list to the screen along with the button with the attached state handler. When the button is clicked, the state is set to the `otherSide` variable.

### Does it matter?

As you’ve just seen, our new HoC `withSimpleState` returns a class, instead of a functional component. You might say it doesn’t look like a **pure function** since it contains impure class-specific behavior (state). However, let’s take a closer look.

`withSimpleState` doesn’t have any side effects. It doesn’t mutate anything. It just takes the base component and returns a new one. Although it contains the impure class-related code, the HoC itself is still a pure function since “the purity of a function is judged from the outside, *[regardless of what goes on inside](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch5.md#containing-effects)*.” We are basically hiding the class-specific impure code inside the HoC pure function.

The HoC (pure function) enables us to encapsulate the impure class-related code inside of it.

If you find yourself in a situation where you simply can’t write a functional component because you need a class-related behavior, wrap the impure code inside the HoC, which is the pure function instead, just as we did in the example.

### What’s next?

If you check our example again, you’ll see that we have a new problem. The `renderDisplayList` component is no longer reusable since we moved the filtering logic inside it.

To make it reusable again, we need to move the logic back to the `withTransformProps` HoC. To achieve this, we need to figure out how to use the `withTransformProps` and `withSimpleState` HoCs with the base component at the same time and allow the `renderDisplayList` to only be responsible for the presentation again. We can achieve this behavior using composition.

### Composition

![alt text](./images/skyscraper.jpg "Two skyscrapers")

We’ve already talked about the composition principle at the beginning. It enables us to combine several functions into a new compound function. Here’s a quick reminder:

```js
const number = 15
const increment = num => num + 5
const decrement = num => num - 3
const multiply = num => num * 2

const operation = increment(decrement(multiply(number)))
console.log(operation)  //32
```

We have a number and three functions. We wrap them all inside each other, and we get a compound function to which we pass the number.

This works fine. However, the readability might get worse, if we wanted to compose even more functions. Fortunately, we can define a functional programming `compose` function to help us out. Keep in mind that it composes functions from **right to left**.

```js
const compose = (...funcs) => value =>
   funcs.reduceRight((acc, func) => func(acc)
      , value)

const number = 15
const increment = num => num + 5
const decrement = num => num - 3
const multiply = num => num * 2

const funcComposition = compose(
   increment,
   decrement,
   multiply
)

const result = funcComposition(number)
console.log(result)  //32
```

We no longer need to explicitly wrap the functions inside each other. Instead, we pass them all as the arguments to the `compose` function. When we do that, we get back a new compound function waiting for the `value` argument to be passed. We store it as a `funcComposition`.

Finally, we pass the `number` as the `value` to the `funcComposition` function. When this happens, the `compose` passes the `value` to the `multiply` (rightmost) function. The returned value is then passed as an input to the `decrement` function and so on until all the functions in the composition have been called. We store the final value as a `result`.

### Composition of HoCs

Let’s take a look at how we could `compose` several HoCs. We’ve already learned that our reusable HoCs should only be responsible for a single task. However, what if we needed to implement complex logic that can’t be stored in a single HoC? To achieve this, we want to be able to **combine several HoCs together and wrap them around the base component.**

First, let’s take a look at the HoC composition without a `compose` helper since it’s easier to understand what’s going on.

```js
const withTransformProps = mapperFunc =>
   BaseComponent => baseProps => {
      const transformedProps = mapperFunc(baseProps)
      return <BaseComponent {...transformedProps} />
   }

const withSimpleState = defaultState => BaseComponent => {
   return class WithSimpleState extends React.Component {
      constructor(props) {
         super(props)
         this.state = { value: defaultState }
         this.updateState = this.updateState.bind(this)
      }
      updateState(value) {
         this.setState({ value })
      }
      render() {
         return (
            <BaseComponent
               {...this.props}
               stateValue={this.state.value}
               stateHandler={this.updateState}
            />
         )
      }
   }
}

const renderDisplayList = ({ list, stateHandler, otherSide }) => (
   <div>
      <button onClick={() => stateHandler(otherSide)}>Switch</button>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>
)

const FilteredList = withTransformProps(({ list, stateValue, stateHandler }) => {
   const otherSide = stateValue === 'dark' ? 'light' : 'dark'
   return {
      stateHandler,
      otherSide,
      list: list.filter(char => char.side === stateValue),
   }
})(renderDisplayList)

const ToggleableFilteredList = withSimpleState('dark')(FilteredList)

ReactDOM.render (
   <ToggleableFilteredList list={starWarsChars} />,
   document.getElementById('app')
)
```

Nothing new here. We’ve seen all this code before. The new thing is that we are composing two HoCs — `withSimpleState` which provides us with the state utilities and `withTransformProps` which gives us the props transformation functionality.

We have two enhanced components here: `FilteredList` and `ToggleableFilteredList`.

First, we enhance the `renderDisplayList` component with the `withTransformProps` HoC and store it as the `FilteredList`. Secondly, we enhance the new `FilteredList` component using the `withSimpleState` HoC and store it as the `ToggleableFilteredList`.

`ToggleableFilteredList` is a component enhanced by two HoCs that have been composed together.

Here’s a detailed description of the HoC composition:

1. We pass a props transformation function to the `withTransformProps` HoC and get back a specialized HoC waiting for the base component to be passed.
2. We pass it the `renderDisplayList` presentational component and get back a new functional component expecting the props argument.
3. We store this enhanced component as the `FilteredList`.
4. We pass the `dark` string to the `withSimpleState` HoC and get back a specialized HoC waiting for the base component to be passed.
5. We pass it our enhanced `FilteredList` component as the base component and we get back a class component waiting for the props.
6. We store this **higher-order component composition** as the `ToggleableFilteredList`.
7. We render the `ToggleableFilteredList` component by passing the `list` props to it.
8. `ToggleableFilteredList` is the `FilteredList` component enhanced by the `withSimpleState` HoC. So, the props are first passed to the class component that was returned by this HoC. Inside it, the props get enhanced with a state and its handler. These props along with the original ones are then passed to the `FilteredList` as the base component.
9. `FilteredList` is a `renderDisplayList` component enhanced by the `withTransformProps` HoC. So, the props are first passed to the functional component that was returned by this HoC. Inside it, the passed `list` prop is filtered using the transformation function. These props along with the other props are then passed to the base component `renderDisplayList`.
10. Finally, the `renderDisplayList` component renders the list of the characters with the switch button to the screen.

The composition lets us enhance our base component with the functionality aggregated from several HoCs.

In our example, we passed the new behavior from the `withSimpleState` and `withTransformProps` HoCs to the `renderDisplayList` base component.

As you’ve just seen, the **props are the only language that HoCs use to talk to each other inside a composition**. Each HoC performs a specific action which results in an enhancement or a modification of the props object.

![alt text](./images/hands.jpg "Audience")

### Refactor

Although our HoC composition works, the syntax itself is pretty verbose. We can make it simpler by getting rid of the `ToggleableFilteredList` variable and just wrap the HoCs inside each other.

```js
const FilteredList = withSimpleState('dark')(
   withTransformProps(({ list, stateValue, stateHandler }) => {
      const otherSide = stateValue === 'dark' ? 'light' : 'dark'
      return {
         stateHandler,
         otherSide,
         list: list.filter(char => char.side === stateValue),
      }
   })(renderDisplayList)
)
```

This code is a little bit better. However, we are still manually wrapping all the components. Imagine that you wanted to add even more HoCs to this composition. In such a case, our composition will become difficult to read and understand. Just imagine all those parentheses!

### Using compose

Since this talk is about FP principles, let’s use the `compose` helper.

```js
const compose = (...hocs) => BaseComponent =>
   hocs.reduceRight((acc, hoc) => hoc(acc)
      , BaseComponent)

const enhance = compose(
   withSimpleState('dark'),
   withTransformProps(({ list, stateValue, stateHandler }) => {
      const otherSide = stateValue === 'dark' ? 'light' : 'dark'
      return {
         stateHandler,
         otherSide,
         list: list.filter(char => char.side === stateValue),
      }
   })
)

const FilteredList = enhance(renderDisplayList)
```

We no longer need to explicitly wrap the HoCs inside each other. Instead, we pass them all as the arguments to the `compose` function. When we do that, we get back a new compound function waiting for the `BaseComponent` argument to be passed. We store this function as `enhance`. Then, we just pass the `renderDisplayList` as the base component to it, and `compose` will do all the component wrapping for us.

### Pancakes again

I’d like to come back to our **pancake** analogy. Before, we were decorating our pancakes with only a single flavorful layer. But as we all know, pancakes taste much better when you combine more flavors together. How about a pancake with melted chocolate and banana or with cream and caramel? You know what I’m talking about…

Just as you can decorate your pancake using one or several decorating layers depending on your tastes, you can decorate your presentational component with one or several HoCs to get the combination of logic you want for your particular use case.

![alt text](./images/pancake-decorated.jpg "Pancakes")

If you need a complex logic for your presentational component, you don’t need to store it all inside a single component or in a single HoC. Instead, you just compose several simple HoCs together and enhance your presentational component with them.

### Recompose

So far, you’ve seen some simple HoCs. However, this pattern is so powerful that it has been used in many React-based libraries (such as React-Redux, React router, Recompose).

I’d like to talk more about the *[Recompose library](https://github.com/acdlite/recompose)*, which provides us with dozens of HoCs. It uses HoCs for everything from state and lifecycle to conditional rendering and props manipulation.

Let’s rewrite our HoC composition example using the predefined HoCs from Recompose.

```js
import { withState, mapProps, compose } from 'recompose';

const enhance = compose(
   withState('stateValue', 'stateHandler', 'dark'),
   mapProps(({ list, stateValue, stateHandler }) => {
      const otherSide = stateValue === 'dark' ? 'light' : 'dark'
      return {
         stateHandler,
         otherSide,
         list: list.filter(char => char.side === stateValue),
      }
   }),
)

const FilteredList = enhance(renderDisplayList)

ReactDOM.render (
   <FilteredList list={starWarsChars} />,
   document.getElementById('app')
)
```

Our two custom HoCs `withSimpleState` and `withTransformProps` are already predefined in Recompose as `withState` and `mapProps`. Moreover, the library also provides us with a predefined `compose` function. So, it’s really easy just to use these existing implementations, rather than defining our own.

The Recompose version of the HoC composition isn’t that different from ours. Just the `withState` HoC is now more reusable since it takes three arguments, where you can set the default value of the state, the state name, and the name of its handler as well. `mapProps` works the same way as our implementation. We only need to pass the configuration function.

As a result, we don’t need to define HoCs, which provide us with a general behavior.

### More improvements

We can improve our composition using Recompose even more since there’s still one issue we haven’t addressed yet.

```js
const renderDisplayList = ({ list, stateHandler, otherSide }) => (
   <div>
      <button onClick={() => stateHandler(otherSide)}>Switch</button>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>
)
```

If we check the `renderDisplayList` component again, we can see that it’s click handler function gets recreated each time the component re-renders. And we want to prevent any unnecessary recreation since it might hinder the performance of our application. Fortunately, we can add the `withHandlers` HoC to our composition to address this issue.

```js
import { withState, mapProps, withHandlers, compose } from 'recompose';

const renderDisplayList = ({ list, handleSetState }) => (
   <div>
      <button onClick={handleSetState}>Switch</button>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>
)

const enhance = compose(
   withState('stateValue', 'stateHandler', 'dark'),
   mapProps(({ list, stateValue, stateHandler }) => {
      const otherSide = stateValue === 'dark' ? 'light' : 'dark'
      return {
         stateHandler,
         otherSide,
         list: list.filter(char => char.side === stateValue),
      }
   }),
   withHandlers({
      handleSetState: ({ stateHandler, otherSide }) => () => stateHandler(otherSide)
   })
)

const FilteredList = enhance(renderDisplayList)

ReactDOM.render (
   <FilteredList list={starWarsChars} />,
   document.getElementById('app')
)
```

`withHandlers` HoC takes an object of functions as a configuration argument. In our example, we pass an object with a single function `handleSetState`. When this happens, we get back an HoC expecting the base component and the props to be passed. When we pass them, the outer function in every key of the passed object receives the props object as an argument.

In our case `handleSetState` function receives `stateHandler` and `otherSide` props. We get back a new function that is then injected to the props and is passed down to the `renderDisplayList` component.

The `handleSetState` then gets attached to the button in a way that doesn’t require its recreation during every component's re-render since the `withHandlers` makes sure that the identity of its handlers are preserved across renders. As a result, the handlers get recreated **only** when the props passed to the `withHandlers` change.

Of course, the possible recreation of our simple click handler function doesn’t hinder the performance much. `withHandlers` is much more useful when you need to optimize a higher number of complex handlers.

This also means that it’s a good place for storing all the handlers used inside your presentational component. This way, it’s immediately obvious for anyone who looks at your component, which handlers are being used inside it. As a result, it’s pretty simple for a developer to add or remove a particular handler. This is much better than searching for all the handlers inside a component manually.

By providing us with many reusable HoCs, Recompose makes HoC composition and the usage of HoCs in general much easier, since we don’t need to write all the HoCs ourselves.

In real-world applications, you’ll be using these predefined HoCs quite often since they cover most typical use cases. And in the case you need a specific logic that needs to be shared across several components, you’ll define an HoC yourself.

![alt text](./images/strings.jpg "Strings")

### Conclusion

Thanks to the principles of functional programming we were able to transform this not reusable huge component from the beginning…

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

…into this reusable, readable, and maintainable component composition.

```js
import { withState, mapProps, withHandlers, compose } from 'recompose';

const renderDisplayList = ({ list, handleSetState }) => (
   <div>
      <button onClick={handleSetState}>Switch</button>
      {list.map(char =>
         <div key={char.name}>
            <div>Character: {char.name}</div>
            <div>Side: {char.side}</div>
         </div>
      )}
   </div>
)

const enhance = compose(
   withState('stateValue', 'stateHandler', 'dark'),
   mapProps(({ list, stateValue, stateHandler }) => {
      const otherSide = stateValue === 'dark' ? 'light' : 'dark'
      return {
         stateHandler,
         otherSide,
         list: list.filter(char => char.side === stateValue),
      }
   }),
   withHandlers({
      handleSetState: ({ stateHandler, otherSide }) => () => stateHandler(otherSide)
   })
)

const FilteredList = enhance(renderDisplayList)

ReactDOM.render (
   <FilteredList list={starWarsChars} />,
   document.getElementById('app')
)
```

We use these principles during application development quite often. Our aim is to use simple reusable components as much as possible. The HoC pattern helps us to achieve this since its idea is to move the logic to the HoC and let the presentational functional component take care of the UI rendering. As a result, we don’t need to use classes for our presentational components anymore, only for the HoCs if we need a class-specific behavior.

As a result, our application is composed of a bunch of presentational components that we can reuse throughout our application, and we can enhance them using one or several reusable HoCs to get a logic we need for a particular scenario (such as a dedicated HoC for data fetching).

A cool feature about our approach is that, if you take a look at a particular HoC composition, you immediately know what kind of logic it uses. You just need to check the `compose` function where you can see all the logic contained in the HoCs. If you decide to add more logic, you just insert a new HoC into the `compose` function. Furthermore, if you wanted to see what handlers the component uses, you just need to check the `withHandlers` HoC.

Another cool thing about HoCs is that they’re not tied to React. This means you can use them in your other applications that haven’t been written in React.

***This post was also published on [my Medium blog](https://medium.freecodecamp.org/higher-order-components-the-ultimate-guide-b453a68bb851) (2018) and on [codementor.](https://www.codementor.io/davidkopal/higher-order-components-the-ultimate-guide-hlup3gc4i)***

![alt text](./images/tv.jpg "Flat screen TV")
