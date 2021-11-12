import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <Container>
            <Wrap>
                    <img src="images/doctor.png" alt="" />
                    <Text>
                    <h1>Consult Top Doctors</h1>
                    <p>Connect and Speak with a Doctor Now</p>
                    </Text>
            </Wrap>
            <Button>
                <span> Book Now</span>
            </Button>
        </Container>
    )
}

export default Hero

const Container = styled.div`
    margin:60px 30px 20px 30px;
    background-color:#51b8b7;
    border-radius:20px;
    position:relative;
    padding:20px 10px 20px 10px;

`

const Wrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    img{
        width:125px;
        position:absolute;
        top:-30px;
    }
`

const Text = styled.div`
    text-align:left;
    margin-left:130px;
    h1{
        font-size:1.2rem;
        font-weight:500;
        color:#ecc872;
    }
    p{
        color:white;
        font-weight:300;
        font-size:0.8rem;
    }
`

const Button = styled.button`
    padding:10px 25px 10px 25px;
    border:none;
    border-radius:50px;
    border-radius: 47px;
    background: #f6f7fb;
    box-shadow:  6px 6px 20px #a0a1a3,
             -6px -6px 20px #51b8b7;
    position:absolute;
    right:33px;
    bottom:-25px;
    span{
        text-transform:uppercase;
        color:#457a7e;
        font-weight:500;
    }
`

