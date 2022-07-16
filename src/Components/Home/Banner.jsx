import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import one from '../Images/slide1.jpg'
import two from '../Images/slide2.jpg'
import three from '../Images/slide3.jpg'
import four from '../Images/slide4.jpg'
import five from '../Images/slide5.jpg'
import six from '../Images/slide6.jpg'
import seven from '../Images/slide7.jpg'

function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <>
      <ImageSlider  {...settings}>
        <Wrap>
            <div><img src={one} alt="" /></div>
        </Wrap>
        <Wrap>
            <div><img src={two} alt="" /></div>
        </Wrap>
        <Wrap>
            <div><img src={three} alt="" /></div>
        </Wrap>
        <Wrap>
            <div><img src={four} alt="" /></div>
        </Wrap>
        <Wrap>
            <div><img src={five} alt="" /></div>
        </Wrap>
        <Wrap>
            <div><img src={six} alt="" /></div>
        </Wrap>
        <Wrap>
            <div><img src={seven} alt="" /></div>
        </Wrap>
        
      </ImageSlider>
    </>
  )
}
const ImageSlider = styled(Slider)`
ul li button{
    &::before{
        font-size: 11px;
        color: rgb(150, 150, 171);
    }
}
ul li.slick-active button{
    &::before{
        color: #fff !important;
    }
}
.slick-prev{
    left: -75px;
}
.slick-next{
    right: -75px;
}
.slick-list{
    over-flow: initial !important;
}
div{
    border-radius: 4px;
    display: block;
    z-index: 2000;
    object-position: center;
}
`;
const Wrap = styled.div`

`;

export default Banner