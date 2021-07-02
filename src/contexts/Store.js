import { createContext, useReducer } from "react"

const initialState = {
  user: null,
}

const actions = {
  SET_USER: 'set-user',
  LOGOUT: 'logout'
}


const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const currentState = { ...state };
    switch(action.type) {
      case actions.SET_USER:
        currentState.user = action.payload;
        return currentState;
      case actions.LOGOUT:
        currentState.user = null;
      return currentState;
      default:
        throw new Error();
    }
  }, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { StoreProvider, store };
