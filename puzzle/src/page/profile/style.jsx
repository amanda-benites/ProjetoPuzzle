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
    background-size: 22vw;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const ProfileInfos = styled.div`
    width: 100vw;
    height: 31vh;
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const ProfilePosts = styled.div`
    width: 100vw;
    height: 40vh;
` 

export const PostsProfileDiv = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    flex-wrap: wrap;
`

export const PostsProfile = styled.img`
    width: 30vw;
    height: 16vh;
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