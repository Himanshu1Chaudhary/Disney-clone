import React from 'react'
import stream from '../Images/jugle.jpg'
import styled from 'styled-components'

function Stream() {
  return (
    <>
     <Section>
        <Container>
            <TextInfo>
                <h1 className='disney-title'>Stream with Premier Access the</h1>
                <h1 className="disney-title">same day it's in theaters</h1>
                <p>Comming May 28, Get Premier Access To Cruella for 299 with a Disney+ subscription and watch as many times as you like before it's available to all Disney+ subscribers at a later date</p>
                <button type='button' className='btn'>Preorder</button>
            </TextInfo>
            <ImgInfo>
             <img src={stream} />
            </ImgInfo>
        </Container>
     </Section>
    </>
  )
}

const Section = styled.section`
padding: 50px 5%;
position: relative;
background: transparent;
@media and screen (max-width: 991px){
  padding: 35px 50px;
}
@media screen and (max-width: 767px){
  padding: 25px;
}
`;
const Container = styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;
justify-content: space-between;
@media screen and (max-width: 991px)
{
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
}
`;
const TextInfo= styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1500;
position: relative;
@media and screen (max-width: 991px){
  width: 100%;
  padding: 0;
}
h1{
  font-size: 45px;
  
}
p{
  font-size: 20px;
 
}
.btn{
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
`;
const ImgInfo = styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1500;
position: relative;
img{
     width: 100%;
     max-width: 600px;
     height: auto;
}
`;



export default Stream