import { ButtonImgProfile, PostImgProfileDesign } from "./style";


function PostImage(props) {
    return(
        <ButtonImgProfile>
            <PostImgProfileDesign src={props.postImageProfile} alt="Imagem do post"/>
        </ButtonImgProfile>
    )
}

export default PostImage