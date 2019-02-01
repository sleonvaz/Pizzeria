import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Collapse,
  ListGroup,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import * as pizzaimg from '@Assets';
import IngredientesCard from '../ingredientes-card/IngredintesCard';
export default class PizzaCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      collapse: false,
      precio: this.props.pizza.price.mediana,
    };
  }

  handleChange(event) {
    this.setState({
      precio: event.target.value,
    });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    let imagen = pizzaimg[this.props.pizza.pic];

    return (
      <div className="col-md-6 mt-4 ">
        <Card className="p-2">
          <div className="row">
            <div className="col-6">
              <CardTitle className="h5">{this.props.pizza.name}</CardTitle>
              {/* <CardText> */}
              <FormGroup className="col-md-11">
                <Label for="exampleSelect">Tamaño</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange}>
                  <option value={this.props.pizza.price.mediana}>Mediana</option>
                  <option value={this.props.pizza.price.familiar}>Familiar</option>
                </Input>
              </FormGroup>

              {/* </CardText> */}
              <Button
                color="danger"
                onClick={() => {
                  this.props.addpizza(this.props.pizza.name, this.state.precio, 1);
                }}>
                Añadir a pedido
              </Button>
            </div>
            <div className="col-6">
              <CardImg
                className="mt-3"
                width="100%"
                height="100%"
                src={imagen}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-3">
            <Button
              className="mt-1 "
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: '1rem' }}>
              Ingredientes
            </Button>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <ListGroup>
              {this.props.pizza.ingridients.map((n, index) => (
                <IngredientesCard key={index} ingrediente={n} />
              ))}
            </ListGroup>
          </Collapse>
        </Card>
      </div>
    );
  }
}
