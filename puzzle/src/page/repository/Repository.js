import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";

import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, DivButtonReporsitory, BodyRepository, ButtonAddArticle } from "./style";

import { useEffect, useState } from "react";


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import { useNavigate } from "react-router";
import ArticleLayout from "../../components/article_layout/ArticleLayout";
import { api } from "../../services/api";
import axios from "axios";

function Repository() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    function goToAddArticlePage() {
        navigate("/add-article");
    }


    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };

    // const filteredArticle = Object.keys(articleValues).filter((article) =>
    // articleValues[article][0].toLowerCase().includes(inputValue.toLowerCase())
    // );

    useEffect(() => {
        // Função para buscar artigos com base no texto digitado
        const searchArticles = async () => {
          try {
            const response = await axios.get(`${api.defaults.baseURL}/article/findArticle`, {
              params: {
                article_id: inputValue, // Ou campo apropriado para a pesquisa
              },
            });
    
            const foundArticle = response.data.data;
    
            if (foundArticle) {
              setArticles([foundArticle]);
              setError(null);
            } else {
              setError('Nenhum artigo encontrado');
            }
          } catch (error) {
            setError('Erro na solicitação');
            console.log(error);
          }
        };
    
        // Chama a função de busca quando o valor do campo de pesquisa muda
        searchArticles();
      }, [inputValue]);

    return(
        <>
            <ScreenHeader titlePage={"Repositório"}/>
            <div>
                <DivSearchContainerMain>
                    <DivSearchContainer>
                        <img src={iconSearch} alt="Ícone de busca"/>
                        <InputSearchContainer
                            type='text'
                            value={inputValue}
                            onChange={(v) => setInputValue(v.target.value)}
                        />

                        {inputValue && (<SpanSearchContainer onClick={clearInput}><img src={removeImg} alt="Ícone X"/></SpanSearchContainer>)}
                    </DivSearchContainer>
                </DivSearchContainerMain>
                <DivButtonReporsitory>
                    <ButtonAddArticle onClick={goToAddArticlePage}>+ Adicionar artigo</ButtonAddArticle>
                </DivButtonReporsitory>
                <BodyRepository>

                {articles.map(article => (
                    <ArticleLayout
                        key={article.article_id}
                        nameArticle={article.article_name} 
                        />
                ))}
          
                </BodyRepository>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default Repository