import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgTestimony from "../../assets/testimony_img.svg"
import { ButtonTestimonyAdd, ButtonTestimonyBack, DivButtonsTestimony, DivContentTestimony, DivImgTestimony, H4TestimonyIdent, InputContentTestimony } from "./style"
import { useNavigate } from "react-router";

function EditTestimony() {

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    return(
        <>
            <ScreenHeader titlePage={`Editar depoimento`}/>
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos"/>
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <InputContentTestimony type="text" placeholder="3 - Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura"/>
            </DivContentTestimony>
            <DivButtonsTestimony>
                <ButtonTestimonyBack onClick={goToHomePage}>Voltar</ButtonTestimonyBack>
                <ButtonTestimonyAdd>Adicionar</ButtonTestimonyAdd>
            </DivButtonsTestimony>
        </>
    )
}

export default EditTestimony