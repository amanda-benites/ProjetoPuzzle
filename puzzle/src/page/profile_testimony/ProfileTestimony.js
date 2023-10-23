import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import TestimonyLayout from "../../components/testimony_layout/TestimonyLayout";

import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, BodyTestimonyProfile } from "./style";

import { useContext, useState } from "react";


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

function ProfileTestimony() {
    const testimonyValues = {
        testimony1: ['Maurício Costa', '1 - Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura'],
        testimony2: ['Clara Machado', '2- Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura'],
        testimony3: ['Tânia Gonçalvez', '3 - Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura']
    }

    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };

    const filteredTestimony = Object.keys(testimonyValues).filter((testimony) =>
    testimonyValues[testimony][1].toLowerCase().includes(inputValue.toLowerCase())
    );
      
    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
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
                    {filteredTestimony.map((testimony) => (
                        <TestimonyLayout
                            key={testimony}
                            nameContact={testimonyValues[testimony][0]}
                            testimony={testimonyValues[testimony][1]}/>
                    ))}              
                </BodyTestimonyProfile>
            </div>
            <GerenalFooter/>
        </>
    )}
}

export default ProfileTestimony