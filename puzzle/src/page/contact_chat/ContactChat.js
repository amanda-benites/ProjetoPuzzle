import { ButtonBack, EffectChat, PopUp, PopUpOverlay } from "./style";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../services/api";

import axios from "axios";

import DateLine from "../../components/date_line/DateLine";
import FooterChat from "../../components/footer_chat/FooterChat";
import HeaderChat from "../../components/header_chat/HeaderChat";
import genericImg_user from "../../assets/genericImg_user.jpg"

function ContactChat() {
    const images = 'http://localhost:8000/uploads/'
    
    const param = useParams()
    const contactIdValue = parseInt(param.contactId, 10)
    
    const showDevelopmentPopup = true;
    
    // ----------- HOOK -----------
    const [contactData, setContactData] = useState('');
    
    
    // ----------- NAVIGATE -----------
    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/user/contact/${contactIdValue}`)
        .then(response => {
            const contactDataFromServer = response.data; 
            setContactData(contactDataFromServer.data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do artigo:', error);
        });
    }, []);

    return(
        <>
        {showDevelopmentPopup && (
                <PopUpOverlay>
                    <PopUp>
                        
                        <p>Em desenvolvimento</p>
                        <ButtonBack onClick={goBack}>Voltar</ButtonBack>
                    </PopUp>
                </PopUpOverlay>
            )}
        <EffectChat>
            <HeaderChat 
                imgUser={contactData.img_profile === null ? genericImg_user : images + contactData.img_profile}
                titleChat={contactData.user_name}/>
            <div>
                <DateLine/>
            </div>
            <FooterChat/>
        </EffectChat>
        </>
    )
}

export default ContactChat