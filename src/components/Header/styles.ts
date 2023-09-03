import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    width: 90rem;
    height: 18.5rem;
    margin: 0 auto;

    background: ${props => props.theme['base-header']};

    img {
        position: absolute;
        z-index: 0;
    }
`

export const LogoContent = styled.div`
    height: 6.125rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h2 {
        color: ${props => props.theme['blue']};
        font-family: 'Coda';
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }
`