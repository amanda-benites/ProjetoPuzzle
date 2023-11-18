import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import TestimonyLayout from "../../components/testimony_layout/TestimonyLayout";

import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, BodyTestimonyProfile } from "./style";

import { useEffect, useState } from "react";


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import axios from "axios";
import { api } from "../../services/api";

function ProfileTestimony() {
    const [depositions, setDepositions] = useState([]);
    const userId = parseInt(localStorage.getItem('@Auth:user_id'), 10)

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
    


    const [inputValue, setInputValue] = useState('');

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