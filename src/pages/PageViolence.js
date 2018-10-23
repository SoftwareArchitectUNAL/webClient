import React, { Component } from 'react';
import Murder from '../components/Murders';
import Intraf from '../components/Intrafamilies';
import Gender from '../components/Genders';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({
  uri: 'http://35.237.81.177:5000/graphql'
});



class Violence extends Component {

  constructor() {
        super();
        this.state = { value: "intrafamilies"  }
    }
    onChange(e) {
      this.setState({ value: e.target.value });
      const value = this.state.value;
      console.log(e.target.value );

    }

    render() {

      return (
        <div className="App">
                <header className="masthead bg-info text-black text-center">
                    <ApolloProvider client={client}>
                      <div className="container">
                        <nav className="navbar navbar-dark bg-primary text-white  " >
                          <h2 className="navbar-brand m-auto col-md-2" >TIPO DE VIOLENCIA</h2>
                          <div className="form-check form-check-inline">
                              <input onChange={this.onChange.bind(this)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="murders"/>
                              <label className="form-check-label" >ASESINATOS</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input onChange={this.onChange.bind(this)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="intrafamilies"/>
                              <label className="form-check-label" >INTRAFAMILIAR</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input onChange={this.onChange.bind(this)}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="genders" />
                              <label className="form-check-label" >GENERO </label>
                            </div>
                        </nav>
                        {console.log(this.state.value)}
                        {this.state.value=="murders" &&   <Murder /> }
                        {this.state.value=="intrafamilies" &&   <Intraf /> }
                        {this.state.value=="genders" &&   <Gender /> }


                      </div>
                    </ApolloProvider>

                </header>
            </div>
      );
  }
}

export default Violence;
