import React, { Component } from 'react';
import Crime from '../components/Crimes';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gpl from 'graphql-tag';


const client = new ApolloClient({
  uri: 'http://35.196.218.73:5000/graphql'
});

const Denounce = () => (
  <Query
    query={gql`
      query {
  allCrimes {
    _id
    date
    state
    day
    age
    mobility_victim
    mobility_agresor
  }
}`
    }
  >
  {({ loading, error, data }) => {
     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error :(</p>;

     return data.allCrimes.map(({ _id, date, state }) => (
       <div key={_id}>
         <p>{`${_id} ${date}: ${state}`}</p>
       </div>
     ));
   }}
 </Query>
);

export default Denounce;
