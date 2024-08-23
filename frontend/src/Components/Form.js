import "../App.css";
import React from "react";
import Info from "./Info";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "10001",
      frequency: "daily",
      result: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`/api/${this.state.frequency}/${this.state.zipcode}`, {
      accept: "application/json",
    })
      .then((response) => response.json())
      .then((response) => this.setState({ result: response }));
  }

  CreateInfoDisplay() {
    if (Object.keys(this.state.result).length == 1) {
      return (
        <Info result={this.state.result} frequency={"Daily"} name={"details"} />
      );
    } else if (Object.keys(this.state.result).length > 1) {
      return (
        <Info result={this.state.result} frequency={"Weekly"} name={"status"} />
      );
    }
  }

  render() {
    const results = Object.keys(this.state.result).length;
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <p>Enter a Zipcode (NYC Only!)</p>
          <label>
            <input
              name="zipcode"
              type="text"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
          </label>
          <p>Select either Daily or Weekly</p>
          <label>
            <input
              type="radio"
              name="frequency"
              value="daily"
              checked={this.state.frequency === "daily"}
              onChange={this.handleChange}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              name="frequency"
              value="weekly"
              checked={this.state.frequency === "weekly"}
              onChange={this.handleChange}
            />
            Weekly
          </label>
          <br />
          <button type="submit">Get Info!</button>
        </form>
        <div className="Results">{results > 0 && this.CreateInfoDisplay()}</div>
      </div>
    );
  }
}

export default Form;
