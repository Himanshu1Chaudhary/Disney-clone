import React from 'react'
import styled from 'styled-components'
import logo from '../Images/cta-logo-one.svg'
import logo2 from '../Images/cta-logo-two.png'
import backimg from '../Images/backLogin.jpg'

function Banner() {
  return (
    <>
       <Background>
        <Container>
            <Content>
                <img src={logo} alt="" />
                <button className='banner-button'>GET THE DISNEY BUNDLE</button>
                <h4>Stream now : Terms Apply</h4>
                <img src={logo2} alt="" />
                <button type='button' className='btn'>Sign Up for Disney+ Only</button>
                <h4>&#8377;99/Month  or &#8377;999/Year</h4>
            </Content>
        </Container>
       </Background>
    </>
  )
}
const Background = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backimg});
    background-size: cover;
    height: 95vh;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-item: center;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (min-width: 768px) and (max-width: 1200px){
      height: 85vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
      height: 75vh;
    }

`;
const  Container = styled.div`
width: 60%;
margin: 0 auto;
`;
const Content = styled.div`
 width: 100%;
 margin: 0 auto;
 max-with: 700px;
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;


 img{
     width: 100%;
     height: auto;
     display: block;
     max-width: 600px;
     object-fit: contain;
     @media screen and (min-width: 768px) and (max-width: 1200px){
      width: 50%;
     }
 }
 .banner-button{
    outline: none;
    border: none;
    width: 70%;
    padding: 11.5px 15px;
    background: #0063e5;
    color: white;
    border-radius: 25px;
    font-size: 22px;
    margin-top: 30px;
    transition: all 0.7s ease-in-out;
    &: hover{
      background: #0085ff;
    }
  }
 .btn{
    outline: none;
    border: none;
    font-size: 18px;
    background: transparent;
    color: white;
    margin-top: 1.5vh;
 }
 h4{
    margin-top: 1vh;
    margin-bottom: 2vh;
    font-size: 18px;
    color: gray;
 }
`;


export default Banner