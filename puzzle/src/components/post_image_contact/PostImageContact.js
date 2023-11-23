import { useNavigate } from "react-router-dom"
import { ButtonImgContact, ImgPostContactDesign } from "./style"

function PostImageContact(props) {

    const navigate = useNavigate()

    function goToPost() {
        navigate(`/post-opened/${props.postIdValue}`)
    }

    return(
        <ButtonImgContact onClick={goToPost}>
            <ImgPostContactDesign src={props.postImageContact} alt="Imagem do post do contato"/>
        </ButtonImgContact>
    )
}

export default PostImageContact