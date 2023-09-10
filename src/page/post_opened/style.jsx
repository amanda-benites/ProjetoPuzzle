import { styled } from "styled-components";
import { ButtonHeaderContainer } from "../../components/home_header/style";

export const BodyHomeContainer = styled.div`
    width: 100vw;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const MainHomeContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
`

export const DivFooterPostOpened = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 15vh;
    background-color: white;
`

export const DivAddComment = styled.div`
    width: 100vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const InputAddComment = styled.input`
    width: 85vw;
    height: 4vh;

    background: none;
    border: none;
    border-bottom: 1px #CDD1D0 solid;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const SendMensage = styled(ButtonHeaderContainer)`
    background: none;
    border: none;
`