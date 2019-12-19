import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state={
      pizzas: [],
      clickedPizza: {}
    }
  }

  componentDidMount(){

    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzasData =>{
      this.setState({
        pizzas: pizzasData
      })
    })
  }

  handlePizza=(pizza)=>{
    this.setState({
      clickedPizza: pizza
    })
  }

  onChange=(e)=>{
      this.setState({
        clickedPizza: {...this.state.clickedPizza, [e.target.name]: e.target.value}
      })
  }

  radioBtn=(e)=>{
    this.setState({
      clickedPizza:{...this.state.clickedPizza, vegetarian: e}
    })
  }
   
  handleSubmit=(e)=>{
    e.preventDefault()
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(this.state.clickedPizza)
    }
    fetch(`http://localhost:3000/pizzas/${this.state.clickedPizza.id}`, reqObj)
    .then(resp => resp.json())
    .then(pizza => {
      const newPizzas = this.state.pizzas.map(p => p.id === pizza.id? pizza : p)
      this.setState({
        pizzas: newPizzas
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.clickedPizza}
        handleSubmit={this.handleSubmit}
        radioBtn={this.radioBtn}
        onChange={this.onChange}/>
        <PizzaList pizzas={this.state.pizzas}
                    handlePizza={this.handlePizza}/>
      </Fragment>
    );
  }
}

export default App;
