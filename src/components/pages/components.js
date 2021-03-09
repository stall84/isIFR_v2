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

export const FormSection = styled.div`
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
    border-radius: 20%;
    background-color: #D166A7;
    color: #FFF;
    text-shadow: 0.3px -0.3px black;
    font-family: 'Raleway';
`;

export const Welcome = styled.h1`
    font-family: 'Raleway', open-sans;
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
            <form onSubmit={submitHandler}>
                <TextInput onChange={input => inputHandler(input.target.value)} type="text" />
                <ButtonContainer>
                    <Button type="submit" >
                        A TEST BUTTON
                    </Button>
                </ButtonContainer>
            </form>
        </React.Fragment>
    );
};