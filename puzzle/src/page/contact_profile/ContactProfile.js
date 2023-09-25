import GerenalFooter from "../../components/general_footer/GeneralFoter"

import { ButtonSeeMore, ImgContactProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts, ButtonUnfollow, ButtonTalkWith, ImgProfileDiv, DivButtonsActions, DivButtonFollow, ButtonFollow, ButtonSeeMoreDisable, MessageUnfollow } from "./style"

import imgExemp from "../../assets/MauricioExemplo.svg"
import InfoProfile from "../../components/info_profile/InfoProfile"
import exemplePost from "../../assets/exemploImagem.svg"
import { useState } from "react"
import { useNavigate } from "react-router"
import HeaderContact from "../../components/header_contact/HeaderContact"

function ContactProfile() {

    const navigate = useNavigate()

    function goToPostsContactPage() {
        navigate("/contact-posts");
    }

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

    const [isFollowing, setIsFollowing] = useState(true);
      
    const toggleFollow = () => {
        setIsFollowing((prevState) => !prevState);
    };

    return(
        <>
            <HeaderContact/>
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
                {isFollowing === true ? (
                <ProfilePosts>
                    <PostsProfileIdent>
                        <InfoProfile 
                            topicProfile={topicIdent.identPosts}
                        />
                        <ButtonSeeMore onClick={goToPostsContactPage}>
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
                ) : (
                    <ProfilePosts>
                    <PostsProfileIdent>
                        <InfoProfile 
                            topicProfile={topicIdent.identPosts}
                        />
                        <ButtonSeeMoreDisable disabled>
                            Ver mais
                        </ButtonSeeMoreDisable>
                    </PostsProfileIdent>
                    <PostsProfileDiv>
                            <MessageUnfollow>Siga {topicValues.userName} para visualizar suas postagens</MessageUnfollow>
                    </PostsProfileDiv>
                </ProfilePosts>
                )}
            </div>
            <GerenalFooter/>
        </>
    )
}

export default ContactProfile