import { nanoid } from "nanoid";
import { Component } from "react";

const PRODUCTS = [
  { id: nanoid(), name: "item1", price: 1000 },
  { id: nanoid(), name: "item2", price: 1500 },
  { id: nanoid(), name: "item3", price: 2000 },
  { id: nanoid(), name: "item4", price: 2500 },
  { id: nanoid(), name: "item5", price: 3000 },
  { id: nanoid(), name: "item6", price: 3500 },
  { id: nanoid(), name: "item7", price: 4000 },
];

export default class AvailableProducts extends Component {
  render() {
    const { value } = this.props;
    const products = PRODUCTS.filter((item) => item.price <= value);
    const items = products.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
    return <ul>{items}</ul>;
  }
}
