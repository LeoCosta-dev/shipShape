import styled from "styled-components";

export const FormsStyle = styled.form`
    width: 50%;
    min-height: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #EEEFEA;
    border-radius: 20px;
    section{
        display: flex;
        justify-content: flex-start;
        width: 30%;
        font-size: xx-large;
    }
    div {
        margin: 20px;
        display: flex;
        width: 80%;
        justify-content: space-around;
        align-items: center;
    }
`