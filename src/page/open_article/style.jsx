import styled from "styled-components";

export const DivImgArticle = styled.div`
    width: 100vw;
    height: 30vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivContentArticle = styled.div`
    padding-top: 2vh;
    padding-left: 5vw;
    width: 100vw;
    height: 45vh;
`

export const H4ArticleIdent1 = styled.h4`
    font-size: small;
    color: #69B0EE;
    line-height: 3vh;
`

export const H4ArticleIdent2 = styled(H4ArticleIdent1)`
    font-size: small;
    color: #69B0EE;
    line-height: 3vh;
    margin-top: 5vh;
`

export const InputContentArticle = styled.input`
    background: none;
    border: none;
    border-bottom: 1px #CDD1D0 solid;
    width: 90vw;
    height: 5vh;
    
    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const DivButtonsArticle = styled.div`
    width: 100vw;
    height: 17vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10vw;
`

export const ButtonArticleBack = styled.button`
    background: none;
    border: 1px #69B0EE solid;
    border-radius: 10px;
    color: #69B0EE;
    width: 40vw;
    height: 6vh;
    font-size: medium;
`

export const ButtonArticleAdd = styled(ButtonArticleBack)`
    background-color: #69B0EE;
    color: #FFFF;
`