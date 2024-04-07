import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: #fff;
    background-color: #1a1a1a;
    font-family: sans-serif;
}

input, select, button{
    outline: none;
    border: none;
    background-color: transparent;
}
textarea{
    resize: none;
    overflow: hidden;
    border: none;
    outline: none;
    background-color: transparent;
}
button{
    color: #888;
}
li{
    list-style: none;
}


`