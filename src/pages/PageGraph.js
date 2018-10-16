import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from '../components/Courses';


const client = new ApolloClient({
  uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'
});


export default class ComponentPageMap extends Component {
  constructor(){
    super(); // que herede la funcionalidad de react

  }
  render(){

    return (
      <div className="App">

          <header className="masthead bg-info text-black text-center">            
              <ApolloProvider client={client}>
                <div className="container">
                  <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
                  </nav>
                  <div>
                    <Courses />
                  </div>
                </div>
              </ApolloProvider>


          </header>
      </div>
    );
  }
}
