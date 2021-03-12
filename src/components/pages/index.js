import React from 'react';

import styled from 'styled-components';

import { Container, 
    WelcomeDiv,
    WelcomeMsg,
    FormSection, 
    FormAndDisplay,
    Button,
    DisplayDiv, 
    Display } from './components';

// Apollo GraphQL Client Setup
import fetch from 'node-fetch';
import { ApolloClient, InMemoryCache, gql, HttpLink, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
      uri: 'http://localhost:3005/graphql',
      fetch: fetch
    }),
    cache: new InMemoryCache(),
});





const Index = () => {

    const testApollo = () => {
        return client
        .query({
          query: gql`
            query GetWeather($code: String) {
              wxResponse(code: $code) {
                metar
              }
            }
          `,
          variables: {
            code: "KATL"
          }
        })
        .then(result => {
            console.log(result)
        });
    }

    return (
        <ApolloProvider client={client}>
            <Container >
                <WelcomeDiv>
                        <WelcomeMsg>Welcome to isIFR?: The web-app that will give you the most pertinent weather information you need on the airport of your choice</WelcomeMsg>
                </WelcomeDiv>
                            <FormAndDisplay />
                             <Button onClick={testApollo}>Test Apollo</Button>
            </Container>
        </ApolloProvider>
    );
};


export default Index;