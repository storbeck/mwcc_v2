import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    img { 
        width: 32px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
    }
`

const SocialIcons = props => (
    <Wrapper>{props.children}</Wrapper>
)

export default SocialIcons;