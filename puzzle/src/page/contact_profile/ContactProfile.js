import GerenalFooter from "../../components/general_footer/GeneralFoter"

import { ButtonSeeMore, ImgContactProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts, ButtonUnfollow, ButtonTalkWith, ImgProfileDiv, DivButtonsActions, DivButtonFollow, ButtonFollow, ButtonSeeMoreDisable, MessageUnfollow } from "./style"

import genericImg_user from "../../assets/genericImg_user.jpg"
import InfoProfile from "../../components/info_profile/InfoProfile"
import exemplePost from "../../assets/exemploImagem.svg"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import HeaderContact from "../../components/header_contact/HeaderContact"
import axios from "axios"
import { api } from "../../services/api"

function ContactProfile() {
    const [contactData, setContactData] = useState('');
    const [followData, setFollowData] = useState('');

    const userIdLogin = parseInt(localStorage.getItem('@Auth:user_id'), 10)
    const param = useParams()
    const contactId = parseInt(param.userId, 10)


    const navigate = useNavigate()

    function goToPostsContactPage() {
        navigate("/contact-posts");
    }

    const topicIdent = {
        identEmail: 'Email',
        identPosts: 'Postagens'
    }
      
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/user/contact/${contactId}`)
        .then(response => {
            const contactDataFromServer = response.data; 
            setContactData(contactDataFromServer.data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do artigo:', error);
        });
    }, []);
    
    useEffect(() => {
        axios.get(`${api.defaults.baseURL}/follow/informations/contact/${contactId}`)
        .then(function (response) {
                const followInformations = response.data

                setFollowData(followInformations);
            })
            .catch(function (error) {
                console.log(error);
              });
    }, [contactId]);

    const handleFollow = async (e) => {

        const data = {
            userIdLogin, 
            contactId
        };

        try { 
            axios.post(`${api.defaults.baseURL}/follow/create`, data)
            .then(response => {
                const followDataFromServer = response.data.data;
                window.location.reload();
            })
            .catch(error => {
                console.log('Erro ao seguir usuário', error)
            })
        } catch (error) {
            console.log('Erro ao seguir usuário', error)
        }
    }

    const handleUnfollow = async (e) => {
        e.preventDefault();

        const data = {
            userIdLogin, 
            contactId
        };
    
        try { 
            axios.put(`${api.defaults.baseURL}/follow/unfollow`, data)
            .then(response => {
                const unfollowDataFromServer = response.data.data;
            })
            .catch(error => {
                console.log('Erro ao seguir usuário', error)
            })
            window.location.reload();
        } catch (error) {
            console.log('Erro ao seguir usuário', error);
        }
    }

    return(
        <>
            <HeaderContact
                followerId={contactData.user_id}
            />
            <div>
                <ImgProfileDiv>
                    <ImgContactProfile background={contactData.img_profile === null ? genericImg_user : contactData.img_profile}>
                    </ImgContactProfile>
                        <h3>{contactData.user_name}</h3>
                    {followData && followData.data.isFollowed ? (
                        <DivButtonsActions>
                                <ButtonUnfollow onClick={handleUnfollow}>Deixar de seguir</ButtonUnfollow>
                                <ButtonTalkWith>Conversar</ButtonTalkWith>
                        </DivButtonsActions>
                    ) : (
                        <DivButtonFollow>
                            <ButtonFollow onClick={handleFollow}>Seguir</ButtonFollow>
                        </DivButtonFollow>
                    )}
                </ImgProfileDiv>
                <ProfileInfos>
                    <InfoProfile 
                        topicProfile={topicIdent.identEmail} 
                        itemProfile={contactData.user_email}
                    />
                </ProfileInfos>
                {followData.isFollowed === 1 ? (
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
                            <MessageUnfollow>Siga userName para visualizar suas postagens</MessageUnfollow>
                    </PostsProfileDiv>
                </ProfilePosts>
                )}
            </div>
            <GerenalFooter/>
        </>
    )
}

export default ContactProfile