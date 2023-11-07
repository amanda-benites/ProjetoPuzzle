
import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer } from "./style";

import genericImg_user from "../../assets/genericImg_user.jpg"
import ContactLayout from "../../components/contact_layout/ContactLayout";
import { useEffect, useState } from "react";


import iconSearch from "../../assets/search.svg"
import removeImg from "../../assets/remove.svg"
import axios from "axios";
import { api } from "../../services/api";

function FindPeople() {
    const [inputValue, setInputValue] = useState('');
    const [users, setUsers] = useState({});

    const clearInput = () => {
        setInputValue('');
    };

    const filteredContacts = Object.keys(users).filter((contact) =>
    users[contact][1].toLowerCase().includes(inputValue.toLowerCase())
    );

    
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/users`)
            .then(function (response) {
                const usersData = response.data.data;
                const usersObject = {};
                usersData.forEach(user => {
                    usersObject[user.id] = user;
                });
                setUsers(usersObject);
            })
            .catch(function (error) {
                console.log(error);
                alert('Erro ao carregar informações dos usuários.');
            });
    }, []);

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
                            key={contact.user_id}
                            imgContact={contact.img_profile !== null ? contact.img_profile : genericImg_user}
                            nameContact={contact.user_name}
                        />
                    ))}    
                </div>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default FindPeople
