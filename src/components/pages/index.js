import React from 'react';

import styled from 'styled-components';

import { Container, 
    Welcome,
    FormSection, 
    TextInput,
    ButtonContainer,
    Button } from './components';



const Index = () => {
    return (
        <Container >
                    <Welcome>Hello Airbus Employee!</Welcome>
                    <FormSection>
                        <TextInput />
                        <ButtonContainer>
                            <Button>
                                A TEST BUTTON
                            </Button>
                        </ButtonContainer>
                    </FormSection>
        </Container>
    );
};


export default Index;