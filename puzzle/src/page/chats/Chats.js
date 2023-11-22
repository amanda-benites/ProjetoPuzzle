import { useNavigate } from "react-router-dom";
import ChatLayout from "../../components/chat_layout/ChatLayout"
import GerenalFooter from "../../components/general_footer/GeneralFooter"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"
import { ButtonBack, EffectChat, PopUp, PopUpOverlay } from "./style"

function Chats() {
    const showDevelopmentPopup = true;
    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    const chatValues = {
        chat1: ['Maurício Costa', 3, 1],
        chat2: ['Augusto Silva', 10, 0],
        chat3: ['Clara Machado', 0, 0]
    }
    
    let arrayValues = []

    for(let i = 0; i < Object.keys(chatValues).length; i++) {
        arrayValues.push(
            <ChatLayout
                key={`chat${i + 1}`}
                chatName={chatValues[`chat${i + 1}`][0]}
                valueDate={chatValues[`chat${i + 1}`][1]}
                valueMensages={chatValues[`chat${i + 1}`][2]}
            />
        );
    }

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
                <ScreenHeader titlePage={'Conversas'}/>
                <div>
                    {arrayValues}
                </div>
                <GerenalFooter idColor='Chat'/>
            </EffectChat>
        </>
    )
}

export default Chats