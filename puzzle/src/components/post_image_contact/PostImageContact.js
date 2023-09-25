import { ButtonImgContact, ImgPostContactDesign } from "./style"

function PostImageContact(props) {
    return(
        <ButtonImgContact>
            <ImgPostContactDesign src={props.postImageContact} alt="Imagem do post do contato"/>
        </ButtonImgContact>
    )
}

export default PostImageContact