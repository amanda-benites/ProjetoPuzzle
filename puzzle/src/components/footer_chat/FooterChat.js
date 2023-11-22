import { ButtonSend, DivInputContainer, FooterChatContainer, ImgSendMensage, InputChatContainer } from "./style"

import imgSend from "../../assets/send_mensage.svg"

function FooterChat() {
    return(
        <FooterChatContainer>
            <DivInputContainer>
                <InputChatContainer type='text' placeholder="Escreva sua mensagem"/>
                <ButtonSend>
                    <ImgSendMensage src={imgSend} alt="Ícone de enviar mensagem"/>
                </ButtonSend>
            </DivInputContainer>
        </FooterChatContainer>
    )
}

export default FooterChat