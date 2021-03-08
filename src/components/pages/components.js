import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Backdrop = styled.div`
    margin: 0;
    height: 100vh;
    width: 100vw;
`;

export const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 6em;
    width: 10em;
    margin: 1em;
`;

export const TextInput = styled.input`
    width: 12em;
    
`;

export const ButtonContainer = styled.div`
    width: 9em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    height: fit-content;
    width: fit-content;
    border: 0;
    background-color: #D166A7;
    color: #FFF;
    text-shadow: 0.3px -0.3px black;
    font-family: 'Raleway';
`;

export const Welcome = styled.h1`
    font-family: 'Raleway', open-sans;
`;