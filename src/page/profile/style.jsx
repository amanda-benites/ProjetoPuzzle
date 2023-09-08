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
    border-radius: 50px;
    height: 15vh;
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background: ${props => `url(${props.background}) no-repeat center center`};
    background-size: 20vw;
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

export const ProfilePosts = styled.div`
    width: 100vw;
    height: 25vh;
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