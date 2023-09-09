import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgUser, DropDownMenu, ItemsMenu, ImgThreePoints } from "./style"

import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostCard(props) {

    const navigate = useNavigate()

    function goToEditPostPage() {
        navigate("/edit-post");
    }

    function goToDeletePostPage() {
        navigate("/delete-post");
    }

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <DivPostContainer>
            <HeaderPost>
                <ImgHeader>
                    <ImgUser src={props.userImg} alt="Imagem de exemplo Usuário" />
                </ImgHeader>
                <ProfileButton>
                    <ButtonIconsPost>
                        <p>{props.userName}</p>
                    </ButtonIconsPost>
                </ProfileButton>
                <ThreePoints>
                    <ButtonIconsPost onClick={openMenu}>
                        <ImgThreePoints src={threePoints} alt="Imagem três pontos"/>
                    </ButtonIconsPost>
                        {isOpen && (
                            <DropDownMenu className="dropdown-menu">
                                <ItemsMenu onClick={goToEditPostPage}>Editar</ItemsMenu>
                                <ItemsMenu onClick={goToDeletePostPage}>Excluir</ItemsMenu>
                            </DropDownMenu>
                        )}
                </ThreePoints>
            </HeaderPost>
            <BodyPost>
                <ImgPostContainer src={props.ImgContent} alt="Imagem de teste" />
            </BodyPost>
            <FooterPost>
                <ButtonIconsPost>
                    <img src={likeImg} alt="Curtida" />
                </ButtonIconsPost>
                <ButtonIconsPost>
                    <img src={commentsImg} alt="Comentários" />
                </ButtonIconsPost>
            </FooterPost>
        </DivPostContainer>
    )
}

export default PostCard