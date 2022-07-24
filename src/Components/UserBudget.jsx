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

  handleInputChange = (currency, value) => {
    this.setState({
      value:
        currency === "dollar"
          ? this.convertDollarToToman(+value).toString()
          : value,
    });
  };

  convertTomanToDollar(toman) {
    return toman / 30000;
  }

  convertDollarToToman(dollar) {
    return dollar * 30000;
  }

  render() {
    const valueInToman = this.state.value;
    const valueInDollar = this.convertTomanToDollar(valueInToman);

    return (
      <div>
        <BudgetInput
          currency="Toman"
          value={valueInToman}
          onInputChange={(value) => this.handleInputChange("toman", value)}
        />

        <BudgetInput
          currency="Dollar"
          value={valueInDollar}
          onInputChange={(value) => this.handleInputChange("dollar", value)}
        />

        <fieldset>
          <legend>Result</legend>
          <AvailableProducts value={valueInToman} />
        </fieldset>
      </div>
    );
  }
}
