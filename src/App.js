import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import Auth from "./containers/authentication"
import { Provider } from 'react-redux';
import { store } from "./store"

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Auth />
        <h1>
          HI
        </h1>
      </div >
    </Provider>

  );
}

export default App;
