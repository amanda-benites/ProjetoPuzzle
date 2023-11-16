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
    const images = 'http://localhost:8000/uploads/'
    const [userData, setUserData] = useState('');
    const [postUserInfos, setPostUserInfos] = useState([]);

    const navigate = useNavigate()

    function goToPostsPage() {
        navigate("/profile-posts");
    }

    const topicIdent = {
        identName: 'Nome de usuário',
        identEmail: 'Email',
        identPosts: 'Postagens'
    }
    
      useEffect(() => {
        const userEmail = localStorage.getItem("@Auth:user").replace(/"/g, '');
        
        axios.get(`${api.defaults.baseURL}/user/information/${userEmail}`)
        .then(response => {
            const userDataFromServer = response.data; 
            setUserData(userDataFromServer.data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
        });
      }, []);

      
      useEffect(() => {
        const userIdLogin = parseInt(localStorage.getItem("@Auth:user_id"), 10)
        async function fetchPosts() {
            try {
                const response = await api.get(`/post/user/${userIdLogin}`); 
                setPostUserInfos(response.data); 
                console.log('------- response.data :', response.data);
                
            } catch (error) {
                console.error('Erro ao recuperar as ifotmações do post:', error);
            }
        }
    
        fetchPosts();
    }, []);

    console.log('yyyyyyyyyyyyyyyyy', postUserInfos)
    
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
                    {postUserInfos.map(postUser => (
                        <PostsProfile key={postUser.post_id} src={images + postUser.img_post} alt="Exemplo de imagem 1" />
                    ))}
                    </PostsProfileDiv>
                </ProfilePosts>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default Profile