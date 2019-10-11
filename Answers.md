1. What problem does the context API help solve?

    It removes the need for prop drilling and allows state to stay in a centralized location.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are descriptive functions that tell the reducer what has taken place in the app.The reducer examines an action and determines how to update the store.The store
maintains a centralized collection of state data for the entire app.The store is known as a single source of truth because it houses all of the immutable state data that
can only be modified by passing an action to the reducer.This ensures that no side effects modify our state data and that we can always find an accurate and up to date state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The application state is a snapshot of the entirety of the application whereas component state is the same in reference to a single component.Sometimes you can have state living on a single component when it addresses only that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Thunk is a middleware that allows us to extend the functionality of redux.It is asynchronous and provides the possibility of using things like promises when addressing our store.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux is my favorite so far. I think it is a very clean and elegant solution to the state management issue(when using hooks). 
