import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgThreePoints } from "./style"

import exemploImagem from "../../assets/exemploImagem.svg"
import MauricioExemplo from "../../assets/MauricioExemplo.svg"
import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"

function PostCard() {
    return(
        <DivPostContainer>
            <HeaderPost>
                <ImgHeader>
                    <img src={MauricioExemplo} alt="Imagem de exemplo Maurício"/>
                </ImgHeader>
                <ProfileButton>
                    <ButtonIconsPost>
                        <p>Maurício Costa</p>
                    </ButtonIconsPost>
                </ProfileButton>
                <ThreePoints>
                    <ButtonIconsPost onClick={() => {}} >
                        <ImgThreePoints src={threePoints} alt="Imagem de três pontos"/>
                    </ButtonIconsPost>
                </ThreePoints>
                <div>
                    <button></button>
                    <button></button>
                </div>
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