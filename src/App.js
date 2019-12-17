import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
    }
  }

  handleForm = e => {
    if(e.target.name === "vegetarian") {
     this.setState({
       formData: {...this.state.formData, vegetarian: !this.state.formData.vegetarian}
     })
    } else {
      this.setState({
        formData: {...this.state.formData, [e.target.name]:e.target.value}
      })
    }
  }

  handleSubmit = () => {
    let formData = this.state.formData
    let pizzas = this.state.pizzas.map(pizza => pizza.id === formData.id? formData : pizza)
    this.setState({
      pizzas: pizzas
    })
    let reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: formData.id,
        topping: formData.topping,
        size: formData.size,
        vegetarian: formData.vegetarian
      })
    }
    fetch(`http://localhost:3000/pizzas/${formData.id}`, reqObj)
  }

  handleEdit = (id) => {
    let pizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      formData: {
        id: pizza.id,
        size: pizza.size,
        topping: pizza.topping,
        vegetarian: pizza.vegetarian
      }
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => {
      this.setState({
        pizzas: pizzas
      })
    })
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm formData={this.state.formData} handleForm={this.handleForm} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
