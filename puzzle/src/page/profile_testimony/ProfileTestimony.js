import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, BodyTestimonyProfile } from "./style";

import GerenalFooter from "../../components/general_footer/GeneralFooter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import TestimonyLayout from "../../components/testimony_layout/TestimonyLayout";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";

import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"

function ProfileTestimony() {
    const userId = parseInt(localStorage.getItem('@Auth:user_id'), 10)

    // ----------- HOOKS -----------
    const [depositions, setDepositions] = useState([]);
    const [inputValue, setInputValue] = useState('');


    // ----------- DEPOIMENTOS PARA O USUÁRIO LOGADO -----------
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/depositions/profile/${userId}`)
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
    

    // ----------- PESQUISAR -----------
    const clearInput = () => {
        setInputValue('');
    };
    
    const filteredDepositions = depositions.filter((testimony) => 
    testimony.testimony_content.toLowerCase().includes(inputValue.toLowerCase())
    );
      
    return(
        <>
            <ScreenHeader titlePage={"Depoimentos para mim"}/>
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
                <BodyTestimonyProfile>
                    {filteredDepositions.map((testimony) => (
                        <TestimonyLayout
                            key={testimony.testimony_id}
                            testimonyId={testimony.testimony_id}
                            userIdValue={testimony.user_id}
                            nameContact={testimony.nome_comentou}
                            testimony={testimony.testimony_content}
                        />
                    ))}              
                </BodyTestimonyProfile>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default ProfileTestimony