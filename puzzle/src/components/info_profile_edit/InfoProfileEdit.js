import { DivInfoProfileEdit, H4InfoProfileEdit, InputProfileEdit } from "./style"

function InfoProfileEdit(props) {
    return(
        <DivInfoProfileEdit>
            <H4InfoProfileEdit>{props.topicProfile}</H4InfoProfileEdit>
            <InputProfileEdit placeholder={props.itemProfile}></InputProfileEdit>
        </DivInfoProfileEdit>

    )
}

export default InfoProfileEdit