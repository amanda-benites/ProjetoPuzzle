import { ButtonArticleAdd, ButtonArticleBack, DivButtonsArticle, DivContentArticle, DivImgArticle, H4ArticleIdent1, H4ArticleIdent2, TextContainer } from "./style"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import axios from "axios";

import imgArticle from "../../assets/article_gray.svg"

function OpenArticle() {
    const param = useParams()
    const articleId = parseInt(param.article_id, 10)


    // ----------- HOOKS -----------
    const [articleData, setArticleData] = useState({});


    // ----------- NAVIGATE -----------
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }


    // ----------- INFORMAÇÕES DO ARTIGO -----------
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/article/find/${articleId}`)
            .then(response => {
                const articleataFromServer = response.data.data;
                setArticleData(articleataFromServer);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do artigo:', error);
            });
    }, []);


    // ----------- ABRIR ARTIGO EM OUTRA ABA -----------
    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = articleData.article_link;
        document.body.appendChild(textField); // anexa o text field no documento, possibilitando que ele seja selecionado
        textField.select();
        document.execCommand('copy');
        textField.remove();
        window.open(articleData.article_link, '_blank'); // abre nova aba no navegador com o link
    };

    return (
        <>
            <ScreenHeader titlePage={`Abrir artigo`} />
            <DivImgArticle>
                <img src={imgArticle} alt="Imagem do artigo" />
            </DivImgArticle>
            <DivContentArticle>
                <H4ArticleIdent1>Nome do artigo</H4ArticleIdent1>
                <TextContainer>{articleData.article_name}</TextContainer>
                <H4ArticleIdent2>Link do artigo</H4ArticleIdent2>
                <TextContainer>{articleData.article_link}</TextContainer>
            </DivContentArticle>
            <DivButtonsArticle>
                <ButtonArticleBack onClick={goToHomePage}>Voltar</ButtonArticleBack>
                <ButtonArticleAdd onClick={copyToClipboard}>Abrir</ButtonArticleAdd>
            </DivButtonsArticle>
        </>
    )
}

export default OpenArticle