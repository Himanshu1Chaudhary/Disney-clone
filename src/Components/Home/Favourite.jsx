import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg'
import img2 from '../Images/BlackPanther.jpg'
import img3 from '../Images/cardImg.jpg'
import img4 from '../Images/Disney_MLP_GridItem_TS4_AUNZ.jpg'
import img5 from '../Images/ForkyAsksAQuestion_en-US.jpg'
import img6 from '../Images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg'
import img7 from '../Images/slide1.jpg'
import img8 from '../Images/slide2.jpg'

function Favourite() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false
      };
  return (
    <>
       <Section >
        <h1>FAVOURITE</h1>
        <Data {...settings}>
        <Wrap><img src={img1} alt="" />
        </Wrap>
        <Wrap><img src={img2} alt="" />
        </Wrap>
        <Wrap><img src={img3} alt="" />
        </Wrap>
        <Wrap><img src={img4} alt="" />
        </Wrap>
        <Wrap><img src={img5} alt="" />
        </Wrap>
        <Wrap><img src={img6} alt="" />
        </Wrap>
        <Wrap><img src={img7} alt="" />
        </Wrap>
        <Wrap><img src={img8} alt="" />
        </Wrap>
        </Data>
       </Section>
    </>
  )
}
const Section = styled.section`
 padding: 1 rem 0;
overflow: hidden;
 h1{
    font-size: 1.8rem;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;
 }
`;
const Data = styled(Slider)`
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
    padding: 5px;
    border-radius: 4px;
    display: block;
    z-index: 2000;
    object-position: center;
    
    img{
        width: 100%;
        height: 20vh;
        object-fit: fill;
        border-radius: 4px;
    }

}
`;
const Wrap = styled.section``;

export default Favourite