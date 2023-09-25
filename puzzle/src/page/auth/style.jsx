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
    height: 75vh;
    
    display: flex;
    flex-direction: column;
    padding-left: 5vw;
`

export const LabelColor = styled(FontAlatsiContainer)`
    color: #69B0EE;

    margin-top: 8vh;
`

export const InputContainer = styled.input`
    background: none;
    border: none;
    height: 5vh;
    width: 87vw;

    border-bottom: 1px #CDD1D0 solid;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const DivButtonAuthContainer = styled.div`
    width: 90vw;
    height: 35vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    padding-top: 2vh;
`

export const AuthButtonColor = styled(ButtonContainer)`
    background-color: #F6C863;

    width: 75vw;
    height: 6vh;

    border: none;
    border-radius: 20px;

    color: white;

    font-family: Alatsi, Arial, Helvetica, sans-serif;
    font-size: medium;
`

export const ForgetPasswordContainer = styled(ButtonContainer)`
    height: 3vh;

    margin-top: 2vh;

    background: none;
    color: #F6C863;
`