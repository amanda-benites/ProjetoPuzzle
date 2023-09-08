import { ButtonFooterContainer, FooterContainer, ImgAddContainer, ImgChatContainer, ImgContactsContainer } from "./style"

import imgContacts from "../../assets/imgContacts.svg"
import imgAdd from "../../assets/imgAdd.svg"
import imgChat from "../../assets/imgChat.svg"
import { useNavigate } from "react-router-dom"

function GerenalFooter() {
    const navigate = useNavigate()

    function goToContactsPage() {
        navigate("/contacts");
    }

    function goToCreatePostPage() {
        navigate("/create-post")
    }

    return(
        <FooterContainer>
            <ImgContactsContainer>
                <ButtonFooterContainer onClick={goToContactsPage}>
                    <img src={imgContacts} alt="Imagem representativa dos contatos"/>
                </ButtonFooterContainer>
            </ImgContactsContainer>
            <ImgAddContainer>
                <ButtonFooterContainer onClick={goToCreatePostPage}>
                    <img src={imgAdd} alt="Imagem representativa da adição de postagem"/>
                </ButtonFooterContainer>
            </ImgAddContainer>
            <ImgChatContainer>
                <ButtonFooterContainer>
                    <img src={imgChat} alt="Imagem representativa do chat"/>
                </ButtonFooterContainer>
            </ImgChatContainer>
        </FooterContainer>
    )
}

export default GerenalFooter