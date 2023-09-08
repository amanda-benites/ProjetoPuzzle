import { useNavigate } from "react-router";
import ScreenHeader from "../../components/sreen_header/ScreenHeader";
import { ButtonCancel, ButtonOk, DivButtonsContainer, DivInputFile, DivInputsContainer, InputFileContainer, InputLegendContainer, SpanInsertPost } from "./style";


function CreatePost() {

  const navigate = useNavigate()

  function goToHomePage() {
      navigate("/home");
  }

  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  };

  
    return(
        <>
          <ScreenHeader titlePage={"Criar Publicação"}/>  
          <DivInputsContainer>
                <SpanInsertPost>Inserir imagem</SpanInsertPost>
                <DivInputFile>
                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                    <InputFileContainer onClick={() => document.getElementById('fileInput').click()}>Coloque a imagem aqui</InputFileContainer>
                </DivInputFile>
                <SpanInsertPost>Inserir legenda</SpanInsertPost>
                <InputLegendContainer type="text"/>
          </DivInputsContainer>
          <DivButtonsContainer>
            <ButtonCancel onClick={goToHomePage}>Cancelar</ButtonCancel>
            <ButtonOk>Concluir</ButtonOk>
          </DivButtonsContainer>
        </>
    )
}

export default CreatePost