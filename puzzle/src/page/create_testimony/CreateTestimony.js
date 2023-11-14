import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgTestimony from "../../assets/testimony_img.svg"
import { ButtonTestimonyAdd, ButtonTestimonyBack, DivButtonsTestimony, DivContentTestimony, DivImgTestimony, H4TestimonyIdent, InputContentTestimony } from "./style"
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { useState } from "react";

function CreateTestimony() {
    const [testimony_content, setTestimonyContent] = useState("");
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    const param = useParams()
    const followerId = param.followerId
    const userId = localStorage.getItem('@Auth:user_id')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            userId, 
            followerId,
            testimony_content
        };
  
        try {
          await api.post("/depositions/create", data);
          console.log("Depoimento criado com sucesso!");

        } catch (error) {
          console.error("Erro ao criar depoimento:", error);
        }
      };

    return(
        <>
            <ScreenHeader titlePage={`Escrever depoimento`}/>
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos"/>
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <InputContentTestimony 
                    type="text" 
                    placeholder="Escreva aqui"
                    value={testimony_content}
                    onChange={(e) => setTestimonyContent(e.target.value)}
                    required/>
            </DivContentTestimony>
            <DivButtonsTestimony>
                <ButtonTestimonyBack onClick={goToHomePage}>Voltar</ButtonTestimonyBack>
                <ButtonTestimonyAdd onClick={handleSubmit}>Adicionar</ButtonTestimonyAdd>
            </DivButtonsTestimony>
        </>
    )
}

export default CreateTestimony