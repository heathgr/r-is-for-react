import React from 'react'
import { StoreProvider } from '../src/index'
import { createStore } from 's-is-for-store'

// Define the interface for the store.
interface AppState {
  count: number
}

// Initialize the initial app state.
const initiailState: AppState = {
  count: 0
}

// Create the store.
const appStore = createStore<AppState>(initiailState)
const { getState, setState } = appStore

// Define functions for mutating the state.
const increment = () => {
  const { count } = getState()

  setState({
    count: count + 1
  })
}

const decrement = () => {
  const { count } = getState()

  setState({
    count: count - 1
  })
}

const App = () => (
  // The StoreProvider component is used to pass state to react components.
  // The appStore is passed to the StoreProvider component as a prop.
  <StoreProvider<AppState> store={appStore}>
    {
      // The child of a Store Provider component should be a function.
      // This function gets called with the store's state.
      // The function should return React elements.
      ({ count }) => (
        <div>
          <h1>{`The count is ${count}`}</h1>
          <button onClick={() => increment()}>Increment Count</button>
          <button onClick={() => decrement()}>Decrement Count</button>
        </div>
      )
    }
  </StoreProvider>
)

export default App
