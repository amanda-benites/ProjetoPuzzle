import { useNavigate } from "react-router-dom";
import { ButtonImgProfile, PostImgProfileDesign } from "./style";


function PostImage(props) {

    const navigate = useNavigate()

    function goToPost() {
        navigate(`/post-opened/${props.postIdValue}`)
    }

    return(
        <ButtonImgProfile onClick={goToPost}>
            <PostImgProfileDesign src={props.postImageProfile} alt="Imagem do post"/>
        </ButtonImgProfile>
    )
}

export default PostImage