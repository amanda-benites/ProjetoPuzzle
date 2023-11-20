import ScreenHeader from "../../components/sreen_header/ScreenHeader"
import { ButtonCancel, ButtonDelete, DivButtonsDelete, DivContentPostDelete, DivPostContainer, ImgPostContainer } from "./style"

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import axios from "axios";
import { useEffect, useState } from "react";

function DeletePost() {
    const images = 'http://localhost:8000/uploads/'
    const param = useParams()
    const post_id = parseInt(param.postId, 10)
    const [postImage, setPostImage] = useState('')

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    useEffect(() => {        
        axios.get(`${api.defaults.baseURL}/post/image/${post_id}`)
        .then(response => {
            const userImageFromServer = response.data[0].img_post; 
            setPostImage(userImageFromServer);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
        });
    }, []);

    const deleteUserPost = async () => {
        try {
            const response = await api.delete(`delete/post/values/${post_id}`)
            goToHomePage()
        } catch (error) {
            console.log('Erro ao excluir usuário: ', error)
        }
    }

    return(
        <>
            <ScreenHeader titlePage={"Excluir Publicação"}/>
            <DivContentPostDelete>
                <DivPostContainer>
                    <ImgPostContainer src={images + postImage} alt="Imagem de exemplo"/>
                </DivPostContainer>             
            </DivContentPostDelete>
            <DivButtonsDelete>
                <ButtonCancel onClick={goToHomePage}>Cancelar</ButtonCancel>
                <ButtonDelete onClick={deleteUserPost}>Excluir</ButtonDelete>
            </DivButtonsDelete>
        </>
    )
}

export default DeletePost