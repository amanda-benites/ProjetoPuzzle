import styled from "styled-components";

export const DivImgTestimony = styled.div`
    width: 100vw;
    height: 30vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivContentTestimony = styled.div`
    padding-top: 2vh;
    padding-left: 5vw;
    width: 100vw;
    height: 45vh;
`

export const H4TestimonyIdent = styled.h4`
    font-size: small;
    color: #69B0EE;
    line-height: 3vh;
`

export const InputContentTestimony = styled.input`
    background: none;
    border: none;
    border-bottom: 1px #CDD1D0 solid;
    width: 90vw;
    height: 5vh;
    
    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const DivButtonsTestimony = styled.div`
    width: 100vw;
    height: 17vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10vw;
`

export const ButtonTestimonyBack = styled.button`
    background: none;
    border: 1px #69B0EE solid;
    border-radius: 20px;
    color: #69B0EE;
    width: 40vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonTestimonyAdd = styled(ButtonTestimonyBack)`
    background-color: #69B0EE;
    color: #FFFF;
`