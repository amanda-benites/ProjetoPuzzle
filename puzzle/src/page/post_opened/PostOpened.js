import GerenalFooter from "../../components/general_footer/GeneralFooter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostOpenedCard from "../../components/post_opened_card/PostOpenedCard"
import { BodyHomeContainer, DivAddComment, DivFooterPostOpened, InputAddComment, MainHomeContainer, SendMensage } from "./style"

import { useParams } from 'react-router-dom';

import genericImg_user from "../../assets/genericImg_user.jpg"
import send from "../../assets/send_mensage.svg"
import { api } from "../../services/api";
import { useEffect, useState } from "react";


function PostOpened() {
    const images = 'http://localhost:8000/uploads/'
    const param = useParams()
    const postId = parseInt(param.post_id, 10)
    const userLoginId = parseInt(localStorage.getItem("@Auth:user_id"), 10)

    const [isLikedInfo, setIsLikedInfo] = useState([]);
    const [postInformations, setPostInformations] = useState('');
    const [commentContent, setCommentConent] = useState('');  

    const likeStatus = async () => {
        try {
            const paramValues = {
                post_id: postInformations.post_id,
                user_id: userLoginId
            };
    
            const response = await api.post('/verifity/informations', paramValues);
        
            if (response.data.data) {
                const isLiked = response.data.data;
                setIsLikedInfo(isLiked);
            }
        } catch (error) {
            console.error('erro:', error);
        }
    };  

    useEffect(() => {
        // Chama a função de busca ao montar o componente
        likeStatus();
      }, [userLoginId, postInformations.post_id]); 
  

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.get(`/post/informations/${postId}`); 
                setPostInformations(response.data[0]);                 
            } catch (error) {
                console.error('Erro ao recuperar as ifotmações do post:', error);
            }
        }

        fetchPosts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userId = parseInt(localStorage.getItem('@Auth:user_id'))
        const data = {
          user_id: userId,
          post_id: postId,
          comment_content: commentContent
        }
        try{
            const response = await api.post("/comments/create", data);
            console.log('Comentário criado com sucesso:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar o comentário:', error);
        }
    };

    return(
        <BodyHomeContainer>    
            <HomeHeader/>
            <MainHomeContainer>
                <PostOpenedCard 
                    userId={postInformations.user_id}
                    postId={postInformations.post_id}
                    userImg={postInformations.img_profile === null ? genericImg_user : images + postInformations.img_profile}
                    userName={postInformations.user_name}
                    ImgContent={images + postInformations.img_post}
                    isLikedInfoValue={isLikedInfo}/>
            </MainHomeContainer>
            <DivFooterPostOpened>
                <DivAddComment>
                    <InputAddComment 
                        type="text" 
                        placeholder="Escreva aqui"
                        value={commentContent} 
                        onChange={(e) => setCommentConent(e.target.value)}/>
                    <SendMensage onClick={handleSubmit}>
                        <img src={send} alt="Ícone de enviar mensagem"/>
                    </SendMensage>
                </DivAddComment>
            </DivFooterPostOpened>
            <GerenalFooter/>
        </BodyHomeContainer>
    )
}

export default PostOpened