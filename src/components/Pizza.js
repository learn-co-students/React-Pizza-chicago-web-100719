import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian?"Yes":"No"}</td>
      <td><button type="button" className="btn btn-primary" id={props.pizza.id} onClick={(event)=>props.editButtonHandler(event)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
