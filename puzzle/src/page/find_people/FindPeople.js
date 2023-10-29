
import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer } from "./style";

import MauricioExemplo from "../../assets/MauricioExemplo.svg"
import ImgPeople from "../../assets/img_people.svg"
import ContactLayout from "../../components/contact_layout/ContactLayout";
import { useState } from "react";


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"

function FindPeople() {

    const contactsValues = {
        contact1: [MauricioExemplo, 'Maurício Costa'],
        contact2: [MauricioExemplo, 'Clara Machado'],
        contact3: [MauricioExemplo, 'Augusto Silva'],
        contact4: [ImgPeople, 'Roberta Tavares']
    }

    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };

    const filteredContacts = Object.keys(contactsValues).filter((contact) =>
    contactsValues[contact][1].toLowerCase().includes(inputValue.toLowerCase())
    );

    return(
        <>
            <ScreenHeader titlePage={"Encontrar pessoas"}/>
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
                <div>
                {filteredContacts.map((contact) => (
                    <ContactLayout
                        key={contact}
                        imgContact={contactsValues[contact][0]}
                        nameContact={contactsValues[contact][1]}/>
                ))}              
                </div>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default FindPeople
