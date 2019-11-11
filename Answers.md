# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

-- React JS is a Javascript library created by the Facebook Development team in order to make modules dynamic and more reusable.    

2. What does it mean to think in react?

-- Look at a concept, or website, and break it down into individual components that could be reusable. 

3. Describe state.

-- State is where property values are stored in a component. When the State Object changes, ONLY that component re-renders.

4. Describe props.

-- Props are properties, or attributes of a component. They make components dynamic by being passed in a similar way that an argument is passed to a function.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

-- Side effects are things that a component does in addition to returning elements, and happens after the component has finished rendering. Syncing the effects is done with the dependencies array, which tells React to only run if a dependency has changed from prevState.