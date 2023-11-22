import axios from "axios";
import ContactMensage from "../../components/contact_mensage/ContactMensage";
import DateLine from "../../components/date_line/DateLine";
import FooterChat from "../../components/footer_chat/FooterChat";
import HeaderChat from "../../components/header_chat/HeaderChat";
import ProfileMensage from "../../components/profile_mensage/ProfileMensage";
import genericImg_user from "../../assets/genericImg_user.jpg"

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonBack, EffectChat, PopUp, PopUpOverlay } from "./style";

function ContactChat() {
    const images = 'http://localhost:8000/uploads/'

    const [contactData, setContactData] = useState('');
    const showDevelopmentPopup = true;

    const param = useParams()
    const contactIdValue = parseInt(param.contactId, 10)
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