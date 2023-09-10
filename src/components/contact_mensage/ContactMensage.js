import { ContainerMensage, DivImgContactMsg, DivMensage } from "./style"

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
                <p>{props.timeMsg}</p>
            </div>
        </ContainerMensage>
    )
}

export default ContactMensage
