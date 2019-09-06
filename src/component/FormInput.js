import React, { Component } from 'react';

class FormInput extends Component {
  render(){
    return(
      <header>
        <h1 className="todoapp__title">todos</h1>
        <div className="todoapp__input">
          <input className="todoapp__input-checkbox" type="checkbox"/>
          <input className="todoapp__input-text" type="text" placeholder="What needs to be done?" />
        </div>
      </header>
    )
  }
}

export default FormInput
