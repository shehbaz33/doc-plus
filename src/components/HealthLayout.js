import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Health from './Health'

const HealthLayout = () => {
    return (
        <Container>
            <Text>
            <h1>Common Health Concerns</h1>
            </Text>
            <Wrap>
                <Health text= "COVID" img="coronavirus.png" />
                <Health text= "Skin Rashes" img="clean.png" />
                <Health text= "Bad Stomach" img="guts.png" />
            <   Health text= "Fever" img="thermometer.png" />
            </Wrap>
        </Container>
    )
}

export default HealthLayout

const Conatiner = styled.div`
    
`

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 1rem;
    margin-left:10px;
    margin-right:10px;
`


const Text = styled.div`
    margin-top:30px;
    margin-bottom:10px;
    h1{
        color:#457a7e;
        font-size:1.2rem;
        text-align:left;
        margin-left:20px;
    }
`
