import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.formChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.pizza ? props.pizza.topping : ""
              }/>
        </div>
        <div className="col">
          <select onChange={props.formChange} name="size" value={props.pizza ? props.pizza.size : ""} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.formChange} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza ? props.pizza.vegetarian : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.formChange} name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={props.pizza ? !(props.pizza.vegetarian) : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button  type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
