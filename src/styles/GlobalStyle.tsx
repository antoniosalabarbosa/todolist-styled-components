import { createGlobalStyle } from "styled-components";
import * as variables from "./variables";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: ${variables.$fontSize};
    }
    
    *{
        margin: 0;
        border: 0;
        padding: 0;
        font-family: ${variables.$fontFamily};
        box-sizing: border-box;
    }
    
    body{
        width: 100%;
        display: flex;
        justify-content: center;
        overflow-x: hidden;
    }

    #root{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    section{
        width: 100%;
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        border-bottom: 3px solid ${ variables.$black };
        padding: 10px 20px;
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
    }

    #search{
        margin: 20px 0;
        width: 90vw;
        max-width: 600px;
    }

    #modal{
        margin: 20px 0 0 0;
    }

    #modal input{
        margin: 0 10px 0 0;
    }

    #newTask{
        margin: 20px 0;
        font-size: 2rem;
    }
`;

export default GlobalStyle;