import React, { Component } from "react";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0,
      amount: "",
      currency: ""
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Member1");
  };

  incrementAndHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  syntheticEvent = () => {
    alert("I was clicked");
  };

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    });

  };

  handleSubmit = (event) => {

    event.preventDefault();

    const rupees = parseFloat(this.state.amount);

    if (isNaN(rupees)) {
      alert("Please enter a valid amount");
      return;
    }

    const euro = (rupees / 90).toFixed(2);

    alert(
      `Converting to Euro Amount is €${euro}`
    );

  };

  render() {

    return (

      <div style={{ margin: "20px" }}>

        <h2>{this.state.count}</h2>

        <button onClick={this.incrementAndHello}>
          Increment
        </button>

        <br /><br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.syntheticEvent}>
          Click on me
        </button>

        <br /><br /><br />

        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>

          <label>Amount</label>

          <br />

          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <br /><br />

          <label>Currency</label>

          <br />

          <input
            type="text"
            name="currency"
            value={this.state.currency}
            onChange={this.handleChange}
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    );

  }

}

export default App;