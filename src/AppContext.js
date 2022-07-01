import { createContext, useReducer, useContext } from 'react'
import appReducer, { initialState } from './appReducer'

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const appIsLoaded = isLoaded => {
    updateMounted(isLoaded)

    dispatch({
      type: 'APP_IS_LOADED',
      payload: {
        loaded: isLoaded
      }
    })
  }

  const updateMounted = isMounted => {
    dispatch({
      type: 'UPDATE_MOUNTED',
      payload: {
        mounted: isMounted
      }
    })
  }

  const value = {
    loaded: state.loaded,
    mounted: state.mounted,
    appIsLoaded
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useShop = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useShop must be used within AppContext')
  }

  return context
}

export default useShop
