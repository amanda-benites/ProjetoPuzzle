import { ContactButton, ContactImg, ContactLayoutContainer, ContactName, ImgContactContainer, NameContactText } from "./style";


function ContactLayout(props) {
    return(
        <ContactLayoutContainer>
            <ContactImg>
                <ImgContactContainer src={props.imgContact} alt="Imagem do contato"/>
            </ContactImg>
            <ContactName>
                <ContactButton>
                    <NameContactText>{props.nameContact}</NameContactText>
                </ContactButton>
            </ContactName>
        </ContactLayoutContainer>
    )
}

export default ContactLayout