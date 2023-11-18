import PostImageContact from "../../components/post_image_contact/PostImageContact"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgExemp from "../../assets/exemploImagem.svg"
import { BodyImgsContacts, DivPostsContactImgs, DivNotPosts, TextNotPosts } from "./style"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { api } from "../../services/api"

function ContactPosts() {
    const param = useParams()
    const contactId = parseInt(param.contactId, 10)

    const postValues = {
        post1: imgExemp,
        post2: imgExemp,
        post3: imgExemp,
        post4: imgExemp,
        post5: imgExemp,
        post6: imgExemp,
        post7: imgExemp,
        post8: imgExemp,
        post9: imgExemp,
        post10: imgExemp
    }

    let arrayValues = []

    for(let i = 0; i < Object.keys(postValues).length; i++) {
         arrayValues.push(
            <PostImageContact
                key={`post${i + 1}`}
                postImageContact={postValues[`post${i + 1}`]}
            />
        );
    }

    const images = 'http://localhost:8000/uploads/'
    const [postUserInfos, setPostUserInfos] = useState([]);

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