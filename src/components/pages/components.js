import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';


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
    height: 2.2em;
    width: 8em;
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
    background-color: rgba(104,147,166,0.5);
    border: 0.5px solid black;
    border-radius: 12%;
    display: flex;
    flex-direction: column;

`;

export const FlightRuleContainer = styled.div`
    width: 20%;
    height: 20%;
    border: 0.5px solid black;
`;




export const FormAndDisplay = (props) => {

    const [ input, setInput ] = useState('KDCA');
    const [ icaoTX, setIcaoTx ] = useState(null);
    
    

    const inputHandler = (inputVal) => {
        setInput(inputVal);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        if (input) {
            setIcaoTx(input);
            
        } else {
            alert('Please enter an airport code');
        }

    }

    
    const DisplayWx = () => {


        const WX_QUERY = gql`
            query GetWeather($code: String) {
                wxResponse(code: $code) {
                    metar
                    flightRules
                }
            }
        `;

        const { loading, error, data } = useQuery(WX_QUERY, {
            variables: { code: input } 
        });
        console.log(data);
        if (loading) return 'Loading your weather...';
        if (error) return 'There was a problem retrieving your weather with error message: ', error.message;

        return (
            <div>
                <FlightRuleContainer>
                <h2>
                    {data.wxResponse.flightRules}
                </h2>
                </FlightRuleContainer>
                <h2>
                    {data.wxResponse.metar}
                </h2>
            </div>
        );
    };

    return (
        <React.Fragment>
           
            <FormSection onSubmit={submitHandler}>
                <TextInput onChange={input => inputHandler(input.target.value)} type="text" placeholder="ICAO Airport Code (ex KATL)"/>
                <ButtonContainer>
                    <Button type="submit" >
                        SHOW WX
                    </Button>
                </ButtonContainer>
            </FormSection>
        { icaoTX && 
            <DisplayDiv>
                <DisplayWx />
            </DisplayDiv>
        }
        </React.Fragment>
    );
};
