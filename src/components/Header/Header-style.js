import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffcf7;
    position: fixed;
    top: 0;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,175,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,175,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,175,184,1);
    img {
        height: 50px;
        margin: 0 20px;
    }
    button {
        margin: 0 20px;
    }
`