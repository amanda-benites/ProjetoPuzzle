import { ButtonArticleAdd, ButtonArticleBack, DivButtonsArticle, DivContentArticle, DivImgArticle, H4ArticleIdent1, H4ArticleIdent2, InputContentArticle } from "./style"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import { useNavigate } from "react-router";
import { useState } from "react";
import { api } from "../../services/api";

import imgArticle from "../../assets/article_gray.svg"

function AddArticle() {
    // ----------- HOOKS -----------
    const [article_name, setArticleName] = useState("");
    const [article_link, setArticleLink] = useState("");
    const [error, setError] = useState(""); 

    
    // ----------- NAVIGATE -----------
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }


    // ----------- CRIAÇÃO DE ARTIGO -----------
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        article_name, 
        article_link
      };

      try {
        await api.post("/article/create", data);
        console.log("Artigo criado com sucesso!");
  
        navigate('/repository')
      } catch (error) {
        console.error("Erro ao criar artigo:", error);
        setError("Não foi possível criar artigo");
      }
    };

    return(
        <>
            <ScreenHeader titlePage={`Adicionar artigo`}/>
            <DivImgArticle>
                <img src={imgArticle} alt="Imagem do artigo"/>
            </DivImgArticle>
            <form> 
                <DivContentArticle>
                    <H4ArticleIdent1>Nome do artigo</H4ArticleIdent1>
                    <InputContentArticle 
                        type="text" 
                        placeholder="Escreva aqui"
                        value={article_name}
                        onChange={(e) => setArticleName(e.target.value)}
                        required/>
                    <H4ArticleIdent2>Link do artigo</H4ArticleIdent2>
                    <InputContentArticle 
                        type="text" 
                        placeholder="Escreva aqui"
                        value={article_link}
                        onChange={(e) => setArticleLink(e.target.value)}
                        required/>
                </DivContentArticle>
                <DivButtonsArticle>
                    <ButtonArticleBack onClick={goToHomePage}>Cancelar</ButtonArticleBack>
                    <ButtonArticleAdd onClick={handleSubmit}>Concluir</ButtonArticleAdd>
                </DivButtonsArticle>
            </form>
        </>
    )
}

export default AddArticle
   