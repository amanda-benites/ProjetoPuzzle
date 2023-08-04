import styled from "styled-components";

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 8vh;
    grid-template-areas: 'ImgContactsContainer ImgAddContainer ImgChatContainer';

    border-top: 1px lightgray solid;
`

export const ImgContactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: aqua;
`

export const ImgAddContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: blue;
`

export const ImgChatContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: purple;
`