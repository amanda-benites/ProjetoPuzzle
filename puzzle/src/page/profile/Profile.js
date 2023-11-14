import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HeaderProfile from "../../components/header_profile/HeaderProfile"

import { ButtonSeeMore, ImgInputDiv, InputImgProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts } from "./style"

import imgExemp from "../../assets/user_img.svg"
import genericImg_user from "../../assets/genericImg_user.jpg"
import InfoProfile from "../../components/info_profile/InfoProfile"
import exemplePost from "../../assets/exemploImagem.svg"
import { useNavigate } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

function Profile() {

    const navigate = useNavigate()

    function goToPostsPage() {
        navigate("/profile-posts");
    }

    const topicIdent = {
        identName: 'Nome de usuário',
        identEmail: 'Email',
        identPosts: 'Postagens'
    }

    const [userData, setUserData] = useState('');
    
      // pega as informações do usuário baseadas no email
      useEffect(() => {
        // pega o email do localstorage e tira as aspas
        const userEmail = localStorage.getItem("@Auth:user").replace(/"/g, '');
        
        // função get para pegar as informações
        axios.get(`${api.defaults.baseURL}/user/information/${userEmail}`)
        .then(response => {
            const userDataFromServer = response.data; 
            setUserData(userDataFromServer.data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
        });
      }, []);
    
    return(
        <>
            <HeaderProfile/>
            <div>
                <ImgInputDiv>
                    {userData.img_profile === null ? <InputImgProfile background={genericImg_user} id="divInputFile">
                    </InputImgProfile> : <InputImgProfile background={imgExemp} id="divInputFile">
                    </InputImgProfile>}
                    <h3>Meu perfil</h3>
                </ImgInputDiv>
                <ProfileInfos>
                    <InfoProfile 
                        topicProfile={topicIdent.identName} 
                        itemProfile={userData.user_name}
                    />
                    <InfoProfile 
                        topicProfile={topicIdent.identEmail} 
                        itemProfile={userData.user_email}
                    />
                </ProfileInfos>
                <ProfilePosts>
                    <PostsProfileIdent>
                        <InfoProfile 
                            topicProfile={topicIdent.identPosts}
                        />
                        <ButtonSeeMore onClick={goToPostsPage}>
                            Ver mais
                        </ButtonSeeMore>
                    </PostsProfileIdent>
                    <PostsProfileDiv>
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 1" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 2" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 3" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 1" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 2" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 3" />
                    </PostsProfileDiv>
                </ProfilePosts>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default Profile