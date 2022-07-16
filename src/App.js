import './App.css';
import styled from 'styled-components';
import Login from './Components/login/Login';
import Home from './Components/Home/Home';
import Header from './Components/Header.jsx/Header';
import Footer from './Components/login/Footer'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
  <>
      <Header />
      <Routes>
        <Route path='/' exact element={<Login />}/>
        <Route path='/Home' exact element={<Home />}/>
      </Routes>
      <Footer />
     </>
  );
}
const Main = styled.main``;
export default App;
