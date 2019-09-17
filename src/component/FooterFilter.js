import React, { Component } from 'react';

class FooterFilter extends Component {
  render(){
    return(
      <footer className="todoapp__footer">
        <div className="todoapp__total-item">
          <span>2 item left</span>
        </div>
        <div className="todoapp__status">
          <a href="#!">All</a>
          <a href="#!">Active</a>
          <a href="#!">Completed</a>
        </div>
        <div className="todoapp__clear">
          <a href="#!">Clear Completed</a>
        </div>
      </footer>
    )
  }
}

export default FooterFilter
