import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgUser, DropDownMenu, ItemsMenu, ImgThreePoints, DivLegendContainer } from "./style"

import likeImg from "../../assets/like_img.svg"
import imgLiked from "../../assets/imgLiked.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userImg from "../../assets/user_img.svg"
import { api } from "../../services/api"
import axios from "axios"

function PostCard({posts}) {
    const images = 'http://localhost:8000/uploads/'
    const [isOpen, setIsOpen] = useState(false);
    const [isLikedTeste, setIsLikedTeste] = useState();
    const userLoginId = parseInt(localStorage.getItem("@Auth:user_id"), 10)

    const navigate = useNavigate()


    const openMenu = () => {
      setIsOpen(!isOpen);
    };

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

    // const changeLikeState = () => {
    //     setIsLiked(!isLiked)
    // }
  
    const fetchLikeStatus = async () => {
      try {
        const formData = {
            postId: posts.post_id,
            userId: userLoginId
        };
  
        const response = await api.post('/like/action', formData);
  
        const isLiked = response;

        console.log('#################33', isLiked)


        // setIsLikedTeste(!!isEnabled);
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
        const postId = posts.postId
        axios.get(`${api.defaults.baseURL}/like/informations/${postId}`)
        .then(function (response) {
                const likeInformations = response.data
                
                setIsLikedTeste(likeInformations);
                console.log('%%%%%%%%%%%%%%55 likeInformations :', likeInformations);
            })
            .catch(function (error) {
                console.log(error);
              });
    }, [posts.postId]);
  
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
                            src={likeImg} 
                            alt="Curtida"
                            onClick={fetchLikeStatus} />
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