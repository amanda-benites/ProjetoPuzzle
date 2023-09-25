import { ContainerMensage, DivImgContactMsg, DivMensage, TimeTextContact } from "./style"

import imgExemple from "../../assets/MauricioExemplo.svg"

function ContactMensage(props) {
    return(
        <ContainerMensage>
            <DivImgContactMsg>
                <img src={imgExemple} alt="Imagem de exemplo do contato"/>
            </DivImgContactMsg>
            <div>
                <p>{props.msgIdent}</p>
                <DivMensage>
                    <p>{props.profileMsg}</p>
                </DivMensage>
                <TimeTextContact>{props.timeMsg}</TimeTextContact>
            </div>
        </ContainerMensage>
    )
}

export default ContactMensage
