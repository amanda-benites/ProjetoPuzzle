import styled from "styled-components";

export const DivSearchContainerMain = styled.div`
    width: 100vw;
    height: 8vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const DivSearchContainer = styled.div`
    width: 90vw;

    padding-right: 1.5vw;
    padding-left: 1.5vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background-color: #F3F6F6;
`


export const InputSearchContainer = styled.input`
    background-color: #F3F6F6;
    border: none;
    width: 80vw;
    height: 5vh;

    &:focus {
        outline: 0;
        padding-left: 1vw;
    }
`

export const SpanSearchContainer = styled.span`
    color: #d3d3d3;
`