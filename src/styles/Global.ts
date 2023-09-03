import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px 'black';
    }

    body{
        background: ${props => props.theme['base-background']};
        font-family: 'Nunito' sans-serif;
        line-height: 160%;
        color: ${props => props.theme['base-title']};
    }
`