import styled from "styled-components"
import { ButtonHeaderContainer } from "../../components/home_header/style"

export const ImgInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4;
    padding-left: 2vw;
    width: 100vw;
    height: 18vh;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const InputImgProfile = styled.div`
    border: none;
    border-radius: 100px;
    height: 10vh;
    width: 22vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background: ${props => `url(${props.background}) no-repeat center center`};
    background-size: cover;
    filter: brightness(50%);

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const ProfileInfos = styled.div`
    width: 100vw;
    height: 46vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const EditButtonSaveDiv = styled.div`
    width: 100vw;
    height: 25vh;
    padding-bottom: 5vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
` 

export const ButtonSaveEdit = styled.button`
    width: 75vw;
    height: 6vh;

    border: none;
    border-radius: 20px;

    background-color: #2CBFAE;
    color: white;

    font-family: Alatsi, Arial, Helvetica, sans-serif;
    font-size: medium;
`

export const ButtonContainer = styled.button`
    width: 75vw;
    height: 6vh;

    border: none;
    border-radius: 20px;

    background-color: #2CBFAE;
    color: white;

    font-family: Alatsi, Arial, Helvetica, sans-serif;
    font-size: medium;
`

export const PostsProfileDiv = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
`

export const PostsProfile = styled.img`
    width: 30vw;
    border-radius: 10px;
`

export const PostsProfileIdent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonSeeMore = styled(ButtonHeaderContainer)`
    width: 25vw;
    color: #69B0EE;
`

export const InputFileContainer = styled.button`
    background: none;
    border: none;
    color: #CDD1D0;
    text-transform: uppercase;
    text-decoration: underline;
`

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

export const LabelImage = styled.label`
    color: black;
    font-weight: bold;
    font-size: small;
    text-align: center;
`