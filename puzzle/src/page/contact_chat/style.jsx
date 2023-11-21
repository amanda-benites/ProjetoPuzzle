import styled from "styled-components"

export const EffectChat = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    filter: brightness(40%);
`

export const PopUpOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fundo escuro para destacar o popup */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; 
`

export const PopUp = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
`

export const ButtonBack = styled.button`
    border: none;
    width: 30vw;
    height: 4vh;
    border-radius: 10px;
    background-color: #69B0EE;
    margin-top: 2vh;
    color: #FFFF;
`
