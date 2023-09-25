import styled from "styled-components";
import { ButtonHeaderContact } from "../header_contact/style";

export const FooterChatContainer = styled.footer`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    
    border-top: 1px lightgray solid;

    background-color: white;
`

export const DivInputContainer = styled.div`
    background-color: #F3F6F6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border-radius: 10px;
    padding-right: 2vw;
`

export const InputChatContainer = styled.input`
    background-color: #F3F6F6;
    border: none;
    width: 80vw;
    height: 5vh;
    padding-left: 3vw;

    &:focus {
        outline: 0;
        padding-left: 1vw;
    }
`

export const ButtonSend = styled(ButtonHeaderContact)`
`

export const ImgSendMensage = styled.img`
    width: 6vw;
`
