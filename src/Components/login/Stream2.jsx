import React from 'react'
import stream from '../Images/Devices.png'
import styled from 'styled-components'

function Stream2() {
  return (
    <>
     <Section>
        <Container>
            <TextInfo>
                <h1 className='disney-title'>Stream Now or Download Now</h1>
                <h1 className="disney-title">Explore US More on Disney</h1>
                <p>Stream at 4 devices ar once or Download Your Favourites to watch Later. With dozens of titles stunning 4K UHD, YOU CAN WATCH THE WAY YOU ALWAYS WISHED</p>
                <button type='button' className='btn'>DOWNLOAD NOW</button>
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
height: 91vh;
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
margin-top: 100px;
align-items: center;
flex-direction: row;
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

export default Stream2