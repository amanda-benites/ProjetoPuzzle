import { ButtonCancel, ButtonDelete, DivButtonsDelete, DivContentPostDelete, DivPostContainer, ImgPostContainer } from "./style"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import axios from "axios";

function DeletePost() {
    const images = 'http://localhost:8000/uploads/'

    const param = useParams()
    const post_id = parseInt(param.postId, 10)

    // ----------- HOOK -----------
    const [postImage, setPostImage] = useState('')


    // ----------- NAVIGATE -----------
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }


    // ----------- PEGA A IMAGEM DO POST -----------
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


    // ----------- DELETA O POST -----------
    const deleteUserPost = async () => {
        try {
            const response = await api.delete(`delete/post/values/${post_id}`)
            goToHomePage()
        } catch (error) {
            console.log('Erro ao excluir usuário: ', error)
        }
    }

    return (
        <>
            <ScreenHeader titlePage={"Excluir Publicação"} />
            <DivContentPostDelete>
                <DivPostContainer>
                    <ImgPostContainer src={images + postImage} alt="Imagem de exemplo" />
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