import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const getLivingcost = gql`
  {
    allLivingcosts{
              zone
              stratification
              locality
              costm2
              costbasketgoods
      }
    }
`;


const Cost = () => (
  <Query
    query={getLivingcost}>

    {({ loading, error, data }) => {


      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
      const a = data.allLivingcosts.map((liv,i) =>{
          return(
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header">
                  <h4>{liv.zone}</h4>
                  <p><mark>{liv.locality}</mark></p>
                </div>
                <div className="card-body">
                  <p>{liv.costm2}</p>
                  <span className="badge badge-pill badge-danger ml-2">{liv.stratification}</span>

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
export default Cost;
