import React from 'react';
import styled from 'styled-components'

const SplitDark = styled.div`
  height: 5px;
  width: 60px;
  background-color: rgb(4, 76, 146);
  margin: 20px 0;
`

const SplitLight = styled.div`
  height: 5px;
  width: 60px;
  background-color: white;
  margin: 20px 0;
`

const Split = props => (

    props.dark ? <SplitDark /> : <SplitLight />
)

export default Split;