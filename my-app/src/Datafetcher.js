import React, { Component } from "react";

class DataFetcher extends Component {
  constructor() {
    super();
    this.state = { data: "Loading...", count: 0 };
  }

 
  componentDidMount() {
    console.log("Component Mounted!");
    setTimeout(() => {
      this.setState({ data: "API Data Loaded!" });
    }, 2000);
  }

 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component Updated! Count changed.");
    }
  }

  
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default DataFetcher;
