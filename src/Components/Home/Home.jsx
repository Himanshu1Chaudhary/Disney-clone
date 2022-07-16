import React from 'react'
import Banner from './Banner'
import styled from 'styled-components'
import backimg from '../Images/disneybody.png'
import Brand from './Brand'
import Movies from './Movies'
import Favourite from './Favourite'
import Originals from './Originals'
import Series from './Series'
import Trending from './Trending'
import Disneykids from './Disneykids'


function Home() {
  return (
    <>
    <Container>
    <Banner />
    <Brand />
    <Movies />
     <Favourite />
    <Originals />
    <Series />
    <Trending />
    <Disneykids /> 
    </Container>
    </>
  )
}
const Container = styled.main`
position: relative;
height: auto;
padding: 0  calc(3.5vw + 5px);
display: block;
overflow-x: hidden;
background: url(${backimg});
background-position: center;
background-size: cover;
`;

export default Home