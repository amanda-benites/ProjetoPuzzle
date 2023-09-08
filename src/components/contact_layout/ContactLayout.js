import { useNavigate } from "react-router";
import { ContactButton, ContactImg, ContactLayoutContainer, ContactName, ImgContactContainer, NameContactText } from "./style";


function ContactLayout(props) {

    const navigate = useNavigate()

    function goToContactProfilePage() {
        navigate("/contact-profile");
    }

    return(
        <ContactLayoutContainer>
            <ContactImg>
                <ImgContactContainer src={props.imgContact} alt="Imagem do contato"/>
            </ContactImg>
            <ContactName>
                {props.nameContact === 'Maurício Costa' ? (
                    <ContactButton onClick={goToContactProfilePage}>
                        <NameContactText>{props.nameContact}</NameContactText>
                    </ContactButton>
                ) : (
                    <ContactButton>
                        <NameContactText>{props.nameContact}</NameContactText>
                    </ContactButton>
                )
                }
            </ContactName>
        </ContactLayoutContainer>
    )
}

export default ContactLayout