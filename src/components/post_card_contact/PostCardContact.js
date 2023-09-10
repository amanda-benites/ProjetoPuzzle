import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton } from "./style"

import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"
import { useNavigate } from "react-router-dom"

function PostCardContact(props) {

    const navigate = useNavigate()

    function goToPostOpenedContact() {
        navigate("/post-opened-contact")
    }

    return(
        <DivPostContainer>
            <HeaderPost>
                <ImgHeader>
                    <img src={props.userImg} alt="Imagem de exemplo Maurício"/>
                </ImgHeader>
                <ProfileButton>
                    <ButtonIconsPost>
                        <p>{props.userName}</p>
                    </ButtonIconsPost>
                </ProfileButton>
            </HeaderPost>
            <BodyPost>
                <ImgPostContainer src={props.ImgContent} alt="Imagem de teste"/>
            </BodyPost>
            <FooterPost>
                <ButtonIconsPost>
                    <img src={likeImg} alt="Curtida"/>
                </ButtonIconsPost>
                {props.userName === "Maurício Costa" ? (
                    <ButtonIconsPost onClick={goToPostOpenedContact}>
                        <img src={commentsImg} alt="Comentários"/>
                    </ButtonIconsPost>
                ) : (
                    <ButtonIconsPost>
                        <img src={commentsImg} alt="Comentários"/>
                    </ButtonIconsPost>
                )}
            </FooterPost>
        </DivPostContainer>
    )
}

export default PostCardContact