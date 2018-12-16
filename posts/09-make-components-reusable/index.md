---
date: 2018-03-26

title: Make all the components reusable
seo_title: Make all the components reusable
slug: make-components-reusable
description:
   Making components in React reusable means to decouple them from the data. This means they shouldn’t be dependent on a particular props structure. Sticking to reusable components will help you to avoid unnecessary duplication.
tags:
- react
- functional programming
thumbnail:
- brushes
---

![alt text](./images/brushes.jpg "Many brushes")

In the previous posts, you’ve learned how to create a HoCs. Now, we’ll take a look at how to make them reusable.

Making components reusable means to **decouple them from the data**. This means that they shouldn’t be dependent on a particular props structure. Sticking to reusable components helps you to avoid unnecessary duplication. You just pass a different set of props each time.

By using the HoC pattern in *[one of the previous posts](https://www.codinglawyer.io/posts/introducing-higher-order-components)*, we moved all the logic to the HoC, and just let the base component render the UI.

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

As a result, our **presentational component became reusable** since it just receives data as props and renders it to the screen.

But it would be pretty difficult to reuse our HoC as well since it's too specific.

    const withFilterProps = BaseComponent => ({ list, side }) => {
       const transformedProps = list.filter(char => char.side === side)
       return <BaseComponent list={transformedProps} />
    }

It can be applied only in the cases where the `list` and `side` props are present. You don’t want this kind of specificity in your application since you want reusable HoCs that can be used in various scenarios.

Let’s make the HoC reusable.

![alt text](./images/make-components-reusable.jpg "Make all the things meme")

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

This code still does the same thing as the previous HoC example. We filter the props using the HoC component and then pass them to the base component. However, the old name would be misleading, since the HoC is no longer limited only to the filtering logic, so we renamed it `withTransformProps`.

We also no longer care about the props structure. We are newly passing a `transformFunc` as a **configuration function** to the `withTransformProps`. This function is responsible for the props transformation.

Let’s take a look at the `FilteredList` enhanced component. It gets created when we pass the configuration function (responsible for the props transformation) to the `withTransformProps`. We get back a specialized HoC with the transformation function stored inside the closure. We store it as the `ConfiguredComponent`. It expects the `BaseComponent` to be passed. When the `renderDisplayList` is passed to it, we get back a functional component that is waiting for the props to be passed. We store this enhanced component as the `FilteredList`.

The props get passed when we render the `FilteredList` component. Then, the transforming function we passed earlier takes the props and filters the characters according the side. The returned value is then passed as the props to the `renderDisplayList` base component which renders Start Wars characters to the screen.

However, our HoC syntax is pretty verbose. We don’t need to store the specialized HoC as the `ConfiguredComponent` inside a variable.

    const withTransformProps = mapperFunc =>
       BaseComponent => baseProps => {
          const transformedProps = mapperFunc(baseProps)
          return <BaseComponent {...transformedProps} />
       }

This solution is much cleaner.

The idea behind this approach is to **have a reusable HoC that can be configured for any scenario** in which we want to do something with the props before they get passed to the base component. That’s a powerful abstraction, isn’t it?

In our example, we passed a custom filtering function that could be different for every use case. And if we later decide that we want to change some of the HoC’s behavior, we just need to change it in a single reusable component and not in many different places of our application.

    const HoC => config => BaseComponent => EnhancedComponent

The HoC and the base component are both **reusable** and **independent** of each other. The HoC doesn’t know where its data goes and the presentational component has no idea where its data is coming from.

Writing reusable HoCs and presentational components will help you to avoid unnecessary repetition and force you to write simpler components. **As a result, you will be writing cleaner, maintainable, and readable code.**

![alt text](./images/coffee-code.jpg "Make all the things meme")
