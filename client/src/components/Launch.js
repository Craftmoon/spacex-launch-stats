import React, { Component } from "react";
import gql from "graphql-tag";
import Moment from "react-moment";  
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

const getLaunch = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <>
        <h1>Launch</h1>
        <Query query={getLaunch} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading...</h1>;
            if (error) console.error(error);

            const {
              flight_number,
              mission_name,
              launch_year,
              launch_date_local,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type },
            } = data.launch;
            return (
              <div>
                <h1>Mission:{mission_name}</h1>
                <h4>Launch Details</h4>
                <ul>
                  <li>Flight Number: {flight_number}</li>
                  <li>
                    Launch date:{" "}
                    <Moment format="YYYY/MM/DD HH:mm">
                      {launch_date_local}
                    </Moment>
                  </li>
                  <li>Launch Successful: {launch_success ? "yes" : "no"}</li>
                  <li>Flight Number: {launch_success}</li>
                </ul>
                <h4>Rocket Details</h4>
                <ul>
                  <li>Rocket Id: {rocket_id}</li>
                  <li>Rocket Name: {rocket_name}</li>
                  <li>Rocket Type: {rocket_type}</li>
                </ul>
                <hr />
                <Link to="/">Back</Link>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launch;
