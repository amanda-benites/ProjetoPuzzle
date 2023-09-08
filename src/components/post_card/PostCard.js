import { DivPostContainer, HeaderPost, BodyPost, FooterPost, ButtonIconsPost, ImgPostContainer, ImgHeader, ProfileButton, ThreePoints, ImgThreePoints } from "./style"

import likeImg from "../../assets/like_img.svg"
import commentsImg from "../../assets/comments_post.svg"
import threePoints from "../../assets/three-points.svg"

function PostCard(props) {
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
                <ThreePoints>
                    <ButtonIconsPost onClick={() => {}} >
                        <ImgThreePoints src={threePoints} alt="Imagem de três pontos"/>
                    </ButtonIconsPost>
                </ThreePoints>
            </HeaderPost>
            <BodyPost>
                <ImgPostContainer src={props.ImgContent} alt="Imagem de teste"/>
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