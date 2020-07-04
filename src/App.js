import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoList'
import TodoList from './components/TodoList';
import Login from './components/Login';
import Menu from './components/Menu';
// import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { icon: "fas fa-home", label: 'HOME' },
        { icon: "fas fa-gift", label: 'DEALS' },
        { icon: "fas fa-cloud-upload-alt", label: 'UPLOAD' },
        { icon: "fas fa-mug-hot", label: 'WORK' },
        { icon: "fas fa-cog", label: 'SETTINGS' }
      ],
      hasUnread: true,
      isfocused: false
    }
  };
  focusedChange = () => {
    if (this.state.isfocused) this.setState({ isfocused: false });
    else this.setState({ isfocused: true });
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        {/* <Login email="amin@gmail.com"/> */}
        <Menu
          menu={this.state.menu}
          hasUnread={this.state.hasUnread}
          focusInput={this.state.isfocused}
          focusFn={this.focusedChange}
        />
        {/* <TodoList /> */}
      </div>
    );
  };
};

export default App;
