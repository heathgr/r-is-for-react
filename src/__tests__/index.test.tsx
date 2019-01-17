import Enzyme from 'enzyme'
import { createStore } from 's-is-for-store'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component, createElement as e } from 'react'

import { StoreProvider, StoreProviderProps } from '../index'
import { any } from 'prop-types';

interface TestStore {
  testValue: boolean
}

Enzyme.configure({ adapter: new Adapter() })

describe('r-is-for-react', () => {
  it('Should handle state correctly.', () => {
    const testStore = createStore<TestStore>({ testValue: true })
    const provider = (
      <StoreProvider<TestStore> store={testStore}>
        {
          (state) => <div>{`test value: ${state.testValue}`}</div>
        }
      </StoreProvider>
    )
    const providerWrapper = Enzyme.shallow(provider)

    expect(providerWrapper.exists()).toEqual(true)
    expect(providerWrapper.contains(<div>test value: true</div>)).toEqual(true)
    testStore.setState({ testValue: false })
    expect(providerWrapper.contains(<div>test value: false</div>)).toEqual(true)
  })

  it('Should work without JSX.', () => {
    const testStore = createStore<TestStore>({ testValue: true })
    const provider = e<StoreProviderProps<TestStore>>(
      StoreProvider,
      {
        store: testStore,
        children: (state) => e('div', null, `test value: ${state.testValue}`)
      },
    )
    const providerWrapper = Enzyme.shallow(provider)

    expect(providerWrapper.exists()).toEqual(true)
    expect(providerWrapper.contains(<div>test value: true</div>)).toEqual(true)
    testStore.setState({ testValue: false })
    expect(providerWrapper.contains(<div>test value: false</div>)).toEqual(true)
  })
})
