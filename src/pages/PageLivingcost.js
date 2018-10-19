import React, { Component } from 'react';
import Cost from '../components/Costs';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({
  uri: 'http://35.237.127.198:5000/graphql'
});


class Livingcost extends Component {
  constructor(){
    super(); // que herede la funcionalidad de react

  }

  render() {
    console.log('antes de renderizar el componente')

    return (
      <div className="App">

              <header className="masthead bg-info text-black text-center">
                  <ApolloProvider client={client}>
                    <div className="container">
                      <nav className="navbar navbar-dark bg-primary">
                        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
                      </nav>
                      <Cost />

                    </div>
                  </ApolloProvider>

              </header>
          </div>
        );
  }
}

export default Livingcost;
