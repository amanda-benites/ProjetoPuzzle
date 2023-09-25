import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";


export const ContactLayoutContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: 8vh;
    grid-template-areas: "contactImg contactName";
`

export const ContactImg = styled.div`
    grid-area: contactImg;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const ImgContactContainer = styled.img`
    width: 11vw;
`

export const ContactName = styled.div`
    grid-area: contactName;
    
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ContactButton = styled(ButtonHeaderContainer)`
    
`
export const NameContactText = styled.p`
    font-size: larger;
`