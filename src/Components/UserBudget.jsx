import { Component } from "react";
import AvailableProducts from "./AvailableProducs";
import BudgetInput from "./BudgetInput";

export default class UserBudget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleTomanInputChange = (value) => {
    this.setState({ value });
  };

  handleDollarInputChange = (value) => {
    const toman = this.convertDollarToToman(value);
    this.setState({ value: toman });
  };

  convertTomanToDollar(toman) {
    return toman * 30000;
  }

  convertDollarToToman(dollar) {
    return dollar / 30000;
  }

  render() {
    const valueInToman = this.state.value;
    const valueInDollar = this.convertDollarToToman(this.state.value);
    return (
      <div>
        <BudgetInput
          currency="Toman"
          value={valueInToman}
          onInputChange={this.handleTomanInputChange}
        />
        <BudgetInput
          currency="Dollar"
          value={valueInDollar}
          onInputChange={this.handleDollarInputChange}
        />

        <fieldset>
          <legend>Result</legend>
          <AvailableProducts value={valueInToman} />
        </fieldset>
      </div>
    );
  }
}
