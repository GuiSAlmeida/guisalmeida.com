import styled from 'styled-components'
import media from 'styled-media-query'

import transitions from '../../styles/transitions'

export const SocialWrapper = styled.nav`
    margin: 2rem auto;
    width: 100%;
    ${media.lessThan('medium')`
        order: 2;
        margin: 0 0 1rem;
    `}
`

export const SocialList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none !important;
    a {
        color: var(--postColor);
        text-decoration: none;
        transition: ${transitions.COLOR};
        &:hover {
        color: var(--highlight);
        }
    }
`

export const IconWrapper = styled.div`
    fill: #bbb;
    width: 25px;
    height: 25px;
`