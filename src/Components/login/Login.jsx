import React from 'react'
import Banner from './Banner'
import Stream from './Stream'
import styled from 'styled-components'
import Stream2 from './Stream2'
import GroupWatch from './GroupWatch'
import Marvelstudio from './Marvelstudio'
import Movies from './Movies'
import Devices from './Devices'

function Login() {
  return (
    <>
    <Main>
        <Banner/>
        <Stream />
        <GroupWatch />
        <Marvelstudio />
        <Movies />
        <Stream2 />
        <Devices />
    </Main>
    </>
  )
}
const Main = styled.main`
width: auto;
height: auto;
overflow: auto;
`;
export default Login