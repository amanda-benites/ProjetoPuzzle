import styled from "styled-components";

export const DivInfoProfileEdit = styled.div`
    width: 96vw;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 4vw;
`

export const H4InfoProfileEdit = styled.h4`
    font-size: small;
    color: #CDD1D0;
    line-height: 3vh;
`

export const InputProfileEdit = styled.input`
    background: none;
    border: none;
    height: 2vh;
    width: 87vw;

    border-bottom: 1px #CDD1D0 solid;
    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`