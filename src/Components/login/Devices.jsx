import React from 'react'
import styled from 'styled-components'
import tv from '../Images/TV.png'
import laptop from '../Images/Laptop.png'
import xbox from '../Images/XBOX.png'
import mobile from '../Images/mobile.png'


function Devices() {
  return (
    <>
     <Section>
        <Container>
        <TextInfo>
              <h4>TV /LAPTOP /XBOX /MOBILE  Stream on your favourite device</h4>
            </TextInfo>
            <Content>
                <img src={tv} alt="" />
                <img src={laptop} alt="" />
                <img src={xbox} alt="" />
                <img src={mobile} alt="" />
            </Content>
            
        </Container>
     </Section>
    </>
  )
}

const Section = styled.section`
display: flex;
`;
const Container = styled.div`
margin-top: -20px;
align-items: center;

`;
const Content = styled.div`
display: flex;
img{
  margin: 20px;
  padding: 30px;
  width: 30%;
  height: auto;
  object-fit: contain;
}
`;
const TextInfo = styled.div`
 display: flex;
 margin: 50px;
 h4{
   font-size: 40px;
 }

`;


export default Devices