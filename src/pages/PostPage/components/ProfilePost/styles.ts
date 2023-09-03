import { styled } from "styled-components";

export const ProfilePostContainer = styled.section`
    width: 54rem;
    height: 13.25rem;
    border-radius: 10px;
    flex-shrink: 0;
    margin: -6rem auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    z-index: 10;
    position: relative;
    gap: 2rem;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0 2px 28px 0px rgba(0, 0, 0, 0.20);

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        a {

            color: ${props => props.theme.blue};
            font-family: 'Nunito';
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
            text-transform: uppercase;
            text-decoration: none;

            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
    }
    h1 {
        width: 50rem;

        color: var(--base-title, #E7EDF4);
        font-family: 'Nunito';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
    }
`
export const ProfilePostInfo = styled.div`
    display: flex;
    justify-content: start;
    
    div {
        display: flex;
        align-items: center;
        justify-content: start!important;
        gap: 8px;

        span {
            color: ${props => props.theme["base-span"]};
            font-family: 'Nunito';
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }
    }
`