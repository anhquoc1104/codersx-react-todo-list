import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList'
import TodoList from './components/TodoList';
import Login from './components/login';
import Menu from './components/menu';

function App() {
  let menu = [
    {icon: "flaticon-sydney-opera-house", label: 'HOME'},
    {icon: "flaticon-gift", label: 'DEALS'},
    {icon: "flaticon-server", label: 'UPLOAD'},
    {icon: "flaticon-work", label: 'WORK'},
    {icon: "flaticon-gear", label: 'SETTINGS'}
  ]
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <Login email="amin@gmail.com"/> */}
      <Menu menu={menu}/>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
