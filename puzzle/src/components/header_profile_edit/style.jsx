import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";


export const HeadeProfileContainer = styled.header`
    height: 5vh;
    width: 100vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left: 4vw;
    padding-right: 4vw;
`

export const ButtonHeaderProfile = styled(ButtonHeaderContainer)`
`

export const ImgBackProfile = styled.img`
    width: 5vw;
`

export const DropDownMenu = styled.div`
    position: absolute;
    width: 28vw;
    height: 10vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 12.5vh;
    margin-left: 64vw;
    background-color: #FFF7E6;
`

export const ItemsMenu = styled.button`
    background: none;
    border: none;

    width: 26vw;
    height: 4vh;
    padding-left: 2vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`