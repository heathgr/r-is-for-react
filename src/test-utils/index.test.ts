import { createStore } from 's-is-for-store'
import { createTestUpdater } from './index'
import * as testUtils from 'react-dom/test-utils'

jest.mock('react-dom/test-utils')

describe('createTestUpdater', () => {
  interface TestState {
    value: number,
  }

  const initialState: TestState = {
    value: 0,
  }

  it('Should wraps state updates in react test utils act function.', () => {
    const store = createStore(initialState)
    const updater = createTestUpdater(store)
    const actSpy = testUtils.act as jest.Mock

    const testState: TestState = {
      value: 1,
    }

    updater(testState)

    expect(actSpy).toBeCalledTimes(1)
    expect(actSpy).toHaveBeenCalledWith(expect.any(Function))

    // extract the act callback from actSpy
    const actCallback = actSpy.mock.calls[0][0]

    // invoke the act callback and ensure it updates the state
    actCallback()

    expect(store.current()).toEqual(testState)
  })
})