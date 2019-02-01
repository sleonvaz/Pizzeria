import React, { Component } from 'react';
import { ListGroupItem } from "reactstrap";

class IngredientesCards extends Component {


  render() {
    return (
        <ListGroupItem>
          {this.props.ingrediente}
        </ListGroupItem>
    );
  }
}

export default IngredientesCards;