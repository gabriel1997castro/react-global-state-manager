import { createContext, useReducer } from "react"

const initialState = {}

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, newState) => {
    const currentState = { ...state };
    currentState[newState.name] = newState.value
    return currentState;
  }, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { StoreProvider, store };
