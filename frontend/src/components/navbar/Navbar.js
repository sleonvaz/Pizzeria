import React from 'react';
import styles from './navbar.styles.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Carrito from '../carrito/Carrito';
import { logo } from '@Assets';

export default class MiNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  totalChange(val) {
    this.setState({
      total: this.state.total + val,
    });
  }
  render() {
    return (
      <div>
        <Navbar className={styles.fondoRojo} light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Error al cargar la imagen" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
              <NavItem>
                <NavLink className="text-white" href="/components/">
                  Inicio |
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">
                  Ayuda |
                </NavLink>
              </NavItem>
              <NavItem>
                <Carrito
                  items={this.props.items}
                  total={this.props.total}
                  pizzaChange={this.props.pizzaChange}
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
