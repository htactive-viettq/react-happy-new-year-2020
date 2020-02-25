import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
import moment from 'moment';
import Countdown from '../components/countdown';
import tienvoimg from '../images/tienvonhunuoc.gif'
import locbiec from '../images/locbiec.gif'

const Marquee = styled.p`
  display: inline-block;
  margin: 20px auto;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
`;
const TextEffect = styled.span`
  font-family: 'ongDo';
  color: red;
  font-size: 2rem;
  display: inline-block;
  padding-left: 100%;
  animation: marquee 20s linear infinite;
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 660px auto;
  background-color: #2196F3;
  padding: 10px;
` 
const ImageWrapper = styled.div`
  max-width: 960px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 30px;
  text-align: center;
`
 const CountDownWrapper = styled.div`
 `
 const Today = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`
const AudioWrapper = styled.div`
  text-align: center;
`
const Left = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  background-image: url(${tienvoimg});
  background-repeat: no-repeat;
  background-position: center;
`

const Right = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  background-image: url(${locbiec});
  background-repeat: no-repeat;
  background-position: center;
`
const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <Marquee>
      <TextEffect>
        Ñaûng coäng saûn Vieät Nam quang vinh muoân naêm ,Möøng ñaûng, Möøng Xuaân, Möøng ñaát nöôùc ñoåi môùi.
      </TextEffect>
    </Marquee>
    <GridContainer>
    <Left>
    </Left>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Right>
    </Right>
    </GridContainer>
    <CountDownWrapper id="count-down-wrapper">
    <Today>Hôm nay là ngày {moment().format('DD-MM-YYYY, h:mm:ss a')}</Today>
    <div> HT ACTIVE </div>
    <div> HT BATMINTON </div>
    <div> HT FOOTBALL </div>
    <Countdown timeTillDate="01 25 2020, 00:00 am" timeFormat="MM DD YYYY, h:mm a" />
    </CountDownWrapper>
    <AudioWrapper>
      <audio autoplay controls>
        <source src={require('../track/combuomxuan.mp3')} type="audio/mpeg"/>
      </audio>
    </AudioWrapper>
  </Layout>
  </>
)

export default IndexPage