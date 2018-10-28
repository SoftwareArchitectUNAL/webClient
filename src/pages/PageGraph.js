import React, { Component } from 'react'
import Map from '../components/Map'
import Mapa from '../components/Mapa';



class mapi extends Component {

  state = {

    query: '',
    id: 0,
    points: [],
    modalVisible: false,
    typeModal: 0,
    center: {
      lat: 4.64,
      lng: -74.1
    },
    zoom: 11.7,
    location: false
  }




  render(){
    const currentState = this.state.machine_state
    console.log("STATE:", currentState)
    console.log(this.state.center);
    return(

      <header className="masthead bg-info text-black text-center" style={{ "paddingTop": "calc(4rem + 60px)" }}>


        <div className="container mb-5 mt-4" >
            <nav className="navbar navbar-white " >
              <h2 className="text-center text-uppercase text-secondary mb-0 m-auto">Mapa de Riesgos</h2>
            </nav>
          </div>

      <div>
        <p>Las localidades con más riesgos estarán identificadas con colores mas intensos hasta las menos riesgosas de colores mas claros</p>
        <div className="row" >
          <div className="container col-md-8 mt-4" >
            <Mapa />
          </div>

        </div>
      </div>

            <Map
              zoom={this.state.zoom}
              center={this.state.center}
              points={this.state.points}
            />



    </header>
    )
  }
}

export default mapi
