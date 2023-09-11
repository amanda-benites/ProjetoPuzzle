import { ContainerMensage, DivMensage, TimeTextMsg } from "./style"


function ProfileMensage(props) {
    return(
        <ContainerMensage>
            <p style={{display: 'none'}}>{props.msgIdent}</p>
            <DivMensage>
                <p>{props.profileMsg}</p>
            </DivMensage>
            <TimeTextMsg>{props.timeMsg}</TimeTextMsg>
        </ContainerMensage>
    )
}

export default ProfileMensage