import styled from "styled-components"
import { ButtonHeaderContainer } from "../../components/home_header/style"

export const ImgProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4;
    padding-left: 2vw;
    width: 100vw;
    height: 28vh;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const ImgContactProfile = styled.div`
    border: none;
    border-radius: 100px;
    height: 9vh;
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background: ${props => `url(${props.background}) no-repeat center center`};
    background-size: 20vw;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const DivButtonsActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 15vh;
    width: 100vw;
    gap: 5vw;
`

export const DivButtonFollow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 15vh;
    width: 100vw;
`

export const ProfileInfos = styled.div`
    width: 100vw;
    height: 24vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Amiko, Arial, Helvetica, sans-serif;
`

export const ProfilePosts = styled.div`
    width: 100vw;
    height: 36vh;
` 

export const PostsProfileDiv = styled.div`
    width: 100vw;
    height: 26vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    flex-wrap: wrap;
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

export const ButtonSeeMoreDisable = styled(ButtonHeaderContainer)`
    width: 25vw;
    color: #CDD1D0;
`

export const MessageUnfollow = styled.p`
    color: #CDD1D0;
`

export const ButtonUnfollow = styled.button`
    background: none;
    border: 1px #69B0EE solid;
    border-radius: 20px;
    color: #69B0EE;
    width: 40vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonFollow = styled.button`
    background: none;
    border: 1px #69B0EE solid;
    border-radius: 20px;
    color: #69B0EE;
    width: 90vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonTalkWith = styled(ButtonUnfollow)`
    background-color: #69B0EE;
    color: #FFFF;
`