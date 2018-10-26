import React, { Component } from 'react';
import Crime from '../components/Crimes';
import ApolloClient from "apollo-boost";
import { ApolloProvider} from "react-apollo";



const client = new ApolloClient({
  uri: 'http://35.231.194.73:5000/graphql'
});



class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      hour: '',
      identification: '',
      name: '',
      lastname: '',
      zone: '',
      site_class: '',
      neighbourhood: '',
      dateError: '',
      hourError: '',

    }
  }


  handleSubmit(event) {
    event.preventDefault();
    const date = this.state.date;
    const hour = this.state.hour;
    const name = this.state.name;
    const lastname = this.state.lastname;
    const zone = this.state.zone;
    const neighbourhood = this.state.neighbourhood;
    const identification = this.state.identification;

    console.log(this.state.date)
    console.log(this.state.hour)

    if (!date || date.length < 7) {
      this.setState({ dateError: 'Escriba fecha valida' })
      return;
    }

    if (!hour || hour.length < 4) {
      this.setState({ hourError: 'Hora invalida' })
      return;
    }

    if (!name || name.length < 4) {
      this.setState({ hourError: 'nombre invalido' })
      return;
    }

  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleHourChange(event) {
    this.setState({ hour: event.target.value });
  }

  handleIdentiChange(event) {
    this.setState({ identification: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleLastnameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handleZoneChange(event) {
    this.setState({ zone: event.target.value });
  }

  handleSiteclassChange(event) {
    this.setState({ site_class: event.target.value });
  }

  handleNeighbourhoodChange(event) {
    this.setState({ neighbourhood: event.target.value });
  }

  render() {

    return (
      <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.handleSubmit.bind(this)} >
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Fecha</label>
            <input className="form-control text-center" type="text" value={this.state.date} placeholder="Fecha dia/mes/año" onChange={this.handleDateChange.bind(this)} />
            <p className="help-block text-danger">{this.state.dateError}</p>
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Hora</label>
            <input className="form-control text-center" type="text" value={this.state.hour} placeholder="hora 00:00" onChange={this.handleHourChange.bind(this)} />
            <p className="help-block text-danger">{this.state.hourError}</p>
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Identificacion</label>
            <input className="form-control text-center" type="text" value={this.state.identification} placeholder="identificacion" onChange={this.handleIdentiChange.bind(this)} />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Nombre</label>
            <input className="form-control text-center" type="text" value={this.state.name} placeholder="nombre" onChange={this.handleNameChange.bind(this)} />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Apellido</label>
            <input className="form-control text-center" type="text" value={this.state.lastname} placeholder="apellido" onChange={this.handleLastnameChange.bind(this)} />
          </div>
        </div>


        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Zona</label>
            <input className="form-control text-center" type="text" value={this.state.zone} placeholder="zona" onChange={this.handleZoneChange.bind(this)} />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Clase de sitio</label>
            <input className="form-control text-center" type="text" value={this.state.site_class} placeholder="clase de sitio" onChange={this.handleSiteclassChange.bind(this)} />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
            <label>Barrio</label>
            <input className="form-control text-center" type="text" value={this.state.neighbourhood} placeholder="Barrio" onChange={this.handleNeighbourhoodChange.bind(this)} />
          </div>
        </div>


        <br />



        <div id="success"></div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
        </div>
      </form>
    );
  }
}




class Denounce extends Component {

      render() {

      return (
        <div className="App">
                <header className="masthead bg-info text-black text-center">
                    <ApolloProvider client={client}>

                      <section id="contact" style={{ "paddingTop": "calc(1rem + 20px)" }}>
                        <div className="container">
                          <h2 className="text-center text-uppercase text-secondary mb-0">Denuncia</h2>
                          <hr className="star-dark mb-5" />
                          <div className="row">
                            <div className="col-lg-8 mx-auto">
                              <Formulario />
                            </div>
                          </div>
                        </div>
                      </section>

                      <div className="container">
                        <Crime/>
                      </div>
                    </ApolloProvider>
                </header>
            </div>
      );
  }
}

export default Denounce;
