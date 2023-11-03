import { useNavigate } from "react-router";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import { ButtonCancel, ButtonOk, DivButtonsContainer, DivInputFile, DivInputsContainer, InputFileContainer, InputLegendContainer, SpanInsertPost } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";


function CreatePost() {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  const navigate = useNavigate()

  function goToHomePage() {
      navigate("/home");
  }


  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {

  //     const reader = new FileReader();

  //     reader.onload = function (e) {
  //       const fileUrl = e.target.result;
  //       const divInputFile = document.getElementById("divInputFile");
  //       if (divInputFile) {
  //         divInputFile.style.backgroundImage = `url(${fileUrl})`;
  //         divInputFile.style.backgroundSize = "cover";
  //         divInputFile.style.backgroundPosition = "center";
  //       }
  //     };

  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  const handleSubmit = async (e) => {
    // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ação futuras.
    e.preventDefault();

    //Pega o valor do userId para enviar para o back
    const userId = parseInt(localStorage.getItem('@Auth: user_id'))

    try {
        const response = await axios.post(`${api.defaults.baseURL}/create_post`, {
          image: image,
          content: content,
          userId: userId
        });

        console.log('Post criado com sucesso:', response.data)
    } catch (error) {
        console.error('Erro ao criar o post: ', error)
    }
  }

  // Definir imagem padrão de início.
  useEffect(() => {
    // URL da imagem incial
    const initialImageUrl = selectedImage2
    setImage(initialImageUrl)
  }, []);


  const handleImageClick = () => {
    // Ativar click no input que está oculto
    document.getElementById('imageInput').click();
  }

  const handleImageChange = (e) => {
    // Extrai o primeiro arquivo selecionado pelo usuário.
    const file = e.target.files[0];

    if(file) {
      // Instância do objeto FileReader, que é usada para ler os dados do arquivo selecionado
      const reader = new FileReader();

      // Quando a leitura do arquivo for concluída, um evento (chamado event) será passado e conterá os dados da imagem
      reader.onload = (event) => {
        setImage(event.target.result);
      }

      // A leitura do arquivo/imagem selecionada é iniciada como uma URL de dados
      reader.readAsDataURL(file)
    }
  };

    return(
        <form>
          <ScreenHeader titlePage={"Criar Publicação"}/>  
          <DivInputsContainer>
                <SpanInsertPost>Inserir imagem</SpanInsertPost>
                <DivInputFile id="divInputFile" onClick={handleImageClick}> 
                  <input 
                    type="file"
                    accept="image/*"
                    id="imageInput"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  {image && (
                    <div>
                      <img src={image} alt="Imagem selecionada"/>
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