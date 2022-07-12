import React, { Component } from 'react'; 
import AppNavbar from './components/AppNavigationBar.js';
import ShoppingList from './components/ShoppingList.js';

import { Provider } from 'react-redux'; 
import store from './store'; 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
      </Provider>
    );
  }
}

export default App;