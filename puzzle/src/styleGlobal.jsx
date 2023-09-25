import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}`;

export const CorFundo = styled.div`
    background: white;
    height: 100%;
`

export const TelaInteira = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial';
`

// adicionando fonte aos labels
export const FontAlatsiContainer = styled.label`
    font-family: Alatsi, Arial, Helvetica, sans-serif;
`

// alterando a fonte dos h1
export const FontH1Container = styled.h1`
    font-family: Archivo, Arial, Helvetica, sans-serif;
`