import React from 'react';

import styled from 'styled-components';

import { Container, 
    WelcomeDiv,
    WelcomeMsg,
    FormSection, 
    Form, 
    Display } from './components';



const Index = () => {
    return (
        <Container >
            <WelcomeDiv>
                    <WelcomeMsg>Welcome to isIFR?: The web-app that will give you the most pertinent weather information you need on the airport of your choice</WelcomeMsg>
            </WelcomeDiv>
                        <Form />
                        <Display />
        </Container>
    );
};


export default Index;