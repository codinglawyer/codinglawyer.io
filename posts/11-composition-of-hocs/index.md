---
date: 2018-05-14

title: Composition of higher-order components
seo_title: Composition of higher-order components
slug: composition-of-hocs
description:
   You will learn how to compose several higher-order components using composition. Then, you'll use this composition to enhance you presentational component.
tags:
- react
- functional programming
thumbnail:
- skyscraper
---

![alt text](./images/skyscraper.jpg "Two skyscrapers")

If you check our example from the *[previous post](https://www.codinglawyer.io/posts/functional-or-class-hocs)*, you’ll see that we have a new problem. The `renderDisplayList` component is no longer reusable since we moved the filtering logic inside it.

To make it reusable again, we need to move the logic back to the `withTransformProps` HoC. To achieve this, we need to figure out how to use the `withTransformProps` and `withSimpleState` HoCs with the base component at the same time and allow the `renderDisplayList` to only be responsible for the presentation again. We can achieve this behavior using composition.

## Composition

We’ve already talked about the composition principle in of the *[previous posts](https://www.codinglawyer.io/posts/taste-the-principles-of-fp-in-react)*. It enables us to combine several functions into a new compound function. Here’s a quick reminder:

    const number = 15
    const increment = num => num + 5
    const decrement = num => num - 3
    const multiply = num => num * 2
    
    const operation = increment(decrement(multiply(number)))
    console.log(operation)  //32

We have a number and three functions. We wrap them all inside each other, and we get a compound function to which we pass the number.

This works fine. However, the readability might get worse, if we wanted to compose even more functions. Fortunately, we can define a functional programming `compose` function to help us out. Keep in mind that it composes functions from right to left.

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

We no longer need to explicitly wrap the functions inside each other. Instead, we pass them all as the arguments to the `compose` function. When we do that, we get back a new compound function waiting for the `value` argument to be passed. We store it as a `funcComposition`.

Finally, we pass the `number` as the `value` to the `funcComposition` function. When this happens, the `compose` passes the `value` to the `multiply` (rightmost) function. The returned value is then passed as an input to the `decrement` function and so on until all the functions in the composition have been called. We store the final value as a `result`.

## Composition of HoCs

Let’s take a look at how we could `compose` several HoCs. We’ve already learned that our reusable HoCs should only be responsible for a single task. However, what if we needed to implement complex logic that can’t be stored in a single HoC? To achieve this, we want to be able to **combine several HoCs together and wrap them around the base component.**

First, let’s take a look at the HoC composition without a `compose` helper since it’s easier to understand what’s going on.

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

Nothing new here. We've seen all this code before. The new thing is that we are composing two HoCs — `withSimpleState` which provides us with the state utilities and `withTransformProps` which gives us the props transformation functionality.

We have two enhanced components here: `FilteredList` and `ToggleableFilteredList`.

First, we enhance the `renderDisplayList` component with the `withTransformProps` HoC and store it as the `FilteredList`. Secondly, we enhance the new `FilteredList` component using the `withSimpleState` HoC and store it as the `ToggleableFilteredList`.

`ToggleableFilteredList` is a component enhanced by two HoCs that have been composed together.

Here’s a detailed description of the HoC composition:

1. We pass a props transformation function to the `withTransformProps` HoC and get back a specialized HoC waiting for the base component to be passed.
2. We pass it the `renderDisplayList` presentational component and get back a new functional component expecting the props argument.
3. We store this enhanced component as the `FilteredList`.
4. We pass the `dark` string to the `withSimpleState` HoC and get back a specialized HoC waiting for the base component to be passed.
5. We pass it our enhanced `FilteredList` component as the base component and we get back a class component waiting for the props.
6. We store this **higher-order component composition** as the `ToggleableFilteredList`.
7. We render the `ToggleableFilteredList` component by passing the `list` props to it.
8. `ToggleableFilteredList` is the `FilteredList` component enhanced by the `withSimpleState` HoC. So, the props are first passed to the class component that was returned by this HoC. Inside it, the props get enhanced with a state and its handler. These props along with the original ones are then passed to the `FilteredList` as the base component.
9. `FilteredList` is a `renderDisplayList` component enhanced by the `withTransformProps` HoC. So, the props are first passed to the functional component that was returned by this HoC. Inside it, the passed `list` prop is filtered using the transformation function. These props along with the other props are then passed to the base component `renderDisplayList`.
10. Finally, the `renderDisplayList` component renders the list of the characters with the switch button to the screen.

**The composition lets us enhance our base component with the functionality aggregated from several HoCs.** In our example, we passed the new behavior from the `withSimpleState` and `withTransformProps` HoCs to the `renderDisplayList` base component.

As you’ve just seen, the **props are the only language that HoCs use to talk to each other inside a composition**. Each HoC performs a specific action which results in an enhancement or a modification of the props object.

## Refactor

Although our HoC composition works, the syntax itself is pretty verbose. We can make it simpler by getting rid of the `ToggleableFilteredList` variable and just wrap the HoCs inside each other.

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

This code is a little bit better. However, we are still manually wrapping all the components. Imagine that you wanted to add even more HoCs to this composition. In such a case, our composition will become difficult to read and understand. Just imagine all those parentheses!

## Using compose

Since this this post series is about FP principles, let’s use the `compose` helper.

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

We no longer need to explicitly wrap the HoCs inside each other. Instead, we pass them all as the arguments to the `compose` function. When we do that, we get back a new compound function waiting for the `BaseComponent` argument to be passed. We store this function as `enhance`. Then, we just pass the `renderDisplayList` as the base component to it, and `compose` will do all the component wrapping for us.

## Pancakes again

I would like to come back to our **pancake** analogy from one of the *[previous posts](https://www.codinglawyer.io/posts/higher-order-components-as-pancakes)*. Before, we were decorating our pancakes with only a single flavorful layer. But as we all know, pancakes taste much better when you combine more flavors together. How about a pancake with melted chocolate and banana or with cream and caramel? You know what I’m talking about…

Just as you can decorate your pancake using one or several decorating layers depending on your tastes, you can decorate your presentational component with one or several HoCs to get the combination of logic you want for your particular use case.

![alt text](./images/pancake-decorated.jpg "Pancakes with toppings")

If you need a complex logic for your presentational component, you don’t need to store it all inside a single component or in a single HoC. Instead, you just compose several simple HoCs together and enhance your presentational component with them.