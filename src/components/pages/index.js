import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';



const Backdrop = styled.div`
    margin: 0;
    height: 100vh;
    width: 100vw;
`;

const FormSection = styled.form`
    height: 6em;
    width: 6em;
    margin: 1em;
`;

const Welcome = styled.h1`
    font-family: 'Raleway', open-sans;
`;



const Index = () => {
    return (
        <Container maxWidth="xl" disableGutters={true}>
            <Grid container sm={12}>
                <Grid item sm={12} alignContent="center" justify="center">
                    <Welcome>Hello Airbus Employee!</Welcome>
                    <FormSection>
                        <input type="text" />

                        
                    </FormSection>
              </Grid>
            </Grid>
        </Container>
    );
};


export default Index;