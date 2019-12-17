import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.details.topping}</td>
      <td>{props.details.size}</td>
      <td>{props.details.vegetarian ? 'Yes' : 'No'}</td>
      <td><button onClick={() => props.editClick(props.details)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
