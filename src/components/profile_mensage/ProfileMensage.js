import { ContainerMensage, DivMensage } from "./style"


function ProfileMensage(props) {
    return(
        <ContainerMensage>
            <p style={{display: 'none'}}>{props.msgIdent}</p>
            <DivMensage>
                <p>{props.profileMsg}</p>
            </DivMensage>
            <p>{props.timeMsg}</p>
        </ContainerMensage>
    )
}

export default ProfileMensage