import React from "react"

const Pizza = props => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian? "Yes" : "No"}</td>
      <td><button onClick={() => props.handleEdit(props.id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
