import React, { Component } from 'react'
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="todoapp">
        <div className="container">
          <header>
            <h1 className="todoapp__title">todos</h1>
            <div className="todoapp__input">
              <input className="todoapp__input-checkbox" type="checkbox"/>
              <input className="todoapp__input-text" type="text" placeholder="What needs to be done?" />
            </div>
          </header>
          <section>
            <ul className="todoapp__list">
              <li className="todoapp__item">
                <input type="checkbox" className="todoapp__item-checkbox"/>
                <span className="todoapp__item-context">1</span>
                <button className="todoapp__item-destroy">x</button>
              </li>
              <li className="todoapp__item">
                <input type="checkbox" className="todoapp__item-checkbox"/>
                <span className="todoapp__item-context">2</span>
                <button className="todoapp__item-destroy">x</button>
              </li>
            </ul>
          </section>
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
        </div>
      </div>
    )
  }
}


export default App
