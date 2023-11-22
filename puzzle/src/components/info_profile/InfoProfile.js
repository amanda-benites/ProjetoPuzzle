import { DivInfoProfile, H4InfoProfile } from "./style"

function InfoProfile(props) {
    return(
        <DivInfoProfile>
            <H4InfoProfile>{props.topicProfile}</H4InfoProfile>
            <p>{props.itemProfile}</p>
        </DivInfoProfile>

    )
}

export default InfoProfile