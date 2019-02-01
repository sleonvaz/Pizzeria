import React, { Component } from "react";
import axios from "axios";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class Registro extends Component {
    state = {
        email: "",
        usuario: "",
        password: ""
      };
  handleRegister = this.handleRegister.bind(this);
  
  handleRegister() {
  
    axios.post("http://localhost:3001/users/add",{email: this.state.email,usuario: this.state.usuario,password: this.state.password}).then(response => {
      localStorage.setItem("authorization", response.data.token);  
    console.log(response.data.token);
    });

  }

  render() {
    return (
      <Form className="col-4 offset-5 mt-5">
        <div className="row ">
          <h3> Formulario de Registro</h3>
        </div>
        <div className="row">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="Email" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="something@gmail.com"
              onChange={(event)=>{this.setState({email: event.target.value})}}
            />
          </FormGroup>
        </div>
        <div className="row">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="Password" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="don't tell!"
              onChange={(event)=>{this.setState({password: event.target.value})}}
            />
          </FormGroup>
        </div>
        <div className="row">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="User" className="mr-sm-2">
              Usuario
            </Label>
            <Input 
            type="text" 
            name="user" 
            id="User"
             placeholder="Usuario"
             onChange={(event)=>{this.setState({usuario: event.target.value})}}
             />
          </FormGroup>
        </div>
        <div className="row mt-2">
          <Button onClick={this.handleRegister}>Registrar</Button>
        </div>
      </Form>
    );
  }
}
