import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";

export const ScreenHeaderContainer = styled.header`
    width: 100vw;
    height: 8vh;

    display: grid;
    grid-template-columns: 10vw 80vw 10vw;
    grid-template-rows: 8vh;
    grid-template-areas: 'DivImgButtonBack DivTitle DivAlign';

    border-bottom: 1px lightgray solid;
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

export const DivTitle = styled.div`
    grid-area: DivTitle;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const DivAlign = styled.div`
    grid-area: DivAlign;
`

export const H2ContainerHeader = styled.div`
    font-size: 22px;
    font-weight: bold;
`