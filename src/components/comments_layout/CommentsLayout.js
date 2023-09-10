import { CommentLayoutContainer } from "./style";

function CommentLayout(props) {

    return(
        <CommentLayoutContainer>
            <p><b>{props.nameContact}:</b> {props.comment}</p>
        </CommentLayoutContainer>
    )
}

export default CommentLayout
