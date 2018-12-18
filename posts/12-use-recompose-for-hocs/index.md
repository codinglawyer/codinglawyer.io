---
date: 2018-06-20

title: Use Recompose for higher-order components' composition
seo_title: Use Recompose for higher-order components' composition
slug: use-recompose-for-hocs
description:
   By providing us with many reusable higher-order components, the Recompose library makes the usage of HoCs in React much easier, since we don't need to write all the HoCs ourselves.
tags:
- react
- functional programming
- recompose
thumbnail:
- composing
---

![alt text](./images/composing.jpg "DJ's equipment")

In the *[previous post](https://www.codinglawyer.io/posts/composition-of-hocs)*, you’ve seen some simple HoCs. However, this pattern is so powerful that it has been used in many React-based libraries (such as *[React-redux](https://github.com/reduxjs/react-redux)*, *[React-router](https://github.com/ReactTraining/react-router)*, *[Recompose](https://github.com/acdlite/recompose)*).

I would like to talk more about the Recompose library, which provides us with dozens of HoCs. It uses HoCs for everything from state and lifecycle to conditional rendering and props manipulation.

Let’s rewrite our HoC composition example from the *[previous post](https://www.codinglawyer.io/posts/composition-of-hocs)* using the predefined HoCs from Recompose.

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

Our *[two custom](https://www.codinglawyer.io/posts/composition-of-hocs)* HoCs `withSimpleState` and `withTransformProps` are already predefined in Recompose as `withState` and `mapProps`. Moreover, the library also provides us with a predefined `compose` function. So, it’s really easy just to use these existing implementations, rather than defining our own.

The Recompose version of the HoC composition isn’t that different from ours. Just the `withState` HoC is now more reusable since it takes three arguments, where you can set the default value of the state, the state name, and the name of its handler as well. `mapProps` works the same way as our implementation. We only need to pass the configuration function.

**As a result, we don’t need to define HoCs, which provide us with a general behavior ourselves.**

## More improvements

We can improve our composition using Recompose even more since there’s still one issue we haven’t addressed yet.

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

If we check the `renderDisplayList` component, we've *[defined earlier](https://www.codinglawyer.io/posts/composition-of-hocs)*, we can see that its click handler function gets recreated each time the component re-renders. And we want to prevent any unnecessary recreation since it might hinder the performance of our application. Fortunately, we can add the `withHandlers` HoC to our composition to address this issue.

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

`withHandlers` HoC takes an object of functions as a configuration argument. In our example, we pass an object with a single function `handleSetState`. When this happens, we get back an HoC expecting the base component and the props to be passed. When we pass them, the outer function in every key of the passed object receives the props object as an argument.

In our case `handleSetState` function receives `stateHandler` and `otherSide` props. We get back a new function that is then injected to the props and is passed down to the `renderDisplayList` component.

The `handleSetState` then gets attached to the button in a way that doesn’t require its recreation during every component's re-render since the `withHandlers` makes sure that the identity of its handlers are preserved across renders. As a result, **the handlers get recreated only when the props passed to the `withHandlers` change.**

Of course, the possible recreation of our simple click handler function doesn’t hinder the performance much. `withHandlers` is much more useful when you need to optimize a higher number of complex handlers.

This also means that it’s a good place for storing all the handlers used inside your presentational component. This way, it’s immediately obvious for anyone who looks at your component, which handlers are being used inside it. As a result, it’s pretty simple for a developer to add or remove a particular handler. This is much better than searching for all the handlers inside a component manually.

**By providing us with many reusable HoCs, Recompose makes HoC composition and the usage of HoCs in general much easier, since we don't need to write all the HoCs ourselves.**

In real-world applications, you’ll be using these predefined HoCs quite often since they cover most typical use cases. And in the case you need a specific logic that needs to be shared across several components, you’ll define an HoC yourself.

![alt text](./images/strings.jpg "Strings")