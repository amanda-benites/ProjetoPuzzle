import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgUser, DropDownMenu, ItemsMenu, ImgThreePoints, DivComments, DivMainComments, DivEndComments } from "./style"

import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentLayout from "../comments_layout/CommentsLayout";
import { api } from "../../services/api";

function PostOpenedCard(props) {
    const userIdLogin = localStorage.getItem("@Auth:user_id")
    const [comments, setComments ] = useState([]);

    const navigate = useNavigate()

    function goToEditPostPage() {
        navigate("/edit-post");
    }

    function goToDeletePostPage() {
        navigate("/delete-post");
    }

    function goBack() {
        navigate(-1);
    }

    
    useEffect(() => {
        const fetchData = async () => {

        try{
            const response = await api.get(`/comments/list/${props.postId}`);
            const commentList = response.data.data;
            setComments(commentList);
        } catch (err) {
            console.error(err);
        }};
        fetchData();
    }, [props.postId]);


    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <DivPostContainer>
            {props.userId == userIdLogin ? 
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
            :
                <HeaderPost>
                    <ImgHeader>
                        <ImgUser src={props.userImg} alt="Imagem de exemplo Usuário" />
                    </ImgHeader>
                    <ProfileButton>
                        <ButtonIconsPost>
                            <p>{props.userName}</p>
                        </ButtonIconsPost>
                    </ProfileButton>
                </HeaderPost>
            }
            <BodyPost>
                <ImgPostContainer src={props.ImgContent} alt="Imagem de teste" />
            </BodyPost>
            <FooterPost>
                <ButtonIconsPost>
                    <img src={likeImg} alt="Curtida" />
                </ButtonIconsPost>
                <ButtonIconsPost onClick={goBack}>
                    <img src={commentsImg} alt="Comentários" />
                </ButtonIconsPost>
            </FooterPost>
            <DivMainComments>
                <DivComments>
                    {comments.map((comment) => (
                        <CommentLayout
                            key={comment.comment_id}
                            nameContact={comment.UserName}
                            comment={comment.comment_content}
                        />
                    ))}
                </DivComments>
                <DivEndComments>

                </DivEndComments>
            </DivMainComments>
        </DivPostContainer>
    )
}

export default PostOpenedCard
