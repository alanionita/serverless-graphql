import React, { Component } from 'react';
import UserList from './components/UserList';
import logo from './logo.svg';
// import gql from 'graphql-tag';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Serverless GraphQL Apollo </h2>
          </div>
          <div className="App-User">
            <UserList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
