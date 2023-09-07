import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 8vh;
    grid-template-areas: 'ImgContactsContainer ImgAddContainer ImgChatContainer';

    position: fixed;
    bottom: 0;
    
    border-top: 1px lightgray solid;

    background-color: white;
`

export const ButtonFooterContainer = styled(ButtonHeaderContainer)`
    
`

export const ImgContactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ImgAddContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ImgChatContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`