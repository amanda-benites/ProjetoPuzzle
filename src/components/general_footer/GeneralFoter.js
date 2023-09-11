import { ButtonFooterContainer, FooterContainer, ImgAddContainer, ImgChatContainer, ImgContactsContainer } from "./style"

import imgContacts from "../../assets/imgContacts.svg"
import imgContactsColored from "../../assets/contacts_colored.svg"
import imgAdd from "../../assets/imgAdd.svg"
import imgChat from "../../assets/imgChat.svg"
import imgChatColored from "../../assets/chat_colored.svg"
import { useNavigate } from "react-router-dom"

function GerenalFooter(props) {
    const navigate = useNavigate()

    function goToContactsPage() {
        navigate("/contacts");
    }

    function goToCreatePostPage() {
        navigate("/create-post")
    }

    function goToChatsPage() {
        navigate("/chats")
    }

    return(
        <FooterContainer id={props.idColor}>
            {props.idColor === 'Contacts' ? (
                <ImgContactsContainer>
                    <ButtonFooterContainer onClick={goToContactsPage}>
                        <img src={imgContactsColored} alt="Imagem representativa dos contatos colorida"/>
                    </ButtonFooterContainer>
                </ImgContactsContainer>
            ) : (
                <ImgContactsContainer>
                    <ButtonFooterContainer onClick={goToContactsPage}>
                        <img src={imgContacts} alt="Imagem representativa dos contatos"/>
                    </ButtonFooterContainer>
                </ImgContactsContainer>
            )}
            
            <ImgAddContainer>
                <ButtonFooterContainer onClick={goToCreatePostPage}>
                    <img src={imgAdd} alt="Imagem representativa da adição de postagem"/>
                </ButtonFooterContainer>
            </ImgAddContainer>

            {props.idColor === 'Chat' ? (
                <ImgChatContainer>
                    <ButtonFooterContainer onClick={goToChatsPage}>
                        <img src={imgChatColored} alt="Imagem representativa do chat"/>
                    </ButtonFooterContainer>
                </ImgChatContainer>
            ) : (
                <ImgChatContainer>
                    <ButtonFooterContainer onClick={goToChatsPage}>
                        <img src={imgChat} alt="Imagem representativa do chat"/>
                    </ButtonFooterContainer>
                </ImgChatContainer>
            )}
        </FooterContainer>
    )
}

export default GerenalFooter