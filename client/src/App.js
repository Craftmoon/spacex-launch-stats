import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import spacexLogo from "./spacex_logo.png";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import styled from "styled-components";

const SpacexLogo = styled.img`
  width: 300px;
  margin: auto;
  display: block;
`;
const Container = styled.div`
  max-width: 700px;
  margin: auto;
`;

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <SpacexLogo src={spacexLogo} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default App;
