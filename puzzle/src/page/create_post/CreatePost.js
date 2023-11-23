import { ButtonCancel, ButtonOk, DivButtonsContainer, DivInputFile, DivInputsContainer, InputFileContainer, InputLegendContainer, SpanInsertPost, ImgPost } from "./style";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function CreatePost() {
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [legend, setLegend] = useState('');

  const navigate = useNavigate()

  function goToHomePage() {
      navigate("/home");
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    console.log('image', image);
  }, [image]);

  useEffect(() => {
      console.log('-------------preview', preview);
  }, [preview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let formData = new FormData();
    formData.append('legend', legend);
    formData.append('userId', localStorage.getItem('@Auth:user_id'));
    formData.append('file', image);
        
    try {
      const response = await api.post('/post/create', formData);
      navigate('/home')
      
      console.log('Post criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar o post:', error);
    }
    
  };
  
  const handleImageClick = () => {
    // Ativar click no input que está oculto.
    document.getElementById('imageInput').click();        
  };
  
  return (
    <form>
      <ScreenHeader titlePage={"Criar Publicação"} />
      <DivInputsContainer>
        <SpanInsertPost>Inserir imagem</SpanInsertPost>
        <DivInputFile onClick={handleImageClick}>
          <input
            type="file"
            name="image"
            accept="image/*"
            id="imageInput"
            multiple={false}
            onChange={handleImageChange}
          />
          {preview && (
            <div>
              <ImgPost src={preview} alt="Imagem selecionada" />
            </div>
          )}
        </DivInputFile>
        <SpanInsertPost>Inserir legenda</SpanInsertPost>
        <InputLegendContainer type="text"
          value={legend}
          onChange={(e) => setLegend(e.target.value)}
        />
      </DivInputsContainer>
      <DivButtonsContainer>
        <ButtonCancel onClick={goToHomePage}>Cancelar</ButtonCancel>
        <ButtonOk onClick={handleSubmit}>Concluir</ButtonOk>
      </DivButtonsContainer>
    </form>
  )
}

export default CreatePost