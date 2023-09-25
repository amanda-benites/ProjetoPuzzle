import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";


export const ContactLayoutContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 15vw 85vw;
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
    padding-right: 2vw;
`

export const ContactButton = styled(ButtonHeaderContainer)`
    text-align: left;
`
export const NameContactText = styled.p`
    font-size: larger;
`