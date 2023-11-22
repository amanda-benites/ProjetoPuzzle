import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, TextNotArticles, DivButtonReporsitory, BodyRepository, ButtonAddArticle } from "./style";

import GerenalFooter from "../../components/general_footer/GeneralFooter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";

import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import ArticleLayout from "../../components/article_layout/ArticleLayout";

function Repository() {
    // ----------- HOOKS -----------
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate()

    function goToAddArticlePage() {
        navigate("/add-article");
    }

    const clearInput = () => {
        setInputValue('');
    };


    // ----------- LISTA DE ARTIGOS -----------
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/article/articles`)
            .then(function (response) {
                const sortedArticles = response.data.data.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA;
                });

                setArticles(sortedArticles);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    // ----------- PESQUISAR -----------
    const filteredArticles = articles.filter((article) =>
        article.article_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <>
            <ScreenHeader titlePage={"Repositório"} />
            <div>
                <DivSearchContainerMain>
                    <DivSearchContainer>
                        <img src={iconSearch} alt="Ícone de busca" />
                        <InputSearchContainer
                            type='text'
                            value={inputValue}
                            onChange={(v) => setInputValue(v.target.value)}
                        />

                        {inputValue && (<SpanSearchContainer onClick={clearInput}><img src={removeImg} alt="Ícone X" /></SpanSearchContainer>)}
                    </DivSearchContainer>
                </DivSearchContainerMain>
                <DivButtonReporsitory>
                    <ButtonAddArticle onClick={goToAddArticlePage}>+ Adicionar artigo</ButtonAddArticle>
                </DivButtonReporsitory>

                {(filteredArticles.length !== 0) ?

                    <BodyRepository>

                        {filteredArticles.map((article) => (
                            <ArticleLayout
                                key={article.article_id}
                                article_id={article.article_id}
                                nameArticle={article.article_name}
                            />
                        ))}

                    </BodyRepository>
                    :
                    <BodyRepository>

                        <TextNotArticles>Nenhum artigo encontrado.</TextNotArticles>

                    </BodyRepository>
                }
            </div>
            <GerenalFooter />
        </>
    )
}

export default Repository