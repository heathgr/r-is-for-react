import { createElement as e, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { createStore } from 's-is-for-store'
import { useStore } from '../src/index'

const stateSpy = jest.fn()
const setStateSpy = jest.fn()

jest.mock('react', () => {
  const actual = jest.requireActual('react')

  return {
    ...actual,
    useState: () => [stateSpy, setStateSpy],
    useEffect: jest.fn(),
  }
})

describe('r-is-for-react', () => {
  it('Should create a React Hook for subscribing to a Store.', () => {
    interface TestState {
      message: string
    }
    const testStore = createStore<TestState>({
      message: 'test state 1'
    })
    const TestComponent = () => {
      const testState = useStore(testStore)

      return e('div', null, testState.message)
    }
    const subject = mount(e(TestComponent))

    expect(subject.text()).toEqual('test state 1')

    act(() => {
      testStore.update({ message: 'test state 2'})
    })

    expect(subject.text()).toEqual('test state 2')
  })

  it('Should call set state.', () => {
    interface TestState {
      message: string
    }
    const testStore = createStore<TestState>({
      message: 'test state 1'
    })

    const subject = useStore(testStore)

    expect(stateSpy).toHaveReturnedWith(true)
  })
})