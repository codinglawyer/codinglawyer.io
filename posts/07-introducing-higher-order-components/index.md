---
date: 2018-02-14

title: Introducing higher-order components
seo_title: Introducing higher-order components
slug: introducing-higher-order-components
description:
  We'll take a look at how to use principles of functional programming in React. You'll learn how to write reusable higher-order components and you'll understand the ideas behind this pattern as well.
tags: 
- react
- functional programming
thumbnail:
- chip
---

![alt text](./images/chip.jpg "Computer chip")

*[In the previous post](https://www.codinglawyer.io/posts/taste-the-principles-of-fp-in-react)*, you've learned about the basic principles of functional programming (FP). Now, we'll take a look at how to use these principles in React. You'll learn how to write reusable higher-order components and you'll understand the ideas behind this pattern as well.

React applications are composed of components. But what exactly is a component?

```Javascript
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

Since the class is just syntactic sugar over functions and the functional component is basically a function, **components are just functions**. It’s a function that takes input data (props) and returns a tree of React elements (UI) which is rendered to the screen. However, it doesn’t need to return UI all the time. It can return a component as well as we’re going to see later.

So, React UI is just a composition of functions. That sounds awfully like FP, right?

## Smart and presentational components

A component is typically composed of logic and presentation. However, if we decide to write all our components as such, we would end up with dozens of components having only a single purpose. On the other hand, if we try to *[separate these concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)*, we will be able to create simple reusable components. Following this idea, we should prefer defining our components as smart (logic) and presentational (UI).

The **presentational** component takes care of all the UI. It will typically have the form of a **functional** component, which is just a render method. You can think of them as functions.

The component containing mostly logic is called **smart**. It typically handles data manipulations, API calls, and event handlers. It will often be defined as a **class** since it provides us with more functionality (such as internal state and lifecycle).

Each component should be responsible for a single task and written so generally that it can be reused throughout the application. Such a task should be logic (smart component) or presentation (presentational component). The combination of both in a single component should be minimized.

**Smart class component:**

```Javascript
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

**Presentational functional component:**

```Javascript
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

Not only is that React application a composition of functions in general, but it can also be a composition of pure functions.

![alt text](./images/smoke.jpg "Smoke")


As we’ve learned in the previous post, pure functions are the basic building blocks of FP. So if we prefer using functional components, we will be able to **apply various FP techniques** such as the higher-order components in our code.

Let’s take a look at our functional component again. It takes a list of Star Wars characters as a prop and renders them to the screen. It’s pretty reusable since it doesn’t contain any logic.

Now, what if we wanted to display only characters belonging to the dark side? The simplest solution will be to filter the `list` prop inside the component.

```Javascript
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

```Javascript
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

## Introducing higher-order components

Let’s now talk about the nature of the higher-order function `withFilterProps`. In React’s vocabulary, such a function is called a higher-order component (HoC). Just as the higher-order function creates a new function, the HoC creates a new component.

HoC is a **function** that **expects** **a component** and **returns a new component that renders the passed one.** This new component is enhanced with an additional functionality.

```Javascript
    const HoC = BaseComponent => EnhancedComponent
```

In our example, the `withFilterProps` HoC takes the `renderDisplayList` component and returns a new functional component that renders the `renderDisplayList`. The `renderDisplayList` component is enhanced with the filtering props logic.

**Because we abstracted all the logic to the HoC, our base functional component only takes care of the UI rendering and is reusable again.**

![alt text](./images/bottles.jpg "Empty beer bottles")

The HoC is a special type of a function that wraps the presentational component and enhances it with an advanced functionality. Think of them as the **wrappers for your functional components.**

Thanks to the HoC pattern, you can enhance your simple functional components with whatever logic you want. This is the power of the HoC pattern. You can edit/update/transform props, maintain internal state, or affect the component rendering outside of your presentational component.

Sticking to this pattern will enable you to use only functional components as your base components throughout your application and **get rid of all the class components.**

If we again consider the distinction between smart and presentational components, the base component will always be the presentational one (since it’s just a pure function). On the other hand, the HoC will take the role of a smart component since it deals only with the logic, which is then passed down to the presentational component. However, if you don’t need the class-specific behavior, you can also define HoC as a functional component (as you’ve just seen).