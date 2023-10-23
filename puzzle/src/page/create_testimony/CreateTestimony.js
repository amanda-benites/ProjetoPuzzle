import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgTestimony from "../../assets/testimony_img.svg"
import { ButtonTestimonyAdd, ButtonTestimonyBack, DivButtonsTestimony, DivContentTestimony, DivImgTestimony, H4TestimonyIdent, InputContentTestimony } from "./style"
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";


function CreateTestimony() {

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <>
            <ScreenHeader titlePage={`Escrever depoimento`}/>
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos"/>
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <InputContentTestimony type="text" placeholder="Escreva aqui"/>
            </DivContentTestimony>
            <DivButtonsTestimony>
                <ButtonTestimonyBack onClick={goToHomePage}>Voltar</ButtonTestimonyBack>
                <ButtonTestimonyAdd>Adicionar</ButtonTestimonyAdd>
            </DivButtonsTestimony>
        </>
    )}
}

export default CreateTestimony