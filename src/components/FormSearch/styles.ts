import styled from "styled-components";

export const FormSearchContainer = styled.form`

    width: 54rem;
    margin-top: 10rem;
    margin-right: auto;
    margin-left: auto;

    div {
        display: flex;
        justify-content: space-between;

        label {
            color: ${props => props.theme["base-subtitle"]};
            font-family: 'Nunito';
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }

        span {
            color: ${props => props.theme["base-label"]};
            font-family: 'Nunito';
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }
    }

    input{        
        width: 54rem;
        display: flex;
        padding: 12px 16px;
        align-items: center;
        gap: 8px;

        background: ${props => props.theme["base-input"]};
        border-radius: 6px;
        border: 1px solid ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};
        font-family: 'Nunito';
    }
`