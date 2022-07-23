import { nanoid } from "nanoid";
import { Component } from "react";

const PRODUCTS = [
  { id: nanoid(), name: "Pride", price: 100000 },
  { id: nanoid(), name: "Peugeot 206", price: 150000 },
  { id: nanoid(), name: "Peugeot Pars", price: 200000 },
  { id: nanoid(), name: "Dena", price: 250000 },
  { id: nanoid(), name: "Arizo", price: 300000 },
  { id: nanoid(), name: "Cerato", price: 350000 },
  { id: nanoid(), name: "Benz", price: 400000 },
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
