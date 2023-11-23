import { ButtonCancel, ButtonOk, DivButtonsContainer, DivInputFile, DivInputsContainer, InputFileContainer, InputLegendContainer, SpanInsertPost } from "./style";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";

function EditPost() {
  const images = 'http://localhost:8000/uploads/'

  const param = useParams()
  const post_id = parseInt(param.postId, 10)


  // ----------- HOOKS -----------
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [editLegend, setEditLegend] = useState('');
  const [postInformations, setPostInformations] = useState('')
  const [initialImageUrl, setInitialImageUrl] = useState('');

  // ----------- NAVIGATE -----------
  const navigate = useNavigate()

  function goToHomePage() {
    navigate("/home");
  }


  // ----------- USEEFFECTS -----------
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`/post/informations/${post_id}`);
        setPostInformations(response.data[0]);
        setEditLegend(response.data[0].legend_post || '');
      } catch (error) {
        console.error('Erro ao recuperar as informações do post:', error);
      }
    }

    fetchPosts();
  }, [post_id]);

  useEffect(() => {
    const initialImageUrl = postInformations.img_post;
    if (initialImageUrl) {
      setPreview(images + initialImageUrl);
    } else {
      setPreview(initialImageUrl);
    }
  }, [postInformations]);

  useEffect(() => {
    const initialImageUrl = images + postInformations.img_post;
    if (initialImageUrl) {
      setPreview(initialImageUrl);
    }
  }, [postInformations]);

  // ----------- EDIÇÃO DO POST -----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('postLegend', editLegend)
    formData.append('file', image)
    formData.append('postId', post_id)

    try {
      const response = await api.post("/post/update", formData);
      console.log('Post editado com sucesso:', response.data);
      navigate('/home')
    } catch (error) {
      console.error('Erro ao criar o post:', error);
    }
  };


  const handleInputChange = (e) => {
    setEditLegend(e.target.value);
  };

  function handleImageChange(e) {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);
      setPreview(URL.createObjectURL(selectedImage));  // Correção aqui
    } else {
      setPreview(initialImageUrl);
    }
  }

  useEffect(() => {
    console.log('image', image);
  }, [image]);

  useEffect(() => {
    console.log('preview', preview);
  }, [preview]);

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <form>
      <ScreenHeader titlePage={"Editar Publicação"} />
      <DivInputsContainer>
        <SpanInsertPost>Alterar imagem</SpanInsertPost>
        <DivInputFile onClick={handleImageClick} id="divInputFile" style={{ backgroundImage: preview ? `url(${preview})` : 'none' }}>
          <input
            type="file"
            id="imageInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <InputFileContainer
            onClick={() => {
              const fileInput = document.getElementById('imageInput');
              if (fileInput) {
                fileInput.click();
              }
            }}>
            Coloque a imagem aqui
          </InputFileContainer>
        </DivInputFile>
        <SpanInsertPost>Alterar legenda</SpanInsertPost>
        <InputLegendContainer
          type="text"
          value={editLegend}
          onChange={handleInputChange} />
      </DivInputsContainer>
      <DivButtonsContainer>
        <ButtonCancel onClick={goToHomePage}>Cancelar</ButtonCancel>
        <ButtonOk onClick={handleSubmit}>Concluir</ButtonOk>
      </DivButtonsContainer>
    </form>
  )
}

export default EditPost