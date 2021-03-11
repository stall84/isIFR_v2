import React from 'react';

import styled from 'styled-components';

import { Container, 
    WelcomeDiv,
    WelcomeMsg,
    FormSection, 
    Form,
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

    // const testApollo = () => {
    //     return client
    //     .query({
    //       query: gql`
    //         query GetWeather {
    //           wxResponse(code: "KWVI") {
    //             metar
    //           }
    //         }
    //       `
    //     })
    //     .then(result => console.log(result));
    // }

    return (
        <ApolloProvider client={client}>
            <Container >
                <WelcomeDiv>
                        <WelcomeMsg>Welcome to isIFR?: The web-app that will give you the most pertinent weather information you need on the airport of your choice</WelcomeMsg>
                </WelcomeDiv>
                            <Form />
                            <Display />    
            </Container>
        </ApolloProvider>
    );
};


export default Index;