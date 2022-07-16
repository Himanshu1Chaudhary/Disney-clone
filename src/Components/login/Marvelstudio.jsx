import React from 'react'
import styled from 'styled-components'
import backimg from '../Images/BlackPanther.jpg'

function Marvelstudio() {
  return (
    <>
    <Section>
        <Container>
            <Content>
                <h1 className='title'>Endless Entertainment</h1>
                <p>Disney Classic, Pixel adventure, Marvel epics. Star Wars sagas Nation Geographic exploratin and more
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia rem dolorum, saepe rerum possimus eius molestiae sapiente dolores temporibus, consectetur enim ea laboriosam commodi dolor aspernatur cupiditate autem magni 
                </p>
            </Content>
        </Container>
    </Section>
    </>
  )
}

const Section = styled.section`
background: url(${backimg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Container = styled.div`
width: 91%
margin: 0 auto;
`;
const Content = styled.div`
margin-top: -10vh;
margin-left: 550px;
h1{
    font-size: 50px;
}
p{
    font-size: 20px;
}
`;

export default Marvelstudio