import React from 'react';
import ReactDOM from 'react-dom';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './components/App.jsx';

const restLink = new RestLink({
  uri: 'https://reqres.in/api/'
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
