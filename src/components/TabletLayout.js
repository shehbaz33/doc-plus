import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Tablet from './Tablet'

const TabletLayout = () => {
    return (
        <Wrap>
            <Tablet text="Buy Medicines" img="medicine.png"/>
            <Tablet text="Book Lab Test" img="flask.png"/>
            <Tablet text="Find Hospitals" img="hospital-building.png"/>
            <Tablet text="Get Free Consult" img="consulting.png"/>
        </Wrap>
    )
}

export default TabletLayout

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap:1rem;
    margin-top:50px;
`

