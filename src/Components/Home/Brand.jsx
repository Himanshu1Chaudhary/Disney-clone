import React from "react";
import one from "../Images/one.png";
import video1 from "../videos/disney.mp4";
import styled from "styled-components";
import two from "../Images/two.png";
import video2 from "../videos/marvel.mp4";
import three from "../Images/three.png";
import video3 from "../videos/natgeo.mp4";
import four from "../Images/four.png";
import video4 from "../videos/pixar.mp4";
import five from "../Images/five.png";
import video5 from "../videos/starwars.mp4";

function Brand() {
  return (
    <>
      <Conatiner>
        <Wrap>
          <img src={one} alt="" />
          <video muted={true} controls loop={true} autoplay={true} playsInline={true}>
            <source src={video1} type="video/mp4"></source>
          </video>
        </Wrap>
     
      <Wrap>
          <img src={two} alt="" />
          <video  muted={true} controls loop={true} autoplay={true}  playsInline={true}>
            <source src={video2} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={three} alt="" />
          <video muted={true} controls loop={true} autoplay={true}  playsInline={true}>
            <source src={video3} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={four} alt="" />
          <video  muted={true} controls loop={true} autoplay={true} playsInline={true}>
            <source src={video4} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={five} alt="" />
          <video  muted={true} controls  loop={true} autoplay={true} playsInline={true}>
            <source src={video5} type="video/mp4"></source>
          </video>
        </Wrap>
</Conatiner>
    </>
  );
}

const Conatiner = styled.section`
widht: 100vw;
`;
const Wrap = styled.div`
position:  relative;
padding-top: 50px;
width: 15%;
margin: 30px;
max-height: 30%;
border-radius: 10px;
overflow: hidden;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
transition: all250ms cubib-bezier(0.25, 0.46, 0.45, 0.94) 0s;
object-position: center;
display: inline-block;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  z-index: 1500;
  display: block;
  border-radius: 10px;
  transition: opacity 500ms ease-in-out 0s;
}
video{
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  z-index: 1500;
  display: block;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 0px;

  &:hover{
    opacity: 1;
  }
}
`;

export default Brand;
