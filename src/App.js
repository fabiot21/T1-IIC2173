import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import { base } from './Base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {registros : []}
  }

  componentDidMount(){
    base.bindToState('registros', {
      context: this,
      state: 'registros',
      asArray: true
    });

    Axios.get('https://api.ipify.org?format=json').then( (response) => {
      const date = Date().slice(0, 24);
      base.push('registros', {
        data: `${date}${response.data.ip}`});
    });

  }

  render() {
    const reg = this.state.registros.map((registro, i) => {
      return (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{registro.slice(0, 24)}</td>
          <td>{registro.slice(24)}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Arquitectura de Sistemas de Software</h1>
        <h3>Tarea 1</h3>
        <table className="centered highlight">
          <thead>
            <tr>
                <th>Nº</th>
                <th>Fecha</th>
                <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {reg}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
