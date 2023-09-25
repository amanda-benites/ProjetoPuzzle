import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton } from "./style"

import likeImg from "../../assets/like_img.svg"
import imgLiked from "../../assets/imgLiked.svg"
import commentsImg from "../../assets/comments_post.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function PostCardContact(props) {

    const navigate = useNavigate()

    function goToPostOpenedContact() {
        navigate("/post-opened-contact")
    }

    const [isLiked, setIsLiked] = useState(false);

    const changeLikeState = () => {
        setIsLiked(!isLiked)
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
                    <img 
                        src={isLiked ? imgLiked : likeImg} 
                        alt="Curtida"
                        onClick={changeLikeState} />
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