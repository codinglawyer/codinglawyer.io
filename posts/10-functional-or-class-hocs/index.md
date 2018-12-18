---
date: 2018-04-11

title: Functional or class-based higher-order components?
seo_title: Functional or class-based higher-order components?
slug: functional-or-class-hocs
description:
   We'll talk about the difference between functional higher-order components and class-based ones in React. Since we want to follow the principles of functional programming, we should be using functional components as much as possible.
tags:
- react
- functional programming
thumbnail:
- avocado
---

![alt text](./images/avocado.jpg "Avocado and mango")

If you went through the previous posts, you should be able to write reusable higher-order components yourself and have a better understanding of the ideas behind this pattern as well.

Now, let’s talk about the difference between functional HoCs and class-based ones. When is it more convenient to stick to the former and when should you go for the latter?

Since we want to follow the principles of FP, we should be using **functional components** as much as possible. We’re already doing this with presentational components as we’ve seen in *[the previous post](https://www.codinglawyer.io/posts/make-components-reusable)*. And we should do this with HoCs as well.

## Functional HoC

A functional HoC just wraps the base component, injects it with new props along with the original ones, and returns a new component. It doesn’t change the original component by modifying its prototype as the classes do. We saw such a HoC in *[the previous post](https://www.codinglawyer.io/posts/make-components-reusable)*. Here’s a quick reminder:

    const withTransformProps = mapperFunc =>
       BaseComponent => baseProps => {
          const transformedProps = mapperFunc(baseProps)
          return <BaseComponent {...transformedProps} />
       }

This HoC doesn’t have any side effects. It doesn’t mutate anything. It’s a pure function.

When creating an HoC, we should define it as a functional component if possible.

## Class-based HoCs

However, sooner or later, you’ll need to access the internal state or lifecycle methods in your component. You can’t achieve this without classes since this behavior is inherited from the *[React.Component](https://reactjs.org/docs/react-component.html)*, which can’t be accessed within the functional component. So, let’s define a class-based HoC.

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

Our new class-based HoC `withSimpleState` expects a configuration parameter `defaultState` which is pretty self-explanatory. It also maintains a state named `value` and defines an event handler `updateState` that can set the value of the state. Finally, it passes the state utilities along with the original props to the base component.

`renderDisplayList` now contains filtering logic that was previously stored inside the `withTransformProps` HoC, so it’s not reusable anymore.

Let’s take a look at the `FilteredList` component. First, we pass the configuration string `dark` to the `withSimpleState` and get back a specialized HoC waiting for the base component. So, we pass it the `renderDisplayList` component and get back a class component waiting for the props to be passed. We store this component as the `FilteredList`.

At the end of the example, we render the component by passing the props to it. When this happens, the class component sets the state `value` to `dark` and passes the state and its handler to the `renderDisplayList` component along with the `list` prop.

`renderDisplayList` then filters the `list` prop according to the passed state value and sets the `otherSide` variable. Finally, it renders the filtered list to the screen along with the button with the attached state handler. When the button is clicked, the state is set to the `otherSide` variable.

## Does it matter?

![alt text](./images/question-mark.jpg "Question mark")

As you’ve just seen, our new HoC `withSimpleState` returns a class, instead of a functional component. You might say it doesn’t look like a **pure function** since it contains impure class-specific behavior (state). However, let’s take a closer look.

`withSimpleState` doesn’t have any side effects. It doesn’t mutate anything. It just takes the base component and returns a new one. Although it contains the impure class-related code, the HoC itself is still a pure function since *[the purity of a function is judged from the outside, regardless of what goes on inside](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch5.md#containing-effects)*. We are basically hiding the class-specific impure code inside the HoC pure function.

The HoC (pure function) enables us to encapsulate the impure class-related code inside of it.

If you find yourself in a situation where you simply can’t write a functional component because you need a class-related behavior, wrap the impure code inside the HoC, which is the pure function instead, just as we did in the example.