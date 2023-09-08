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
    grid-template-columns: 12vw 81vw;
    grid-template-rows: 6vh;
    grid-template-areas: 'ImgHeader ProfileButton';
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

export const ButtonIconsPost = styled(ButtonHeaderContainer)`
`

export const ImgPostContainer = styled.img`
    width: 85vw;
`
