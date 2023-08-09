import { styled } from "styled-components";


export const HomeHeaderContainer = styled.header`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 8vh;
    grid-template-areas: 'LogoHeaderContainer ButtonHeaderContainer';

    border-bottom: 1px lightgray solid;
`

export const LogoHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`

export const ButtonDivHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right; 
    
    padding-right: 3vw;
    gap: 4vw;
`

export const ButtonHeaderContainer = styled.button`
    background: none;
    border: none;
`