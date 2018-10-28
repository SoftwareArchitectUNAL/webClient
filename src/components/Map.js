import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'


class Map extends Component {

  state = {
    center: {
      lat: 4.6385,
      lng: -74.085
    },
    zoom: 30,
    location: false
  }

  render() {
    console.log(this.props.points)
    return(
      <div className="col-8 p-8 m-auto">
        <div style={{height: '95vh', width: '100%'} }>
          <GoogleMap
            bootstrapURLKeys={{
                  key:'AIzaSyCtnm2uMp478jFPra_83mK0oliKLWfIzJc',
                  language: 'es',
              }}
            zoom={this.props.zoom}
            center={this.props.center}
          >
            <Marker
              lat={4.638}
              lng={-74.085}
              name={'hello'}
              image={'http://i.stack.imgur.com/orZ4x.png'}
              handleOpenModal={this.props.handleOpenModal}
              modal={0}
            />

          </GoogleMap>
        </div>
      </div>
    )
  }

}

export default Map
