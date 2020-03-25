import React from 'react';
import logo from './logo.svg';



/**function base imports */

// import Cat from './cat';
// import Dog from './dog';
// import Monkey from './monkey';



/**class base imports */

import Catclass from './cat';
import Dogclass from './dog';
import Monkeyclass from './monkey';
import './App.css';


/**Function base component functionality*/

// function App() {
//   const jump = (props) => {
//     console.log(`Hi ... I can able to jump`)
// }
//   const run = props => {
//     console.log(`Hi ... I am fast to run}`)
// }
// const eat = (props) => {
//   console.log(`Hi .... I can be able to eat banana`)
// }
//   return (
//     <div className="App">

//       <Cat name="Wuroo" age="2" jump ={jump}></Cat>
//       <Cat name="Bruu" age="3" jump ={jump}></Cat>

//       <Dog name="Buchuu" age="2" color="red" run ={run}></Dog>
//       <Dog name="Kurkur" age="3" color="white" run ={run}></Dog>

//       <Monkey name="Monki" eat ={eat}></Monkey>
//       <Monkey name="Manka" eat ={eat}></Monkey>
//     </div>
//   );
// }




/**Class base component functionality*/

function App() {
  const jump = () => {
    console.log(`Hi ... I can able to jump`)
  }
  const run = () => {
    console.log(`Hi ... I am fast to run}`)
  }
  const eat = () => {
    console.log(`Hi .... I can be able to eat banana`)
  }
  return (
    <div className="App">
      <Catclass name="Wuroo" age="2" jump={jump}></Catclass>
      <Catclass name="Bruu" age="3" jump={jump}></Catclass>

      <Dogclass name="Buchuu" age="2" color="red" run={run}></Dogclass>
      <Dogclass name="Kurkur" age="3" color="white" run={run}></Dogclass>

      <Monkeyclass name="Monki" eat={eat}></Monkeyclass>
      <Monkeyclass name="Manka" eat={eat}></Monkeyclass>
    </div>
  );
}

export default App;
