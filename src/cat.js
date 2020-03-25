import React from 'react';


/**Function base component */

// const Cat = (props) => {
//      return (
//  <div>
//      <div>Hi my name is {props.name} and my age is {props.age}</div>
//      <button onClick={props.jump}>About Cat</button>
//  </div>);
// }

// export default Cat;





/**Class base component */

class Catclass extends React.Component {
    render() {
     return (
    <div>
        <div>Hi my name is {this.props.name} and my age is {this.props.age}</div>
        <button onClick={this.props.jump} className="mybutton">Log to Cat</button>
    </div>);
   }
}

export default Catclass;