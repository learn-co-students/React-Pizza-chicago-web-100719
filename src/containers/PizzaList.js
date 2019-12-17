import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  createPizzas = () => {
    return this.props.pizzas.map(pizza => {
      return <Pizza {...pizza} handleEdit={this.props.handleEdit}/>
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.createPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
