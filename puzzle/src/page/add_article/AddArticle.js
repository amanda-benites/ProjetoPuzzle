import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgArticle from "../../assets/article_gray.svg"
import { ButtonArticleAdd, ButtonArticleBack, DivButtonsArticle, DivContentArticle, DivImgArticle, H4ArticleIdent1, H4ArticleIdent2, InputContentArticle } from "./style"
import { useNavigate } from "react-router";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function AddArticle() {
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <>
            <ScreenHeader titlePage={`Adicionar artigo`}/>
            <DivImgArticle>
                <img src={imgArticle} alt="Imagem do artigo"/>
            </DivImgArticle>
            <DivContentArticle>
                <H4ArticleIdent1>Nome do artigo</H4ArticleIdent1>
                <InputContentArticle type="text" placeholder="Escreva aqui"/>
                <H4ArticleIdent2>Link do artigo</H4ArticleIdent2>
                <InputContentArticle type="text" placeholder="Escreva aqui"/>
            </DivContentArticle>
            <DivButtonsArticle>
                <ButtonArticleBack onClick={goToHomePage}>Cancelar</ButtonArticleBack>
                <ButtonArticleAdd>Concluir</ButtonArticleAdd>
            </DivButtonsArticle>
        </>
    )}
}

export default AddArticle