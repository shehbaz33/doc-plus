import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
    return (
        <Container>
           <section class="curved">
               <section className="curved-yellow">
               <NavLogo>
                <h1>Doc<span>plus</span></h1>
                <RightButton>
                    <h1>Gurgaon</h1>
                    <CustomIcon />
                </RightButton>
                </NavLogo>
                <Navbar>
                    <ul>
                       <a href="#"><span>Doctors</span></a>
                       <a href="#"><span>Pharmacy</span></a>
                       <a href="#"><span>Procedures</span></a>
                       <a href="#"><span>Diagnosis</span></a>
                    </ul>
                </Navbar>
               </section>
           </section>
        </Container>
    )
}

export default Header

const Container = styled.div`
.curved {
    position: relative;
    background: #ecc872;
    height: 30vh;
    z-index:10;
    border-bottom-left-radius: 50% 26%;
    border-bottom-right-radius: 50% 26%;
  }

  .curved-yellow {
    position: relative;
    background: #51b8b7;
    height: 25vh;
    z-index:-800;
    border-bottom-left-radius: 50% 26%;
    border-bottom-right-radius: 50% 26%;
  }
`

const NavLogo = styled.div`
  padding-top:20px;
  margin-right:20px;
  margin-left:20px;
  display:flex;
  align-items:center;
  z-index:1;
  justify-content:space-between;
  h1{
      color: white;
  }
  span{
    color:#ecc872
}
`

const CustomIcon = styled(LocationOnIcon)`
    color:#ecc872;
`

const RightButton = styled.button`
    padding:10px 20px 10px 20px;
    border:none;
    z-index:1;
    border-radius: 47px;
    background: #51b8b7;
    box-shadow:  24px 24px 48px #3f908f,
             -24px -24px 48px #63e0df;
             display:flex;
             align-items:center;
             justify-content:space-between;

             h1{
                font-size:1rem;
                font-weight:300;
                color:white;
                padding-right:10px;
            }
`

const Navbar = styled.div`
    ul{
        display:flex;
        flex-direction:row
        align-items:center;
        justify-content:space-between;
        margin-top:40px;
        font-weight:300;
        margin-right:40px;
        margin-left:40px;
        cursor:pointer;

        a{
            span{
                color:white;
                position:relative;
    
                &:after {
                    content:"";
                    height:2px;
                    background:#ecc872;
                    position:absolute;
                    left:0;
                    right:0;
                    bottom:-6px;
                    opacity:0;
                    transform-origin:left center;
                    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                    transform:scaleX(0);
                }
            }
    
            &:hover {
                span:after{
                    transform:scaleX(1);
                    opacity:1;
                }
            }
        }

    }
`

