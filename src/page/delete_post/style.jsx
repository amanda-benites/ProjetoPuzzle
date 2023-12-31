import styled from "styled-components";

export const DivPostContainer = styled.div`
    width: 93vw;
    height: 45vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background-color: #F9F9F9;
`

export const DivContentPostDelete = styled.div`
    width: 100vw;
    height: 50vh;

    padding-top: 5vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivButtonsDelete = styled.div`
    width: 100vw;
    height: 50vh;

    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    gap: 10vw;
    padding-bottom: 7.5vh;

    display: flex;
`

export const ButtonCancel = styled.button`
    background: none;
    border: 1px #EF5261 solid;
    border-radius: 10px;
    color: #EF5261;
    width: 40vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonDelete = styled(ButtonCancel)`
    background-color: #EF5261;
    color: #FFFF;
`