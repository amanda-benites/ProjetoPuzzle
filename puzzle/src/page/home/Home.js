import { BodyHomeContainer, ButtonUserContainer, DivProfileAccess, FinalDiv, FinalText, MainHomeContainer, MyNameText, MyPicture, MyProfile, ImgMyPicture } from "./style"
import GerenalFooter from "../../components/general_footer/GeneralFooter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostCard from "../../components/post_card/PostCard"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

import axios from "axios"

import genericImg_user from "../../assets/genericImg_user.jpg"

function Home() {
    const images = 'http://localhost:8000/uploads/'

    // ----------- HOOKS -----------
    const [userData, setUserData] = useState('');
    const [posts, setPosts] = useState([]);


    // ----------- NAVIGATE -----------
    const navigate = useNavigate()

    function goToProfilePage() {
        navigate("/profile");
    }


    // ----------- INFORMAÇÕES DO USUÁRIO -----------
    useEffect(() => {
        const userId = parseInt(localStorage.getItem("@Auth:user_id"), 10);

        axios.get(`${api.defaults.baseURL}/user/information/${userId}`)
            .then(response => {
                const userDataFromServer = response.data;
                setUserData(userDataFromServer.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
            });
    }, []);


    // ----------- LISTA DE TODOS OS POSTS -----------
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.get('/post/all');
                setPosts(response.data);
            } catch (error) {
                console.error('Erro ao recuperar os posts:', error);
            }
        }

        fetchPosts();
    }, []);


    return (
        <BodyHomeContainer>
            <HomeHeader />
            <MainHomeContainer>
                <DivProfileAccess>
                    <MyPicture>
                        <ImgMyPicture src={userData.img_profile === null ? genericImg_user : images + userData.img_profile} alt="Imagem representativa do usuário" />
                    </MyPicture>
                    <MyProfile>
                        <ButtonUserContainer onClick={goToProfilePage}>Meu Perfil</ButtonUserContainer>
                        <MyNameText>{userData.user_name}</MyNameText>
                    </MyProfile>
                </DivProfileAccess>
                {posts.map((post) => {
                    return (
                        <>
                            <PostCard
                                posts={post}
                            />
                        </>
                    )
                })}
                <FinalDiv>
                    <FinalText>Fim das publicações</FinalText>
                </FinalDiv>
            </MainHomeContainer>
            <GerenalFooter />
        </BodyHomeContainer>
    )
}

export default Home