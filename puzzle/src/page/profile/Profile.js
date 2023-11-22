import { ButtonSeeMore, ImgInputDiv, InputImgProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts } from "./style"

import GerenalFooter from "../../components/general_footer/GeneralFooter"
import HeaderProfile from "../../components/header_profile/HeaderProfile"
import InfoProfile from "../../components/info_profile/InfoProfile"

import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

import axios from "axios"

import genericImg_user from "../../assets/genericImg_user.jpg"

function Profile() {
    const images = 'http://localhost:8000/uploads/'

    // ----------- HOOKS -----------
    const [userData, setUserData] = useState({});
    const [imgProfile, setImgProfile] = useState('');
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

    // ----------- INFORMAÇÕES DO USUÁRIO LOGADO -----------
    useEffect(() => {
        const userId = parseInt(localStorage.getItem("@Auth:user_id"), 10);

        axios.get(`${api.defaults.baseURL}/user/information/${userId}`)
            .then(response => {
                const userDataFromServer = response.data;
                setUserData(userDataFromServer.data);
                setImgProfile(images + userDataFromServer.data.img_profile)
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
            });
    }, []);


    // ----------- SEIS PRIMEIROS POSTS DO USUÁRIO -----------
    useEffect(() => {
        const userIdLogin = parseInt(localStorage.getItem("@Auth:user_id"), 10)
        async function fetchPosts() {
            try {
                const response = await api.get(`post/six/user/${userIdLogin}`);
                setPostUserInfos(response.data);


            } catch (error) {
                console.error('Erro ao recuperar as ifotmações do post:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <>
            <HeaderProfile />
            <div>
                <ImgInputDiv>
                    {userData.img_profile === null ? <InputImgProfile background={genericImg_user} id="divInputFile">
                    </InputImgProfile> : <InputImgProfile background={imgProfile} id="divInputFile">
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
            <GerenalFooter />
        </>
    )
}

export default Profile