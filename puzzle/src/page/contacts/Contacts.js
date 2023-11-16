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

function Contacts() {
    const [followData, setFollowData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const clearInput = () => {
        setInputValue('');
    };

    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/follow/all`)
        .then(function (response) {
                const followedPeople = response.data.data

                setFollowData(followedPeople);
            })
            .catch(function (error) {
                console.log(error);
              });
    }, []);


    console.log('aaaaaaaaaaa', followData)
    const filteredContacts = followData.filter((follow) =>
        follow.user_name.toLowerCase().includes(inputValue.toLowerCase())
    );
    return(
        <>
            <ScreenHeader titlePage={"Meus Contatos"}/>
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
                    {Array.isArray(filteredContacts) ? (
                        filteredContacts.map((contact) => (
                            <ContactLayout
                                userId={contact.follower_id}
                                imgContact={contact.img_profile || genericImg_user}
                                nameContact={contact.user_name}
                            />
                        ))
                    ) : (
                        <p>Nenhum dado disponível ou erro na requisição da API.</p>
                    )} 
                </div>
            </div>
            <GerenalFooter idColor='Contacts'/>
        </>
    )
}

export default Contacts