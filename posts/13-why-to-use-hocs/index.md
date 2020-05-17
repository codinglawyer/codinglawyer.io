---
date: 2018-08-04

title: Why to use higher-order components anyway?
seo_title: Why to use higher-order components anyway?
slug: why-to-use-hocs
description:
   If you stick to the higher-order components, your React application will be composed of reusable higher-order and presentational components.
tags:
- react
- functional programming
- recompose
featuredImage: ./images/tree-question-mark.jpg
---

![alt text](./images/tree-question-mark.jpg "Question marks written trees")

*This is the final post from the post series about higher-order components.*

In the previous posts, we've uncovered the ideas behind the concept of higher-order components. We've also learned how to create a higher-order component and how to compose several of them together and enhance a presentational component by them.

As a result, we were able to transform this not reusable component…

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

We use these principles during application development quite often. Our aim is to use simple reusable components as much as possible. The HoC pattern helps us to achieve this since its idea is to move the logic to the HoC and let the presentational functional component take care of the UI rendering. As a result, we don’t need to use classes for our presentational components anymore, only for the HoCs if we need a class-specific behavior.

As a result, our application is composed of a bunch of presentational components that we can reuse throughout our application, and we can enhance them using one or several reusable HoCs to get a logic we need for a particular scenario (such as a dedicated HoC for data fetching).

A cool feature about our approach is that, if you take a look at a particular HoC composition, you immediately know what kind of logic it uses. You just need to check the `compose` function where you can see all the logic contained in the HoCs. If you decide to add more logic, you just insert a new HoC into the `compose` function. Furthermore, if you wanted to see what handlers the component uses, you just need to check the `withHandlers` HoC.

Another cool thing about HoCs is that they’re not tied to React. You don’t write `import React from ‘react'` in your HoCs. This means you can use them in your other applications that haven’t been written in React.
