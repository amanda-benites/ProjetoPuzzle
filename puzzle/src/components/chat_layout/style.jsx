import styled from "styled-components";


export const ChatLayoutContainer = styled.div`
    width: 100vw;
    height: 10vh;

    display: grid;
    grid-template-columns: 19vw 63vw 18vw;
    grid-template-rows: 10vh;
    grid-template-areas: 'DivContactImg DivContactName DivInfosChat';
`

export const DivContactImg = styled.div`
    grid-area: DivContactImg;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ImgContact = styled.img`
    width: 12vw;
`

export const DivContactName = styled.div`
    grid-area: DivContactName;
`

export const ButtonChatContact = styled.button`
    width: 63vw;
    height: 10vh;

    background: none;
    border: none;

    font-size: large;
    text-align: left;
`

export const DivInfosChat = styled.div`
    grid-area: DivInfosChat;

    display: grid;
    grid-template-columns: 18vw;
    grid-template-rows: 4vh 6vh;
    grid-template-areas: 'DivDateChat'
                         'DivNumberMensages';
`

export const DivDateChat = styled.div`
    grid-area: DivDateChat;

    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
`

export const ValueDateLayout = styled.div`
    font-size: small;
    color: #797C7B;
`

export const DivNumberMensages = styled.div`
    grid-area: DivNumberMensages;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 1vh;
`

export const ValueMensagesLayout = styled.p`
    color: white;
`

export const DivValueMensage = styled.div`
    background-color: #F04A4C;
    width: 6vw;
    height: 3vh;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`