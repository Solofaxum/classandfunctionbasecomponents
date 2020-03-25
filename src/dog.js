import React from 'react';


/**Function base component */

// const Dog = (props) => {
//  return (
//  <div>
//      <div>Hi my name and age is {props.name} and {props.age}, respectively. I have {props.color} color</div>
//      <button onClick={props.run}>Clicke about Dog</button>
//  </div>);
// }

// export default Dog;





/**Class base component */

class Dogclass extends React.Component {
    render() {
    return (
    <div>
        <div>Hi my name and age is {this.props.name} and {this.props.age}, respectively. I have {this.props.color} color</div>
        <button onClick={this.props.run} className="mybutton">Log to Dog</button>
    </div>);
   }
}
   export default Dogclass;