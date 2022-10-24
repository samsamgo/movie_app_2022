import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }
  componentDidMount() {
    console.log("Im mount");
  }
  componentDidUpdate() {
    console.log("Im update");
  }
  componentWillUnmount() {
    console.log("bye this code end")
  }

  render() {
    console.log("Im rander");
    return (
      <div>
        <h1>The number is:  {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
