import React, { Component } from 'react';
import Murder from '../components/Murders';
import Intraf from '../components/Intrafamilies';
import Gender from '../components/Genders';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({
  uri: 'http://35.231.194.73:5000/graphql'
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
                <header className="masthead bg-info text-black text-center" style={{ "paddingTop": "calc(5rem + 50px)" }}>
                    <ApolloProvider client={client}>
                      <div className="container">
                        <nav className="navbar navbar-white   " >
                          <h2 className="navbar-brand m-auto col-md-12" >TIPO DE VIOLENCIA</h2>
                          <br/>
                          <div className ="container col-md-5">
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
                            </div>
                        </nav>
                        {console.log(this.state.value)}
                        {this.state.value==="murders" &&   <Murder /> }
                        {this.state.value==="intrafamilies" &&   <Intraf /> }
                        {this.state.value==="genders" &&   <Gender /> }


                      </div>
                    </ApolloProvider>

                </header>
            </div>
      );
  }
}

export default Violence;
