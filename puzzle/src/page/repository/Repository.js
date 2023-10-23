import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";

import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, DivButtonReporsitory, BodyRepository, ButtonAddArticle } from "./style";

import { useContext, useState } from "react";


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import { useNavigate } from "react-router";
import ArticleLayout from "../../components/article_layout/ArticleLayout";
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

function Repository() {

    const navigate = useNavigate()

    function goToAddArticlePage() {
        navigate("/add-article");
    }

    const articleValues = {
        article1: ['Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura'],
        article2: ['Crianças e jovens autistas: impacto na dinâmica familiar e pessoal de seus pais'],
        article3: ['As vivências de mães de jovens autistas']
    }

    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };

    const filteredArticle = Object.keys(articleValues).filter((article) =>
    articleValues[article][0].toLowerCase().includes(inputValue.toLowerCase())
    );

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
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
                    {filteredArticle.map((article) => (
                        <ArticleLayout
                            key={article}
                            nameArticle={articleValues[article][0]}/>
                    ))}              
                </BodyRepository>
            </div>
            <GerenalFooter/>
        </>
    )}
}

export default Repository