import { ButtonChatContact, ChatLayoutContainer, DivContactImg, DivContactName, DivDateChat, DivInfosChat, DivNumberMensages, DivValueMensage, ImgContact, ValueDateLayout, ValueMensagesLayout } from "./style"

import imgMarcelo from "../../assets/MauricioExemplo.svg"
import { useNavigate } from "react-router-dom";

function ChatLayout(props) {

    const navigate = useNavigate()

    function goToChatContactPage() {
        navigate("/contact-chat");
    }

    return(
        <ChatLayoutContainer>
            <DivContactImg>
                <ImgContact src={imgMarcelo} alt="Imagem de exemplo"/>
            </DivContactImg>
            <DivContactName>
                {props.chatName === 'Maurício Costa' ? (
                    <ButtonChatContact onClick={goToChatContactPage}>
                        {props.chatName}
                    </ButtonChatContact>
                ) : (
                    <ButtonChatContact>
                        {props.chatName}
                    </ButtonChatContact>
                )}
            </DivContactName>
            <DivInfosChat>
                <DivDateChat>
                    {props.valueDate === 0 ? (
                        <ValueDateLayout>Agora</ValueDateLayout>
                    ) : (
                        <ValueDateLayout>{props.valueDate} min atrás</ValueDateLayout>
                    )}
                </DivDateChat>
                <DivNumberMensages>
                    {props.valueMensages === 0 ? (
                        <DivValueMensage style={{display: 'none'}}>
                        </DivValueMensage>
                    ) : (
                        <DivValueMensage>
                            <ValueMensagesLayout>{props.valueMensages}</ValueMensagesLayout>
                        </DivValueMensage>
                    )}
                </DivNumberMensages>
            </DivInfosChat>
        </ChatLayoutContainer>
    )
}

export default ChatLayout