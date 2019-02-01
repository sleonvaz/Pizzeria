import React, { Component } from 'react';
import {
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItemHeading,
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import FilaCarrito from '../fila-carrito/FilaCarrito';

library.add(faShoppingCart);

export default class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.totalChange = this.totalChange.bind(this);
  }

  state = {
    total: 0,
  };

  totalChange(val) {
    this.setState({
      total: this.state.total + val,
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false,
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true,
    });
  }

  render() {
    return (
      <div>
        <Button color="light" onClick={this.toggle} outline>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>
              <FontAwesomeIcon className="mr-1" icon="shopping-cart" />
            </ModalHeader>
            <ModalBody>
              <ListGroup>
                <ListGroupItemHeading>
                  <div className="row">
                    <div className="col-3">
                      <span className="ml-1"> Tus Pizzas </span>
                    </div>
                    <div className="col-3">
                      <span> Precio </span>
                    </div>
                    <div className="col-3">
                      <span> Unidades </span>
                    </div>
                  </div>
                </ListGroupItemHeading>

                {this.props.items.map((n, index) => (
                  <FilaCarrito
                    key={index}
                    id={index}
                    pizza={n}
                    pizzaChange={this.props.pizzaChange}
                  />
                ))}
              </ListGroup>
              <br />
              <h5 className="ml-2">Total: {this.props.total}€</h5>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Pedido
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
          <FontAwesomeIcon className="mr-1" icon="shopping-cart" />
          <Badge color="light">{this.props.items.length}</Badge>
        </Button>
      </div>
    );
  }
}
