import { styled } from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";

export const DivPostContainer = styled.div`
    width: 93vw;
    display: grid;
    grid-template-columns: 93vw;
    grid-template-rows: 6vh 37vh 5vh;
    grid-template-areas: 'HeaderPost'
                         'BodyPost'
                         'FooterPost';

    border-radius: 10px;
    background-color: #F9F9F9;
`

export const HeaderPost = styled.div`
    grid-area: HeaderPost;
    border-radius: 10px 10px 0px 0px;

    display: grid;
    grid-template-columns: 12vw 61vw 20vw;
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
    grid-area: BodyPost;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FooterPost = styled.div`
    grid-area: FooterPost;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row;
    gap: 3vw;
    padding-left: 5vw;
`

export const DivMargin = styled.div`
    grid-area: DivMargin;
`

export const ImgPostContainer = styled.img`
    width: 80vw;
    height: 37vh;

    object-fit: cover;
`

export const ImgThreePoints = styled.img`
    transform: rotate(90deg);
`

export const ImgUser = styled.img`
    height: 3.5vh;
    width: 8vw;
    border-radius: 100px;
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

export const DivLegendContainer = styled.div`
    width: 93vw;
    padding-left: 5vw;
    padding-bottom: 1vh
`