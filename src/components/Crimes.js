import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



const getCrimes = gql`
 {
  allCrimes {
    date
    state
    day
    mobility_victim
    mobility_agresor
  }
}
`;


const Crime = () => (
  <Query
    query={getCrimes}>
      {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
        console.log("holaaaa", data.allCrimes)
      const a = data.allCrimes.map((cri,i) =>{
          return(
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header">
                  <h4>{cri.date}</h4>
                  <span> dia: {cri.day}</span>

                  <p><mark>{cri.state}</mark></p>
                </div>
                <div className="card-body">
                  <p>{cri.mobility_victim}</p>
                  <p>{cri.mobility_agresor}</p>
                </div>
              </div>
            </div>
          )
        })
      return (

        <div className="row mt-4">
            {a}
        </div>

      );
    }}
  </Query>
);
export default Crime;
