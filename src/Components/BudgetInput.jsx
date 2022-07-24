import { Component } from "react";

export default class BudgetInput extends Component {
  handleInputChange = (e) => {
    this.props.onInputChange(e.target.value);
  };

  render() {
    const { currency } = this.props;
    return (
      <fieldset>
        <legend>Your Budget</legend>
        <label>{`Enter in ${currency}`}</label>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleInputChange}
        />
      </fieldset>
    );
  }
}
