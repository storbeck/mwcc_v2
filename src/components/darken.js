import React from 'react';
import styled from 'styled-components'

const Dark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .45);
  z-index: 0;
`

const Blue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(4, 76, 146, .8);
  filter: brightness(45%);
  z-index: 0;
`

const Darken = props => {
    if (props.blue) {
        return <Blue />
    }
    
    return <Dark />
}

export default Darken;