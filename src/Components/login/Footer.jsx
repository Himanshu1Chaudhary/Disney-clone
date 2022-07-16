import React from 'react'
import styled from 'styled-components'
import footerimg from '../Images/cta-logo-one.svg'

function Footer() {
  return (
    <>
    <Section>
        <Container>
            <FooterBrand>
                <img src={footerimg} />
            </FooterBrand>
            <Nat>
            <li><p>ENGLISH</p></li>
            <li><p>SUBSCRIBER AGREEMENT</p></li>
            <li><p>PRIVACY POLICY</p></li>
            <li><p>YOUR CALIFORNIA PRIVACY</p></li>
            <li><p>DO NOT SELL MY INFO</p></li>
            <li><p>CHILDREN's ONLINE PRIVACY POLICY</p></li>
            <li><p>INTREST BASED CONTENT</p></li>
            <li><p>SUPPORTED DEVICES</p></li>
            <li><p>GIFT DISNEY</p></li>
            <li><p>ABOUT US</p></li>
            <li><p>DISNEY+ PARTNER PROGRAME</p></li>
            <li><p>PREMIER ACCESSES</p></li>
            <li><p>THE DISNEY BUNDLES</p></li>
            <li><p>CLOSED CAPTIONING</p></li>
            </Nat>
            <CopyRight>
              <p>&#169;DisneyPlus-JSStack. All Rights Reseved.</p>
            </CopyRight>
        </Container>
    </Section>
    </>
  )
}

const Section = styled.section`
padding: 2rem 0;
margin-bottom: 0; 
`;
const Container = styled.div`
 width: 95%;
 margin: 0 auto;
`;
const FooterBrand = styled.div`
text-align: center;
    img{
        width: 20rem;
        height: auto;
        object-fit: fill; 
    }
`;
const Nat = styled.div`
 display: flex;
 align-items: center;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 li{
    list-style: none;
    p{
        padding: 0 0.5rem;
        font-size: 0.9rem;
        margin-right: 0.3rem;
    }
 }
`;
const CopyRight = styled.div`
text-align: center;
p{
  color: gray;
}
`;

export default Footer