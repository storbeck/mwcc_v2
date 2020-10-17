import React from 'react';
import styled from 'styled-components'

const Background = styled.section`
  background-image: url(${props => props.img});
  background-position: 50% 50%;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  h1 {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
    font-weight: 700;
    text-shadow: rgb(0, 0, 0) 0px 0px 20px;
    margin-bottom: 30px;
  }
`

const Hero = props => (
    <Background img={props.img}>{props.children}</Background>
)

export default Hero;