import styled from "styled-components";

import backgroundImg from "../../assets/exemploImagem.svg"

export const DivInputsContainer = styled.div`
    width: 100vw;
    height: 65vh;
    display: flex;
    flex-direction: column;
    padding-left: 5vw;
`

export const DivButtonsContainer = styled.div`
    width: 100vw;
    height: 27vh;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10vw;
`

export const SpanInsertPost = styled.span`
    font-size: small;
    line-height: 3vh;
    margin-top: 2vh;
`

export const DivInputFile = styled.div`
    border: #CDD1D0 1px solid;
    border-radius: 10px;
    width: 90vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3vh;
    background-size: cover;
    background-repeat: no-repeat;

    filter: brightness(50%);
`

export const LabelInputContainer = styled.label`
    color: #CDD1D0;
`

export const InputFileContainer = styled.button`
    background: none;
    border: none;
    color: #CDD1D0;
    text-transform: uppercase;
    text-decoration: underline;
`

export const InputLegendContainer = styled.input`
    background: none;
    border: #CDD1D0 1px solid;
    border-radius: 10px;
    height: 5vh;
    width: 90vw;

    
    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const ButtonCancel = styled.button`
    background: none;
    border: 1px #EF5261 solid;
    border-radius: 20px;
    color: #EF5261;
    width: 40vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonOk = styled(ButtonCancel)`
    background-color: #EF5261;
    color: #FFFF;
`