import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostCard from "../../components/post_card/PostCard"
import { BodyHomeContainer, ButtonUserContainer, DivProfileAccess, FinalDiv, FinalText, MainHomeContainer, MyNameText, MyPicture, MyProfile } from "./style"

import { useNavigate } from "react-router-dom"
import PostCardContact from "../../components/post_card_contact/PostCardContact"
import { useEffect, useState } from "react"
import userImg from "../../assets/user_img.svg"

import { api } from "../../services/api"

function Home() {

    const navigate = useNavigate()

    function goToProfilePage() {
        navigate("/profile");
    }

    const [userName, setUserName] = useState("");

    useEffect(() => {
      // Acesse o user_name diretamente do localStorage
      const storedUserName = localStorage.getItem("@Auth:user_name");
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }, []);

        // Estado para armazenar os posts
        const [posts, setPosts] = useState([]); 

        useEffect(() => {
            async function fetchPosts() {
                try {
                    const response = await api.get('/post/all'); 
                    setPosts(response.data); 
                    console.log(posts);
                } catch (error) {
                    console.error('Erro ao recuperar os posts:', error);
                }
            }
    
            fetchPosts();
        }, []);
    

    return(
        // <>
        //     {posts.map((post) => {
        //         return (
        //             <>
        //                 <p>{ post.user_id }</p>
        //             </>
        //         )
        //         })
        //     }
        // </>
        <BodyHomeContainer>    
            <HomeHeader/>
            <MainHomeContainer>
                <DivProfileAccess>
                    <MyPicture>
                        <img src={userImg} alt="Imagem representativa do usuário"/>
                    </MyPicture>
                    <MyProfile>
                        <ButtonUserContainer onClick={goToProfilePage}>Meu Perfil</ButtonUserContainer>
                        <MyNameText>{userName}</MyNameText>
                    </MyProfile>
                </DivProfileAccess>
                <div>
                    {posts.map((post) => {   
                        return (
                            <>
                                {/* <div>{post.legend_post}</div>                      */}
                                <PostCard
                                    posts={post}
                                />
                            </>
                        )
                    })}
                </div>
                <FinalDiv>
                    <FinalText>Fim das publicações</FinalText>
                </FinalDiv>
            </MainHomeContainer>
            <GerenalFooter/>
        </BodyHomeContainer>
    )
}

export default Home