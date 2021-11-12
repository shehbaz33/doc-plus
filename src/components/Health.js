import React from 'react'
import styled from 'styled-components'

const Health = ({text,img}) => {
    return (
        <Container>
            <Pallet>
                <img src={`images/${img}`} alt="" />
                <p>{text}</p>
            </Pallet>
        </Container>
    )
}

export default Health

const Container = styled.div`
    border-radius:50px 50px 50px 50px;
    padding-top:30px;
    padding-bottom:30px;
    margin-bottom:20px;
    background: #f7fffd;
    box-shadow:  6px 6px 12px #f2f2f2,
             -6px -6px 12px #ffffff;
`

const Pallet = styled.div`
    diplay:flex;
    flex-direction:column;
    img{
        width:35px;
    }
    p{
        padding-top:15px;
        color:#457a7e;
    }
`
