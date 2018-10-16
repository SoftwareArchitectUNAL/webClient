import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import { livingcost } from '../todos.json'


class Denounce extends Component {
  constructor(){
    super(); // que herede la funcionalidad de react
    this.state ={
      livingcost
    }
  }

  render() {
    console.log('antes de renderizar el componente')
    console.log(this.state.livingcost)
    const a = this.state.livingcost.map((liv,i) =>{
      return(
        <div className="col-md-3">
          <div className="card mt-5">
            <div className="card-header">
              <h4>{liv.zone}</h4>
              <p><mark>{liv.locality}</mark></p>
            </div>
            <div className="card-body">
              <p>{liv.costm2}</p>
              <span className="badge badge-pill badge-danger ml-2">{liv.stratification}</span>

            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">

          <header className="masthead bg-info text-black text-center">
            <Navigation/>

            <div className="row mt-4">
              {a}
            </div>

          </header>
      </div>
    );
  }
}

export default Denounce;
