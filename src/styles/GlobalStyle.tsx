import { createGlobalStyle } from "styled-components";

const fontSize = 16;

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: ${fontSize};
    }
    
    *{
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #root{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;