import React, { Component } from 'react'
import Map from '../components/Map'


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

      <header className="masthead bg-info text-black text-center">

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
