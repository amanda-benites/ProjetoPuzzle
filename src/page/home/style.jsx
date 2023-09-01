import { styled } from "styled-components";
import { ButtonHeaderContainer } from "../../components/home_header/style";

export const BodyHomeContainer = styled.div`
    width: 100vw;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const MainHomeContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivProfileAccess = styled.div`
    width: 100vw;
    height: 12vh;
    display: grid;
    grid-template-columns: 15vw 82vw;
    grid-template-rows: 10vh;
    grid-template-areas: 'MyPicture MyProfile';
    padding-left: 3vw;
`
export const ButtonUserContainer = styled(ButtonHeaderContainer)`
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: left;
`

export const MyPicture = styled.div`
    grid-area: MyPicture;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MyProfile = styled.div`
    grid-area: MyProfile;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1vw;
`

export const MyNameText = styled.p`
    font-size: small;
    padding-top: 0.5vh;
`
