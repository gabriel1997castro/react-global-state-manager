import { createContext, useReducer } from "react"

const initialState = {}

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, newState) => {
    const currentState = { ...state };
    if (typeof newState.name === 'string' && newState.value !== undefined)
      currentState[newState.name] = newState.value
    else throw new Error('É necessário name e value para criar ou atualizar um estado global')
    return currentState;
  }, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { StoreProvider, store };
