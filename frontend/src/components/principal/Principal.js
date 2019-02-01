import React, { Component } from 'react';
// import '../App.css';
import ContenedorCard from '../contenedor-cards/ContenedorCard';
import Publicidad from '../publicidad/Publicidad';
import Registro from '../registro/Registro';
import MiNavbar from '../navbar/Navbar';
export default class Principal extends Component {
  state = {
    precio: 0,
    nombre: '',
    amedias: false,
    carritoActivo: false,
    items: [],
    total: 0,
  };
  pizzaAdd = this.pizzaAdd.bind(this);
  pizzasUpdate = this.pizzasUpdate.bind(this);
  pizzasUpdate(id, numPizzas) {
    let items = this.state.items;
    let aux = this.state.total - this.state.items[id].precio * this.state.items[id].cantidad;
    let aux2 = this.state.items[id].precio * numPizzas;

    aux.toFixed(2);
    aux2.toFixed(2);
    items[id].cantidad = numPizzas;

    this.setState({
      total: aux + aux2,
      items: items,
    });
  }
  pizzaAdd(pizza, precio, numPizzas) {
    let misPizzas = this.state.items;
    let miTotal = this.state.total;
    pizza = { name: pizza, precio: precio, cantidad: numPizzas };
    misPizzas.push(pizza);

    this.setState({
      total: miTotal + precio * numPizzas,
      items: misPizzas,
    });
  }
  render() {
    return (
      <div>
        <MiNavbar
          items={this.state.items}
          total={this.state.total}
          pizzaChange={this.pizzasUpdate}
        />
        <Publicidad />
        <ContenedorCard addpizza={this.pizzaAdd} items={this.state.items} />
        {/* <Registro /> */}
      </div>
    );
  }
}
