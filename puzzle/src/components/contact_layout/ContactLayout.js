import { ContactButton, ContactImg, ContactLayoutContainer, ContactName, ImgContactContainer, NameContactText } from "./style";

import { useNavigate } from "react-router";


function ContactLayout(props) {

    const navigate = useNavigate()

    function goToContactProfilePage() {
        navigate(`/contact-profile/${props.userId}`);
    }

    return(
        <ContactLayoutContainer>
            <ContactImg>
                <ImgContactContainer src={props.imgContact} alt="Imagem do contato"/>
            </ContactImg>
            <ContactName>
                    <ContactButton onClick={goToContactProfilePage}>
                        <NameContactText>{props.nameContact}</NameContactText>
                    </ContactButton>
            </ContactName>
        </ContactLayoutContainer>
    )
}

export default ContactLayout