import { styled } from "styled-components";
import { ButtonHeaderContainer } from "../../components/home_header/style";

export const BodyHomeContainer = styled.body`
    width: 100vw;
    font-family: Amiko, Arial, Helvetica, sans-serif;;
`

export const MainHomeContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivProfileAccess = styled.div`
    width: 100vw;
    height: 10vh;
    display: grid;
    grid-template-columns: 15vw 85vw;
    grid-template-rows: 10vh;
    grid-template-areas: 'MyPicture MyProfile';
    background-color: aqua;
`
export const ButtonUserContainer = styled(ButtonHeaderContainer)`
    
`

export const MyPicture = styled.div`
    grid-area: MyPicture;
    background-color: green;
`

export const MyProfile = styled.div`
    grid-area: MyProfile;
    background-color: purple;
`
