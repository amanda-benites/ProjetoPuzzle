import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgUser, DropDownMenu, ItemsMenu, ImgThreePoints, DivLegendContainer } from "./style"

import likeImg from "../../assets/like_img.svg"
import imgLiked from "../../assets/imgLiked.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userImg from "../../assets/user_img.svg"
import { api } from "../../services/api"

function PostCard({posts}) {
    const images = 'http://localhost:8000/uploads/'
    const [isOpen, setIsOpen] = useState(false);
    const [isLikedInfo, setIsLikedInfo] = useState([]);
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
  
    const fetchLikeStatus = async () => {
        try {
          const formData = {
            postId: posts.post_id,
            userId: userLoginId
          };
      
          const response = await api.post('/like/action', formData);
      
          const isLiked = response.data.data;
      
          if (isLiked.length > 0 && response.data.data[0].isLiked === 1) {
            // Post is already liked, update the like status to 0
            const unlikeResponse = await api.put('/like/delete', formData);            
            if (unlikeResponse.data.success) {
              setIsLikedInfo([]);
            } else {
              console.error("Failed to update like status:", unlikeResponse.data.message);
            } 
          } else {
            // Post is not liked, like the post
            // You may need to adjust the endpoint and data structure based on your server implementation
            const likeResponse = await api.post('/like/action', formData);
      
            if (likeResponse.data.success) {
              setIsLikedInfo(likeResponse.data.data);
            } else {
              console.error("Failed to like post:", likeResponse.data.message);
            }
          }
        } catch (err) {
          console.error(err);
        }
      };
      

    const likeStatus = async () => {
        try {
            const paramValues = {
                post_id: posts.post_id,
                user_id: userLoginId
            };
    
            const response = await api.post('/verifity/informations', paramValues);
        
            if (response.data.data) {
                const isLiked = response.data.data;
                setIsLikedInfo(isLiked);
            }
        } catch (error) {
            console.error('erro:', error);
        }
    };  

    useEffect(() => {
        // Chama a função de busca ao montar o componente
        likeStatus();
      }, [userLoginId, posts.post_id]); 
  
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
                            src={isLikedInfo.length > 0 ? imgLiked : likeImg} 
                            alt="Curtida"
                            onClick={() => fetchLikeStatus()}  />
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