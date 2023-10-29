import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgArticle from "../../assets/article_gray.svg"
import { ButtonArticleAdd, ButtonArticleBack, DivButtonsArticle, DivContentArticle, DivImgArticle, H4ArticleIdent1, H4ArticleIdent2 } from "./style"
import { useNavigate } from "react-router";

function OpenArticle() {

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

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