import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzas: [],
    topping:"",
    size:"",
    vegetarian: null,
    id: 0
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas:pizzas}))
  }
  
  editButtonHandler = (event) =>{
    const pizzaId = parseInt(event.target.id, 10)
    const pizzaToEdit = this.state.pizzas.find( pizza => pizza.id === pizzaId)
    this.setState({topping:pizzaToEdit.topping, size:pizzaToEdit.size, vegetarian:pizzaToEdit.vegetarian, id:pizzaToEdit.id})
  }

  handleChange = (event, name) => {
    this.setState({[name]: event.target.value})
  }

  handleVegetarianChange = () => {
    this.setState({vegetarian:!this.state.vegetarian})
  }

  
  listRefresh = (pizza) => {
      const newPizzas = this.state.pizzas.map(p =>{
        return p.id === pizza.id? pizza : p
      })
      this.setState({pizzas:newPizzas})
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const {topping, size, vegetarian, id} = this.state
    fetch(`http://localhost:3000/pizzas/${this.state.id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topping:topping,
        size:size,
        vegetarian:vegetarian,
        id: id
      })
    }
    )
    .then(resp => resp.json())
    .then(pizza => this.listRefresh(pizza))

  }



  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleVegetarianChange={this.handleVegetarianChange} handleSubmit={this.handleSubmit} handleChange={this.handleChange} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian}/>
        <PizzaList pizzas={this.state.pizzas} editButtonHandler={this.editButtonHandler}/>
      </Fragment>
    );
  }
}

export default App;
