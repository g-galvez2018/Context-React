import React from 'react';
import './App.css';

import { MyContext } from './context';

function Bootcamp (){
  return(
    <MyContext.Consumer>
        { context => {
          const { hoursToGo } = context.currentUser;
          return (
            <div>
              <p>Hours to invest: { hoursToGo }</p>
              <Student  />
            </div>
          )
      } }
  </MyContext.Consumer>
  )

}

function Student (){

  return (
    <MyContext.Consumer>
    { context => {
      console.log('the C is: ', context)
      const { firstName } = context.currentUser; 
      return(
        <div>
          <h1>Hello {firstName}!</h1>
        <button onClick={ context.addHours }> Add Those Hours! </button>
    </div>
      )
    } }
     
    </MyContext.Consumer>
  
  )
}
class App extends React.Component {
    
    render (){
      // const { hoursToGo } = this.state.currentUser;
      return (
        <div>
          {/* <p>I'm in App.js ✅ <b> Hours I want to invest: { hoursToGo } </b></p> */}
          <Bootcamp />
        </div>
      )
    }
}

export default App;
