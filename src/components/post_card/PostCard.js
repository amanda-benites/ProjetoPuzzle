import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer } from "./style"

import exemploImagem from "../../assets/exemploImagem.svg"
import MauricioExemplo from "../../assets/MauricioExemplo.svg"
import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"

function PostCard() {
    return(
        <DivPostContainer>
            <HeaderPost>
                <img src={MauricioExemplo} alt="Imagem de exemplo Maurício"/>
                <ButtonIconsPost>

                    <p>Maurício Costa</p>
                </ButtonIconsPost>
            </HeaderPost>
            <BodyPost>
                <ImgPostContainer src={exemploImagem} alt="Imagem de teste"/>
            </BodyPost>
            <FooterPost>
                <ButtonIconsPost>
                    <img src={likeImg} alt="Curtida"/>
                </ButtonIconsPost>
                <ButtonIconsPost>
                    <img src={commentsImg} alt="Comentários"/>
                </ButtonIconsPost>
            </FooterPost>
        </DivPostContainer>
    )
}

export default PostCard