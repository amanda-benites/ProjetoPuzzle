import { styled } from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";

export const DivPostContainer = styled.div`
    width: 93vw;
    display: grid;
    padding-top: 2vh;
`

export const HeaderPost = styled.div`
    width: 93vw;

    display: grid;
    grid-template-columns: 12vw 58vw 20vw;
    grid-template-rows: 6vh;
    grid-template-areas: 'ImgHeader ProfileButton ThreePoints';
`

export const ImgHeader = styled.div`
    grid-area: ImgHeader;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
`

export const ProfileButton = styled.div`
    grid-area: ProfileButton;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 2vw;
`

export const ThreePoints = styled.div`
    grid-area: ThreePoints;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
`

export const BodyPost = styled.div`
    width: 93vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FooterPost = styled.div`
    width: 88vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    gap: 3vw;
    padding-left: 5vw;
`

export const DivMainComments = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1vh;
`

export const DivComments = styled.div`
    width: 88vw;
    display: flex;
    flex-direction: column;
    gap: 4vw;
    padding-left: 5vw;
`

export const DivEndComments = styled.div`
    width: 93vw;
    height: 17vh;
`

export const DivMargin = styled.div`
    grid-area: DivMargin;
`

export const ImgPostContainer = styled.img`
    width: 85vw;
`

export const ImgThreePoints = styled.img`
    transform: rotate(90deg);
`

export const ImgUser = styled.img`
    width: 8vw;
`


export const ButtonIconsPost = styled(ButtonHeaderContainer)`
`

export const DropDownMenu = styled.div`
    position: absolute;
    width: 25vw;
    height: 8vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 12vh;
    background-color: #FFF7E6;
`

export const ItemsMenu = styled.button`
    background: none;
    border: none;

    width: 23vw;
    height: 4vh;
    padding-left: 2vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`