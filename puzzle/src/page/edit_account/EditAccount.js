import GerenalFooter from "../../components/general_footer/GeneralFooter"

import { ImgInputDiv, InputImgProfile, ProfileInfos, EditButtonSaveDiv, ButtonSaveEdit, DivInfoProfileEdit, H4InfoProfileEdit, InputProfileEdit } from "./style"

import HeaderProfileEdit from "../../components/header_profile_edit/HeaderProfileEdit"
import genericImg_user from "../../assets/genericImg_user.jpg"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function EditAccount() {
    const userId = parseInt(localStorage.getItem("@Auth:user_id"), 10)
    const navigate = useNavigate()

    const topicIdent = {
        identName: 'Nome de usuário',
        identEmail: 'Email',
        identPassword: 'Senha',
        identPosts: 'Postagens'
    }

    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [userEditName, setEditUserName] = useState('');
    const [userEditEmail, setEditUserEmail] = useState('');
    const [userEditPassword, setEditUserPassword] = useState('');
    
    const handleInputChange = (e) => {
        setEditUserName(e.target.value);
      };
  
      const handleInputChange2 = (e) => {
        setEditUserEmail(e.target.value);
      };
  
    useEffect(() => {
        // Define a imagem inicial.
        const initialImageUrl = genericImg_user;
        setPreview(initialImageUrl);
    }, []); 
    
    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    
    useEffect(() => {
        console.log('image', image);
    }, [image]);
    
    useEffect(() => {
        console.log('preview', preview);
    }, [preview]);

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };

    useEffect(() => {

        const fetchData = async () => {                 
            axios.get(`${api.defaults.baseURL}/user/information/${userId}`)
            .then(response => {
                const userDataFromServer = response.data.data;
                setEditUserName(userDataFromServer.user_name);
                setEditUserEmail(userDataFromServer.user_email);
                setEditUserPassword(userDataFromServer.user_password);
                setImage(userDataFromServer.img_profile)
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
            });
        };

        fetchData();
      }, []); 

      const handleSubmit = async (e) => {
        e.preventDefault();
                            
        const userId = parseInt(localStorage.getItem('@Auth:user_id'));
                      
        let formData = new FormData();
        formData.append('userId', userId)
        formData.append('userEditName', userEditName)
        formData.append('userEditEmail', userEditEmail)
        formData.append('file', image)
    
        try{
            const response = await api.post("/user/update", formData);
            console.log('Usuário editado com sucesso:', response.data);
            navigate('/profile')
        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };


    return(
        <>
            <HeaderProfileEdit/>
            <form>
                <ImgInputDiv onClick={handleImageClick}>
                    <InputImgProfile background={preview && (preview)} id="divInputFile">
                        <input 
                            type="file"
                            name="image"
                            accept="image/*"
                            id="imageInput"
                            multiple={false}
                            onChange={handleImageChange}
                        />
                    </InputImgProfile>
                    <h3>Editar meu perfil</h3>
                </ImgInputDiv>
                <ProfileInfos>
                    <DivInfoProfileEdit>
                        <H4InfoProfileEdit>{topicIdent.identName}</H4InfoProfileEdit>
                            <InputProfileEdit 
                                placeholder='1'
                                value={userEditName}
                                onChange={handleInputChange}
                            />
                    </DivInfoProfileEdit>
                    <DivInfoProfileEdit>
                        <H4InfoProfileEdit>{topicIdent.identEmail}</H4InfoProfileEdit>
                            <InputProfileEdit 
                                placeholder='2'
                                value={userEditEmail}
                                onChange={handleInputChange2}/>
                    </DivInfoProfileEdit>
                    <DivInfoProfileEdit>
                        <H4InfoProfileEdit>{topicIdent.identPassword}</H4InfoProfileEdit>
                            <InputProfileEdit 
                                placeholder='3'
                                value={userEditPassword}/>
                    </DivInfoProfileEdit>
                </ProfileInfos>
                <EditButtonSaveDiv>
                    <ButtonSaveEdit onClick={handleSubmit}>Salvar alterações</ButtonSaveEdit>
                </EditButtonSaveDiv>
            </form>
            <GerenalFooter/>
        </>
    )
}

export default EditAccount