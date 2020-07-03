import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList'
import TodoList from './components/TodoList';
import Login from './components/login';
import Menu from './components/menu';

function App() {
  let menu = [
    {icon: "fas fa-home", label: 'HOME'},
    {icon: "fas fa-gift", label: 'DEALS'},
    {icon: "fas fa-cloud-upload-alt", label: 'UPLOAD'},
    {icon: "fas fa-mug-hot", label: 'WORK'},
    {icon: "fas fa-cog", label: 'SETTINGS'}
  ]
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <Login /> */}
      <Menu menu={menu}/>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
