import { useEffect, useState} from 'react'
import Store from 's-is-for-store'

export const useStore = <T>(store: Store<T>) => {
  const [state, setState] = useState(store.current)

  useEffect(() => {
    return store.subscribe((newState) => {
      setState(newState)
    })
  }, [])

  return state
}