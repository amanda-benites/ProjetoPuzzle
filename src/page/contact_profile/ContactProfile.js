import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HeaderProfile from "../../components/header_profile/HeaderProfile"

import { ButtonSeeMore, ImgContactProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts, ButtonUnfollow, ButtonTalkWith, ImgProfileDiv, DivButtonsActions, DivButtonFollow, ButtonFollow } from "./style"

import imgExemp from "../../assets/MauricioExemplo.svg"
import InfoProfile from "../../components/info_profile/InfoProfile"
import exemplePost from "../../assets/exemploImagem.svg"
import { useState } from "react"

function ContactProfile() {

    const topicIdent = {
        identEmail: 'Email',
        identPhone: 'Número de telefone',
        identPosts: 'Postagens'
    }
    const topicValues = {
        userName: 'Maurício Costa',
        userEmail: 'mauricio@teste.com',
        userPhone: '(51) 99999-0000'
    }

    const [isFollowing, setIsFollowing] = useState(true); // Estado para controlar se o usuário está seguindo ou não
      
    // Função para alternar entre seguir e deixar de seguir
    const toggleFollow = () => {
        setIsFollowing((prevState) => !prevState);
    };

    return(
        <>
            <HeaderProfile/>
            <div>
                <ImgProfileDiv>
                    <ImgContactProfile background={imgExemp}>
                    </ImgContactProfile>
                        <h3>{topicValues.userName}</h3>
                    {isFollowing ? (
                        <DivButtonsActions>
                                <ButtonUnfollow onClick={toggleFollow}>Deixar de seguir</ButtonUnfollow>
                                <ButtonTalkWith>Conversar</ButtonTalkWith>
                        </DivButtonsActions>
                    ) : (
                        <DivButtonFollow>
                            <ButtonFollow onClick={toggleFollow}>Seguir</ButtonFollow>
                        </DivButtonFollow>
                    )}
                </ImgProfileDiv>
                <ProfileInfos>
                    <InfoProfile 
                        topicProfile={topicIdent.identEmail} 
                        itemProfile={topicValues.userEmail}
                    />
                    <InfoProfile 
                        topicProfile={topicIdent.identPhone} 
                        itemProfile={topicValues.userPhone}
                    />
                </ProfileInfos>
                <ProfilePosts>
                    <PostsProfileIdent>
                        <InfoProfile 
                            topicProfile={topicIdent.identPosts}
                        />
                        <ButtonSeeMore>
                            Ver mais
                        </ButtonSeeMore>
                    </PostsProfileIdent>
                    <PostsProfileDiv>
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 1" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 2" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 3" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 4" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 5" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 6" />
                    </PostsProfileDiv>
                </ProfilePosts>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default ContactProfile