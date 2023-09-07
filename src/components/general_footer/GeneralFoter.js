import { ButtonFooterContainer, FooterContainer, ImgAddContainer, ImgChatContainer, ImgContactsContainer } from "./style"

import imgContacts from "../../assets/imgContacts.svg"
import imgAdd from "../../assets/imgAdd.svg"
import imgChat from "../../assets/imgChat.svg"

function GerenalFooter() {
    return(
        <FooterContainer>
            <ImgContactsContainer>
                <ButtonFooterContainer>
                    <img src={imgContacts} alt="Imagem representativa dos contatos"/>
                </ButtonFooterContainer>
            </ImgContactsContainer>
            <ImgAddContainer>
                <ButtonFooterContainer>
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