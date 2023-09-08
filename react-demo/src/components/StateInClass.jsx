import { Component } from "react";

export default class StateInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      counter: 0,
    };
  }

  plusFunction = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  minusFunction = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>State in Class Component</h2>
        <br />
        <p>
          <b>Name : </b> {this.state.name}
        </p>
        <p>
          <b>Counter : </b> {this.state.counter}
        </p>
        <br />
        <button onClick={this.plusFunction}>+</button>
        <button onClick={this.minusFunction}>-</button>
      </div>
    );
  }
}
