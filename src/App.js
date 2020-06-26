import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList'
import TodoList from './components/TodoList';
import Login from './components/login';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <Login /> */}
      <Menu />
    </div>
  );
}

export default App;
