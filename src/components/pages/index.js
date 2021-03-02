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
            <Grid item sm={12}>
                <Backdrop>
                    <Welcome>Hello Aviation Enthusiasts!</Welcome>
                </Backdrop>
            </Grid>
        </Container>
    );
};


export default Index;