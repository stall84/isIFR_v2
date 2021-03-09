import React, { useRef, useState } from 'react';
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
    text-align: center;
    font-size: 1.5em;
    width: 14em;
    height: 2rem;
    background-color: #E9EBEE;
    border: .25px black;
    
`;

export const ButtonContainer = styled.div`
    width: 9em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    height: 2.2rem;
    width: 8rem;
    border: 0;
    border-radius: 20%;
    background-color: #D166A7;
    color: #FFF;
    text-shadow: 0.2px -0.2px black;
    font-family: 'Raleway';
`;

export const WelcomeDiv = styled.div`
    width: 90vw;
    height: 20vh;
    display: flex;
    text-align: center;
`;

export const WelcomeMsg = styled.h1`
    font-family: 'Raleway', open-sans;
`;

export const DisplayDiv = styled.div`
    width: 90vw;
    height: 30vh;
    background-color: #6893A6;
    border: 0.5px solid black;
    display: flex;
    flex-direction: column;

`;


export const Form = (props) => {

    const [ input, setInput ] = useState(null);
    

    const inputHandler = (inputVal) => {
        setInput(inputVal);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        alert(input);
    }

    return (
        <React.Fragment>
           
            <FormSection onSubmit={submitHandler}>
                <TextInput onChange={input => inputHandler(input.target.value)} type="text" placeholder="ICAO Airport Code (ex KATL)"/>
                <ButtonContainer>
                    <Button type="submit" >
                        SHOW ME
                    </Button>
                </ButtonContainer>
            </FormSection>

        </React.Fragment>
    );
};

export const Display = (props) => {
    return (
        <>
            <DisplayDiv>
                
            </DisplayDiv>
        </>
    );
}