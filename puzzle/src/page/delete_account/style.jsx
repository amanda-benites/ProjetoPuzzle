import styled from "styled-components"

import square from "../../assets/square.svg"

export const DivTitleContainer = styled.div`
    width: 95vw;
    height: 70vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 5vw;
    
    background: url(${square}) no-repeat;
    background-position: 1.9vh 37.5vh;
`


export const DivButtonsExit = styled.div`
    width: 100vw;
    height: 30vh;

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
    border: 1px #2CBFAE solid;
    border-radius: 20px;
    color: #2CBFAE;
    width: 40vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonLogout = styled(ButtonCancel)`
    background-color: #2CBFAE;
    color: #FFFF;
`

