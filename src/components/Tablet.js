import React from 'react'
import styled from 'styled-components'

const Tablet = ({text,img}) => {
    return (
        <Conatiner>
            <Image>
                <img src={`images/${img}`} alt="" />
                <span>{text}</span>
            </Image>
        </Conatiner>
    )
}

export default Tablet

const Conatiner = styled.div`
border-radius: 15px;
margin-left:20px;
margin-right:20px;
padding:10px 10px 10px 20px;
background: #f7fffd;
    box-shadow:  10px 6px 10px #dfdfdf,
             -16px -12px 10px #ffffff;
`

const Image = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:40px;
    }
    span{
        text-align:left;
        margin-left:15px;
        color:#457a7e;
        font-size:1rem;
    }
`