import React from 'react';


/**Function base component */

// const Monkey = (props) => {
//  return (
//  <div>
//      <div>Hi my name is {props.name}</div>
//      <button onClick={props.eat}>Clicke about Monkey</button>
//  </div>);
// }

// export default Monkey;






/**Class base component */

class Monkeyclass extends React.Component {
    render() {
        return (
            <div>
                <div>Hi my name is {this.props.name}</div>
                <button onClick={this.props.eat} className="mybutton">Log to Monkey</button>
            </div>);
    }
}
export default Monkeyclass;

