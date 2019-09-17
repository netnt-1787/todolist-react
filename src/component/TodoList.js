import React, { Component } from 'react';

class TodoList extends Component {
  render(){
    return(
      <ul className="todoapp__list">
        <li className="todoapp__item">
          <input type="checkbox" className="todoapp__item-checkbox"/>
          <span className="todoapp__item-context">1</span>
          <button className="todoapp__item-destroy">x</button>
        </li>
      </ul>
    )
  }
}

export default TodoList
