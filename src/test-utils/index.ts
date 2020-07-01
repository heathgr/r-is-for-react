import { Store } from 's-is-for-store'
import { act } from 'react-dom/test-utils'

export const createTestUpdater = <T>(store: Store<T>) => (update: Partial<T>): void => {
  act(() => {
    store.update(update)
  })
}