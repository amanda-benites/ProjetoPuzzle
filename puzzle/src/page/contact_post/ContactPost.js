import { BodyImgsContacts, DivPostsContactImgs, DivNotPosts, TextNotPosts } from "./style"

import PostImageContact from "../../components/post_image_contact/PostImageContact"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { api } from "../../services/api"

function ContactPosts() {
    const param = useParams()
    const contactId = parseInt(param.contactId, 10)

    const images = 'http://localhost:8000/uploads/'


    // ----------- HOOK -----------
    const [postUserInfos, setPostUserInfos] = useState([]);


    // ----------- LISTAGEM DE POSTS DO CONTATO -----------
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.get(`/post/user/${contactId}`); 
                setPostUserInfos(response.data); 
                
            } catch (error) {
                console.error('Erro ao recuperar as ifotmações do post:', error);
            }
        }
    
        fetchPosts();
    }, []);

    return(
        <BodyImgsContacts>
            <ScreenHeader titlePage={`Publicações`}/>
            <DivPostsContactImgs>
                {postUserInfos.length > 0 ?
                        postUserInfos.map(postUser => (
                            <PostImageContact key={postUser.post_id} postImageContact={images + postUser.img_post} alt="Exemplo de imagem 1" />
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

export default ContactPosts