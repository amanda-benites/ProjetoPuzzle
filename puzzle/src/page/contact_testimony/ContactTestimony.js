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
    const [inputValue, setInputValue] = useState('');
    const param = useParams()
    const followerId = param.followerId
    const navigate = useNavigate()

    function goToCreateTestimonyPage() {
        navigate(`/create-testimony/${followerId}`);
    }

    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/depositions/find/${followerId}`)
            .then(function (response) {
                const sortedDepositions = response.data.data.sort((a, b) => {
                    const dateA = new Date(a.testimony_date);
                    const dateB = new Date(b.testimony_date);
                    return dateB - dateA;
                });

                setDepositions(sortedDepositions);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    
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
                        key={testimony.testimony_id}
                        testimonyId={testimony.testimony_id}
                        userIdValue={testimony.user_id}
                        nameContact={testimony.nome_comentou}
                        testimony={testimony.testimony_content}
                    />
                ))}
                </BodyTestimony>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default ContactTestimony