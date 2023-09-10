import { styled } from "styled-components";
import { ButtonContainer } from "../../components/login_button/style";
import { FontAlatsiContainer } from "../../styleGlobal";
import square from "../../assets/square.svg"


export const AuthBodyContainer = styled.div`
    width: 100vw;
    height: 75vh;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const DivTitleContainer = styled.div`
    width: 95vw;
    height: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding-left: 5vw;
    
    background: url(${square}) no-repeat;
    background-position: 1.9vh 18.2vh;
`

export const FormAuthContainer = styled.form`
    width: 95vw;
    height: 55vh;
    
    display: flex;
    flex-direction: column;
    padding-left: 5vw;
`

export const LabelColor = styled(FontAlatsiContainer)`
    color: #69B0EE;

    margin-top: 8vh;
`

export const DivButtonAuthContainer = styled.div`
    width: 100vw;
    height: 15vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2vh;
`

export const AuthButtonColor = styled(ButtonContainer)`
    background-color: #F6C863;
`

export const ForgetPasswordContainer = styled(ButtonContainer)`
    height: 3vh;

    margin-top: 2vh;

    background: none;
    color: #F6C863;
`