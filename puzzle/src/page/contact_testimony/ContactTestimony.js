import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import TestimonyLayout from "../../components/testimony_layout/TestimonyLayout";

import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, BodyTestimony, DivButtonTestimony, ButtonAddTestimony } from "./style";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import { useNavigate } from "react-router";
import { api } from "../../services/api";
import axios from "axios";

function ContactTestimony() {
    const [depositions, setDepositions] = useState([]);
    const param = useParams()
    const followerId = param.followerId
    console.log('---------------->> followerId :', followerId);

    const navigate = useNavigate()

    function goToCreateTestimonyPage() {
        navigate("/create-testimony");
    }

    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/depositions/find/${followerId}`)
        .then(function (response) {
            console.log('response.data.data',  response)
                const sortedDepositions = response.data.depositions.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA;
                });

                setDepositions(sortedDepositions);
            })
            .catch(function (error) {
                console.log(error);
              });
    }, []);


    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };
    
    const filteredDepositions = depositions.filter((testimony) => 
    testimony.testimony_content.toLowerCase().includes(inputValue.toLowerCase())
  );

    return(
        <>
            <ScreenHeader titlePage={"Depoimentos"}/>
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
                <DivButtonTestimony>
                    <ButtonAddTestimony onClick={goToCreateTestimonyPage}>+ Adicionar depoimento</ButtonAddTestimony>
                </DivButtonTestimony>
                <BodyTestimony>
                    {filteredDepositions.map((testimony) => (
                        <TestimonyLayout
                            key={testimony.d.testimony_id}
                            nameContact={testimony.u.nome_comentou}
                            testimony={testimony.d.testimony_content}/>
                    ))}              
                </BodyTestimony>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default ContactTestimony