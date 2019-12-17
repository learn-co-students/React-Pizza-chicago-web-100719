import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizzas = pizzaArray => {
    // console.log(pizzaArray)
    return pizzaArray.map(pizza => <Pizza editClick={this.props.editPizzaClick} details={pizza} />)
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
            //render Pizza here
            this.renderPizzas(this.props.pizzas)
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
