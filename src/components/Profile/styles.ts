import { styled } from "styled-components";

export const ProfileContainer = styled.section`
    width: 54rem;
    height: 13.25rem;
    border-radius: 10px;
    flex-shrink: 0;
    margin: -6rem auto;
    display: flex;
    padding: 2rem 2.5rem;
    z-index: 10;
    position: relative;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0 2px 28px 0px rgba(0, 0, 0, 0.20);
`
export const ProfilePhoto = styled.div`
    width: 9.25rem;
    height: 9.25rem;
    flex-shrink: 0;
    border-radius: 8px;

    img {
        width: 9.25rem;
        height: 9.25rem;
    }
`
export const ProfileInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 2rem;
    gap: 1rem;
    position: relative;

    a {
        color: var(--brand-blue, #3294F8);
        font-family: 'Nunito';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;
        text-decoration: none;

        position: absolute;
        right: 2rem;
    }

    h4 {
        color: ${props => props.theme['base-title']};
        font-family: 'Nunito';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
    }

    span {
        color: var(--base-text, #AFC2D4);
        font-family: 'Nunito';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    div {
        width: 100%;
        height: 2rem;
        display: flex;

        div {
            display: flex;
            align-items: center;
            span {
                color: ${props => props.theme["base-subtitle"]};
                font-family: 'Nunito';
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;

                margin-left: 0.4rem;
            }
        }
    }
`