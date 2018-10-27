import React, { Component } from 'react';
import Crime from '../components/Crimes';
import Cri from '../components/CreateCrime';
import ApolloClient from "apollo-boost";
import { ApolloProvider} from "react-apollo";
import gql from 'graphql-tag';



const client = new ApolloClient({
  uri: 'http://35.231.194.73:5000/graphql'
});



class Denounce extends Component {

      constructor(props) {
        super(props);
        this.state = { value: 'show'};
      }
      onChange(e) {
        this.setState({ value: e.target.value });
        const value = this.state.value;
        console.log(this.state.value)

      }

      render() {

      return (
        <div className="App">
                <header className="masthead bg-info text-black text-center"  style={{ "paddingTop": "calc(4rem + 50px)" }}>
                    <ApolloProvider client={client}>

                      <section id="contact" style={{ "paddingTop": "calc(1rem + 20px)" }}>


                        <div className="container">
                          <h2 className="text-center text-uppercase text-secondary mb-0">Denuncia por hurto</h2>
                          <hr className="star-dark mb-5" />
                            <div className="float-left col-md-3 btn-group-vertical">
                              <button onClick={ this.onChange.bind(this) } type="button" className="btn btn-primary btn-sm" value="show">Denunciar</button>
                              <button onClick={ this.onChange.bind(this)} type="button" className="btn btn-secondary btn-sm mt-2"  value ="denounce" >ver casos de denuncias</button>
                            </div>

                          {this.state.value==="show" &&
                              <div className="row">
                                <div className="col-md-8 mx-auto">
                                   <Cri/>
                                </div>
                              </div> }

                          {this.state.value==="denounce" &&
                            <div className="row col-md-10 mx-auto">
                                <Crime/>
                              </div> }

                        </div>
                      </section>


                    </ApolloProvider>
                </header>
            </div>
      );
  }
}

export default Denounce;
