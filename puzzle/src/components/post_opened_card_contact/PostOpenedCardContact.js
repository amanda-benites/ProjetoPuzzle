import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ImgUser, DivComments, DivMainComments, DivEndComments } from "./style"

import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"
import { useNavigate } from "react-router-dom";
import CommentLayout from "../comments_layout/CommentsLayout";

function PostOpenedCardContact(props) {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    const postValues = {
        comment1: ['Clara Machado', 'Exemplo de comentário'],
        comment2: ['Augusto Silva', 'Exemplo de comentário'],
        comment3: ['Maurício Costa', 'Exemplo de comentário'],
        comment4: ['Clara Machado', 'Exemplo de comentário'],
        comment5: ['Augusto Silva', 'Exemplo de comentário um pouco mais longo que os outros.'],
        comment6: ['Maurício Costa', 'Exemplo de comentário'],
        comment7: ['Clara Machado', 'Exemplo de comentário'],
        comment8: ['Augusto Silva', 'Exemplo de comentário'],
        comment9: ['Maurício Costa', 'Exemplo de comentário']
    }
    
    let arrayValues = []

    for(let i = 0; i < Object.keys(postValues).length; i++) {
            arrayValues.push(
                <CommentLayout
                  key={`comment${i + 1}`}
                  nameContact={postValues[`comment${i + 1}`][0]}
                  comment={postValues[`comment${i + 1}`][1]}
                />
            );
        }

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
            </HeaderPost>
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
                    {arrayValues}
                </DivComments>
                <DivEndComments>

                </DivEndComments>
            </DivMainComments>
        </DivPostContainer>
    )
}

export default PostOpenedCardContact
