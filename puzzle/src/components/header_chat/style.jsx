import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";

export const ScreenHeaderContainer = styled.header`
    width: 100vw;
    height: 8vh;

    display: grid;
    grid-template-columns: 8vw 17vw 75vw;
    grid-template-rows: 8vh;
    grid-template-areas: 'DivImgButtonBack DivImgContact DivTitle';

    border-bottom: 1px lightgray solid;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const ScreenButtonHeader= styled(ButtonHeaderContainer)`
    
`

export const DivImgButtonBack = styled.div`
    grid-area: DivImgButtonBack;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ImgButtonBack = styled.img`
    width: 5vw;
`

export const DivImgContact = styled.div`
    grid-area: DivImgContact;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ImgContactChat = styled.img`
    width: 13vw;
    height: 6vh;

    border-radius: 100px;
    object-fit: cover;

    
`

export const DivTitle = styled.div`
    grid-area: DivTitle;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 4vw;
`