import styled from "styled-components";

export const PostCardContainer = styled.article`
    width: 26rem;
    flex-shrink: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    border-radius: 10px;
    background: ${props => props.theme["base-post"]};

    span {
        position: absolute;
        top: 2rem;
        right: 2rem;

        color: ${props => props.theme["base-span"]};
        font-family: 'Nunito';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    h2 {
        width: 17.68rem;

        color: ${props => props.theme["base-title"]};
        font-family: 'Nunito';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
    }
    div {
        width: 22rem; 
        height: 7rem;
        flex-shrink: 0;

        overflow: hidden;
        color: ${props => props.theme["base-text"]};
        text-overflow: ellipsis;

        p {
            font-family: 'Nunito';
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 170%;
            display: flex;
        }
    }
 
`