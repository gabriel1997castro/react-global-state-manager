import './App.css';
import { StoreProvider } from './contexts/GlobalState';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <StoreProvider>
          <Main />
      </StoreProvider>
    </div>
  );
}

export default App;
