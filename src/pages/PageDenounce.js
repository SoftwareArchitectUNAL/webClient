import React, { Component } from 'react';
import Crime from '../components/Crimes';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from 'graphql-tag';


const client = new ApolloClient({
  uri: 'http://35.237.81.177:5000/graphql'
});



class Deno extends Component {

      render() {

      return (
        <div className="App">
                <header className="masthead bg-info text-black text-center">
                    <ApolloProvider client={client}>
                      <div className="container">

                        <Crime/>

                      </div>
                    </ApolloProvider>

                </header>
            </div>
      );
  }
}

export default Deno;
