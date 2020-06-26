import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList'
import TodoList from './components/TodoList';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Login />
    </div>
  );
}

export default App;
