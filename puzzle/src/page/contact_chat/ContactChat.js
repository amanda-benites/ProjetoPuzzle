import ContactMensage from "../../components/contact_mensage/ContactMensage";
import DateLine from "../../components/date_line/DateLine";
import FooterChat from "../../components/footer_chat/FooterChat";
import HeaderChat from "../../components/header_chat/HeaderChat";
import ProfileMensage from "../../components/profile_mensage/ProfileMensage";

function ContactChat() {
    const msgValues = {
        msg1: ['Você', 'Oi Maurício! Como vai?', '9:00 AM'],
        msg2: ['Maurício Costa', 'Boa tarde! Tudo bem!', '9:25 AM'],
        msg3: ['Você', 'Achei aquilo que você falou na última foto muito interessante!', '9:25 AM'],
        msg4: ['Maurício Costa', 'Posso te dar mais algumas dicas se quiser!' ,'10:00 AM'],
        msg5: ['Maurício Costa', 'Fico feliz aque gostou' ,'10:00 AM']
    }
    
    let arrayValues = []

    for(let i = 0; i < Object.keys(msgValues).length; i++) {
        if(msgValues[`msg${i + 1}`][0] === 'Você') {
            arrayValues.push(
                <ProfileMensage
                    key={`msg${i + 1}`}
                    msgIdent={msgValues[`msg${i + 1}`][0]}
                    profileMsg={msgValues[`msg${i + 1}`][1]}
                    timeMsg={msgValues[`msg${i + 1}`][2]}
                />
        )} else {
            arrayValues.push(
                <ContactMensage
                        key={`msg${i + 1}`}
                        msgIdent={msgValues[`msg${i + 1}`][0]}
                        profileMsg={msgValues[`msg${i + 1}`][1]}
                        timeMsg={msgValues[`msg${i + 1}`][2]}
                />
        )};
    }

    return(
        <>
            <HeaderChat titleChat={'Maurício Costa'}/>
            <div>
                <DateLine/>
                {arrayValues}
            </div>
            <FooterChat/>
        </>
    )
}

export default ContactChat