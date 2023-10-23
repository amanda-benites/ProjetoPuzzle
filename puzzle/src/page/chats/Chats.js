import { useContext } from "react"
import ChatLayout from "../../components/chat_layout/ChatLayout"
import GerenalFooter from "../../components/general_footer/GeneralFoter"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"
import { AuthContext } from "../../context/AuthContext"
import { useAuthRedirect } from "../../hooks/useAuthRedirect"

function Chats() {

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

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <>
            <ScreenHeader titlePage={'Conversas'}/>
            <div>
                {arrayValues}
            </div>
            <GerenalFooter idColor='Chat'/>
        </>
    )}
}

export default Chats