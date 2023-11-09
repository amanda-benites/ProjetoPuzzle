import { useNavigate } from "react-router";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import { ButtonCancel, ButtonOk, DivButtonsContainer, DivInputFile, DivInputsContainer, InputFileContainer, InputLegendContainer, SpanInsertPost } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../services/api";


function CreatePost() {
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [content, setContent] = useState('');

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
      console.log('preview', preview);
  }, [preview]);

  const handleSubmit = async (e) => {
    // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
    e.preventDefault();
    console.log(image)
    
    let formData = new FormData();
    formData.append('content', content);
    formData.append('userId', localStorage.getItem('@Auth:id'));
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

    return(
        <form>
          <ScreenHeader titlePage={"Criar Publicação"}/>  
          <DivInputsContainer>
                <SpanInsertPost>Inserir imagem</SpanInsertPost>
                <DivInputFile id="divInputFile" onClick={handleImageClick}> 
                  <input 
                    type="file"
                    name="image"
                    accept="image/*"
                    id="imageInput"
                    multiple={false}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  {preview && (
                    <div>
                      <img src={preview} alt="Imagem selecionada"/>
                    </div>
                  )}
                  <InputFileContainer
                      onClick={() => {
                        const imageInput = document.getElementById('imageInput');
                        if (imageInput) {
                          imageInput.click();
                        }
                      }}>
                        Coloque a imagem aqui
                      </InputFileContainer>
                </DivInputFile>
                <SpanInsertPost>Inserir legenda</SpanInsertPost>
                <InputLegendContainer type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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