import React from "react"

const PizzaForm = props => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" onChange={props.handleForm} placeholder="Pizza Topping" value={
              props.formData? props.formData.topping : null
              }/>
        </div>
        <div className="col">
          <select name="size" value={props.formData? props.formData.size : null} onChange={props.handleForm} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleForm} type="radio" value={true} name="vegetarian" checked={props.formData && props.formData.vegetarian === true? true: false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleForm} type="radio" value={false} name="vegetarian" checked={props.formData && props.formData.vegetarian === false? true: false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
