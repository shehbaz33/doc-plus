import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';

const SearchBar = () => {
    return (
        <Container>
            <Wrap>
                <CustomIcon fontSize="large"/>
                <input type="text" name="text" id="" placeholder="Search Doctors,Hospital,Clinics" />
                <CustomMenu fontSize="large"/>
            </Wrap>
        </Container>
    )
}

export default SearchBar

const Container = styled.div`
    margin-top:-50px;
`

const Wrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    input {
        z-index:1000;
        padding:20px 80px 20px 80px;
        border-radius:100px;
        font-size:18px;
        text-align:left;
        box-shadow: -2px 10px 20px -9px rgba(81,184,183,0.75) inset;
        -webkit-box-shadow: -2px 10px 20px -9px rgba(81,184,183,0.75) inset;
        -moz-box-shadow: -2px 10px 20px -9px rgba(81,184,183,0.75) inset;
        border:black;

        &::placeholder{
            color:#c8c8c8;
        }
    }
`

const CustomIcon = styled(SearchIcon)`
    color:#ecc872;
    z-index:1100;
    position:absolute;
    transform:translateX(-150px);
`

const CustomMenu = styled(ListIcon)`
    color:#51b8b7;
    z-index:1000;
    position:absolute;
    transform:translateX(150px);
`
