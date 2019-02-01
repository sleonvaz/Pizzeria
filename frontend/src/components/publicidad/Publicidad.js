import React, { Component } from 'react';
import './publicidad.css';
import { publicidad2x1 } from '@Assets';

export default class Publicidad extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-8">{<img src={publicidad2x1} alt="" />}</div>
          </div>
        </div>
      </div>
    );
  }
}
