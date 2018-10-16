import React, { Component } from 'react';
import { livingcost } from '../todos.json'

class Navigation  extends Component {
  constructor(){
    super(); // que herede la funcionalidad de react
    this.state ={
      livingcost
    }
  }

  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            livingcost
            <span className="badge badge-pill badge-light ml-2">{this.state.livingcost.length}</span>
          </a>
        </nav>
      )
    }
}

export default Navigation;
