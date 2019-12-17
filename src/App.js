import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      formPizza: null
    }
  }

  formChange = event => {   
    if (event.target.name === 'vegetarian') {
      this.setState({formPizza: {
        ...this.state.formPizza,
        [event.target.name]: (event.target.value === 'Vegetarian' ? true : false)
      }
      })  
    } else {
      this.setState({formPizza: {
        ...this.state.formPizza,
        [event.target.name]: event.target.value
      }
      })  
    }
  }

  handleSubmit = () => {
    if (this.state.formPizza.id) {
      const newPizzaArray = this.state.pizzas.slice()
      newPizzaArray[this.state.formPizza.id - 1] = this.state.formPizza
      this.setState({
        pizzas: newPizzaArray,
        formPizza: null
      })
    } else {
      console.log('no pizza to edit')
      this.setState({formPizza: null})
    }
  }

  editPizzaClick = pizzaDets => {
    // const formPizza = this.state.pizzas.find(pizza => pizza.id === pizzaDets.id)
    // console.log(formPizza)
    this.setState({formPizza: pizzaDets})
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} formChange={this.formChange} pizza={this.state.formPizza}/>
        <PizzaList editPizzaClick={this.editPizzaClick} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
