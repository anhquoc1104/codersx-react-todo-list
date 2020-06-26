// const { Component } = require("react");
import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const todos = ["Go to market", "Buy food", "Make dinner"];
    return (
      <div>
        <ul>
          {
            todos.map((elm, index)=>{
              return <li key={index}>{elm}</li>
            })
          }
        </ul>
      </div>
    );
  };
}

export default TodoList;