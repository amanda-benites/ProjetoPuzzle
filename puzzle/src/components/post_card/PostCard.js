import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgUser, DropDownMenu, ItemsMenu, ImgThreePoints, DivLegendContainer } from "./style"

import likeImg from "../../assets/like_img.svg"
import imgLiked from "../../assets/imgLiked.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import userImg from "../../assets/user_img.svg"

function PostCard({posts}) {
    const images = 'http://localhost:8000/uploads/'
    const userLoginId = localStorage.getItem("@Auth:user_id")

    const navigate = useNavigate()
    console.log(posts)
    function goToEditPostPage() {
        navigate("/edit-post");
    }

    function goToDeletePostPage() {
        navigate("/delete-post");
    }

    function goToPostOpened() {
        navigate(`/post-opened/${posts.post_id}`)
    }

    const [isLiked, setIsLiked] = useState(false);

    const changeLikeState = () => {
        setIsLiked(!isLiked)
    }


    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
      setIsOpen(!isOpen);
    };

    console.log('aaaaaaaaaaaaaaa', posts)

        return (
            <DivPostContainer key={posts.post_id}>
                {posts.user_id == userLoginId ?
                    <HeaderPost>
                        <ImgHeader>
                            <ImgUser src={userImg} alt="Imagem de exemplo Usuário" />
                        </ImgHeader>
                        <ProfileButton>
                            <ButtonIconsPost>
                                <p>Você</p>
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
                :
                    <HeaderPost>
                        <ImgHeader>
                            <ImgUser src={userImg} alt="Imagem de exemplo Usuário" />
                        </ImgHeader>
                        <ProfileButton>
                            <ButtonIconsPost>
                                <p>{posts.user_name}</p>
                            </ButtonIconsPost>
                        </ProfileButton>
                    </HeaderPost>
                }
                <BodyPost>
                    <ImgPostContainer src={images + posts.img_post} alt="Imagem de teste" />
                </BodyPost>
                <FooterPost>
                    <ButtonIconsPost>
                        <img 
                            src={isLiked ? imgLiked : likeImg} 
                            alt="Curtida"
                            onClick={changeLikeState} />
                    </ButtonIconsPost>
                    <ButtonIconsPost onClick={goToPostOpened}>
                        <img src={commentsImg} alt="Comentários" />
                    </ButtonIconsPost>
                </FooterPost>
                <DivLegendContainer>
                    <p>{posts.legend_post}</p>
                </DivLegendContainer>
            </DivPostContainer>
        )
    //})}
}

export default PostCard