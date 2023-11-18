import PostImage from "../../components/post_image/PostImage"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgExemp from "../../assets/exemploImagem.svg"
import { BodyImgsContacts, DivNotPosts, DivPostsContactImgs, TextNotPosts } from "./style"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

function ProfilePosts() {
    const images = 'http://localhost:8000/uploads/'
    const [postUserInfos, setPostUserInfos] = useState([]);

    useEffect(() => {
        const userIdLogin = parseInt(localStorage.getItem("@Auth:user_id"), 10)
        async function fetchPosts() {
            try {
                const response = await api.get(`/post/user/${userIdLogin}`); 
                setPostUserInfos(response.data); 
                
            } catch (error) {
                console.error('Erro ao recuperar as ifotmações do post:', error);
            }
        }
    
        fetchPosts();
    }, []);

    return(
        <BodyImgsContacts>
            <ScreenHeader titlePage={`Minhas publicações`}/>
            <DivPostsContactImgs>
                {postUserInfos.length > 0 ?
                    postUserInfos.map(postUser => (
                        <PostImage key={postUser.post_id} postImageProfile={images + postUser.img_post} alt="Exemplo de imagem 1" />
                    ))
                : 
                    <DivNotPosts>
                        <TextNotPosts>Nenhuma postagem realizada.</TextNotPosts>
                    </DivNotPosts>
                }
            </DivPostsContactImgs>
        </BodyImgsContacts>
    )
}

export default ProfilePosts