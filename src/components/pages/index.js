import React from 'react';

import styled from 'styled-components';

import { Container, 
    Welcome,
    FormSection, 
    Form } from './components';



const Index = () => {
    return (
        <Container >
                    <Welcome>Hello Airbus Employee!</Welcome>
                    <FormSection>
                        <Form />
                    </FormSection>
        </Container>
    );
};


export default Index;