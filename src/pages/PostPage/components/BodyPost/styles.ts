import styled from "styled-components";

export const BodyPostContainer = styled.article`
    width: 54rem;
    margin: 0 auto;
    margin-top: 7rem;
    padding: 2rem;

    p {
        color:${props => props.theme["base-text"]};
        font-family: 'Nunito';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;

        a {
            color:${props => props.theme.blue};
            font-family: 'Nunito';
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            text-decoration-line: underline;
        }
    }

    div {
        width: 100%;
        padding: 1rem;
        margin-top: 2rem;
        background: ${props => props.theme["base-post"]};
        display: flex;
        align-items: center;
        gap: 8px;
        align-self: stretch;
    }
  
`