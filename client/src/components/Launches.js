import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const getLaunches = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <>
        <h1>Launches</h1>
        <Query query={getLaunches}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading...</h1>;
            if (error) console.error(error);
            return (
              <>
                {data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launches;
