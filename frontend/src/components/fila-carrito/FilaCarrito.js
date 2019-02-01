import React, { Component } from "react";
import { ListGroupItem, Button, FormGroup,  Input } from "reactstrap";

export default class FilaCarrito extends Component {
  
  render() {
    return (
    <ListGroupItem>
      <div className="row">
      <div className="col-3">
       <span >{this.props.pizza.name} </span>
       </div>
       <div className="col-3">
       <span > {this.props.pizza.precio} € </span>
       </div>
       <div className="col-3">
       <FormGroup>
          <Input type="select" name="select" id="exampleSelect" onChange={(event)=>{this.props.pizzaChange(this.props.id,  event.target.value)}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Input>
        </FormGroup>
       </div>
       <div className="col-2">
       <Button color="danger">Eliminar</Button>
       </div>
       </div>
    </ListGroupItem>

    )
  }
}
