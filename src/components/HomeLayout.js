import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';

const HomeLayout = () => {
    return (
        <Container>
            <Wrap>
            <HomeBtn>
                <a href="#">
                    <img src="images/abstract.png" alt="" />
                    <p>Home</p>
                </a>
            </HomeBtn>
            <CustomSearch />
            <CustomDate />
            <CustomPerson />
            </Wrap>
        </Container>
    )
}

export default HomeLayout

const Container = styled.div`
    margin-left:30px;
    margin-right:30px;
    margin-top:20px;
    margin-bottom:20px;
`

const Wrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const HomeBtn = styled.div`
    background: #f7fffd;
    border-radius:50px;
    padding:10px 20px 10px 20px;
    background: #f7fffd;
    box-shadow:  10px 6px 10px #dfdfdf,
             -16px -12px 10px #ffffff;

    a{
        display:flex;
        align-items:center;

        img{
            width:22px;
        }

        p{
            margin-left:10px;
            color:black;
        }
    }
`

const CustomSearch = styled(SearchIcon)`
    margin-left:60px;
    color:gray;
`

const CustomDate = styled(DateRangeIcon)`
    color:gray;
`

const CustomPerson = styled(PersonIcon)`
    color:gray;
`


