1. What problem does the context API help solve?

 Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in Redux are packets of information that contain an action type and associated data.

Reducer is a state management pattern that allows us to write pure functions to manage state changes in a predictable manner.

Store contains our state for our application. It is known as a single source of truth because the only way to change data is to dispatch redux action that changes the state. 




3.What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. 

Component state can only be updated within that component and passed down to its children via props.


4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux Thunk is a middleware that provides the ability to handle asynchronous operations inside our Action Creators.

What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite is Context API, I personally think it's easier than Redux. 