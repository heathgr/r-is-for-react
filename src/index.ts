import { Component, ReactNode } from 'react'
import { default as Store } from 's-is-for-store'

export interface StoreProviderProps<T> {
  store: Store<T>
  children: (state: T) => ReactNode
}

export class StoreProvider<T> extends Component<StoreProviderProps<T>, T> {
  constructor(props: any) {
    super(props)

    const store = this.props.store

    this.state = store.getState()

    store.subscribe(this.handleState)
  }

  public handleState = (state: any) => new Promise((resolve) => {
    this.setState(state, () => resolve(state))
  })

  render() {
    return this.props.children(this.state)
  }
}
