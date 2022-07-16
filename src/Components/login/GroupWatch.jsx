import React from 'react'
import styled from 'styled-components';
import backimg from '../Images/Soul_Groupwatch.jpg'

function GroupWatch() {
  return (
  <>
  <Section>
    <Container>
        <Content>
                <h1 className='title'>Virtual Movie Night with</h1>
                <h1 className='title'>GroupWatch</h1>
                <li>Watch Together, Even when apart</li>
                <li>Stream with up to 6 friends</li>
                <li>Pause, Rewind, React Together</li>
                <li>Easy setup and sharing</li>
        </Content>
    </Container>
  </Section>
  </>
  )
}
const Section = styled.section`
background: url(${backimg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 91vh;
display:flex;
flex-direction: column;
align-itm: center;
`;
const Container = styled.div`
width:88%;
margin: 0 auto;
`;
const Content = styled.div`
margin-top: 17vh;
h1{
    font-size: 45px;
}
li{
    margin-top: 20px;
    font-size: 30px;
}
`;



export default GroupWatch