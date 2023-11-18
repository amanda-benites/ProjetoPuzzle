import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgArticle from "../../assets/article_gray.svg"
import { ButtonArticleAdd, ButtonArticleBack, DivButtonsArticle, DivContentArticle, DivImgArticle, H4ArticleIdent1, H4ArticleIdent2 } from "./style"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";

function OpenArticle() {
    const param = useParams()
    const articleId = param.article_id

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    const [articleData, setArticleData] = useState(null);
    
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/article/find_article/${articleId}`)
        .then(response => {
            const articleataFromServer = response.data; 
            setArticleData(articleataFromServer.data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do artigo:', error);
        });
    }, []);

    return(
        <>
            <ScreenHeader titlePage={`Abrir artigo`}/>
            <DivImgArticle>
                <img src={imgArticle} alt="Imagem do artigo"/>
            </DivImgArticle>
            <DivContentArticle>
                <H4ArticleIdent1>Nome do artigo</H4ArticleIdent1>
                <p>Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura</p>
                <H4ArticleIdent2>Link do artigo</H4ArticleIdent2>
                <p>link.artigo.com.br</p>
            </DivContentArticle>
            <DivButtonsArticle>
                <ButtonArticleBack onClick={goToHomePage}>Voltar</ButtonArticleBack>
                <ButtonArticleAdd>Abrir</ButtonArticleAdd>
            </DivButtonsArticle>
        </>
    )
}

export default OpenArticle