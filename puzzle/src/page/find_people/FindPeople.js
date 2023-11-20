import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../services/api";
import GerenalFooter from "../../components/general_footer/GeneralFoter";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import { DivSearchContainerMain, DivSearchContainer, InputSearchContainer, SpanSearchContainer, MainFindPeople } from "./style";
import genericImg_user from "../../assets/genericImg_user.jpg";
import ContactLayout from "../../components/contact_layout/ContactLayout";
import iconSearch from "../../assets/search.svg";
import removeImg from "../../assets/remove.svg";

function FindPeople() {
    const images = 'http://localhost:8000/uploads/'

    const [inputValue, setInputValue] = useState('');
    const [users, setUsers] = useState([]);
    
    const clearInput = () => {
        setInputValue('');
    };
    
    useEffect(() => {
        const userId = localStorage.getItem("@Auth:user_id")
        api.get(`${api.defaults.baseURL}/user/all/${userId}`)
            .then(response => {
                const usersData = response.data.data;
                setUsers(usersData);
            })
            .catch(error => {
                console.log('Erro ao buscar usuários: ', error);
            });
    }, []);

    const filteredContacts = users.filter((contact) =>
        contact.user_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <>
            <ScreenHeader titlePage={"Encontrar pessoas"} />
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
                <MainFindPeople>
                    {filteredContacts.map((contact) => (
                        <ContactLayout
                            key={contact.user_id}
                            imgContact={contact.img_profile !== null ? images + contact.img_profile : genericImg_user}
                            nameContact={contact.user_name}
                            userId = {contact.user_id}
                        />
                    ))}
                </MainFindPeople>
            </div>
            <GerenalFooter />
        </>
    );
}

export default FindPeople;
