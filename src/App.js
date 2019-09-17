import React, { Component } from 'react'
import FormInput from './component/FormInput';
import MainSection from './component/MainSection';
class App extends Component{
  render(){
    return(
      <div className="todoapp">
        <div className="container">
          <FormInput/>
          <MainSection/>
        </div>
      </div>
    )
  }
}

export default App
