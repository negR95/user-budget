import { Component } from "react";

export default class UserBudget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Your Budget</legend>
          <label>Enter in Toman</label>
          <input></input>
        </fieldset>
      </div>
    );
  }
}
