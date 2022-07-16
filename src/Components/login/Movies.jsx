import React from 'react'
import styled from 'styled-components'
import one from '../Images/cardImg.jpg'
import two from '../Images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg'
import three from '../Images/moana-poster-4-2.png'
import four from '../Images/Disney_MLP_GridItem_TS4_AUNZ.jpg'
import five from '../Images/SW_Clone_Wars.png'
import six from '../Images/BlackPanther.jpg'



function Movies() {
  return (
    <>
    <Section>
        <Container>
            <Content> 
                <h1>MOVIES GALLERY</h1>
              <img src={one} />
              <img src={two} />
              <img src={three} />
              <img src={four} />
              <img src={five} />
              <img src={six} />
              <Bunddle>
                <button className='btn'>GET THE BUNDLE</button>
              </Bunddle>
            
            </Content>
        </Container>
    </Section>
    </>
  )
}

const Section = styled.section`
height: 90vh;
`;

const Container = styled.div`
padding-left: 50px;
`;

const Content  = styled.div`
h1{
    padding: 50px;
    font-size: 60px;
}
 img{
  margin-top: -30px;
    width: 400px;
    height: 200px;
    margin-left: 20px;
    padding: 30px;
 }
`;
const Bunddle = styled.div`
margin-left: 550px;
.btn{
  outline: none;
border: none;
width: 40%;
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

export default Movies