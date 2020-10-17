import React from 'react';
import styled from 'styled-components'

const NormalImage = styled.div`
  width: 95%;
  position: relative;
  z-index: -1;
  margin-top: 10px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(4, 76, 146); 
    transform: translate3d(10px, 10px, 0);

  }
  img {
    width: 97%;
    position: relative;
    z-index: 0;
    border: 1px solid white;
  }
`

const FlippedImage = styled.div`
  width: 95%;
  position: relative;
  z-index: -1;
  margin-top: 10px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(4, 76, 146); 
    transform: translate3d(0, 10px, 0);

  }
  img {
    width: 100%;
    position: relative;
    z-index: 0;
    border: 1px solid white;
    transform: translate3d(15px, 0, 0);
  }
`

const ImageContainer = props => (
    props.flipped
        ? <NormalImage><img src={props.image} alt={props.alt} /></NormalImage> 
        : <FlippedImage><img src={props.image} alt={props.alt} /></FlippedImage>
)

export default ImageContainer;