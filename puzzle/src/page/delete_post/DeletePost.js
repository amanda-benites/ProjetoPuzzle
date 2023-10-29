import ScreenHeader from "../../components/sreen_header/ScreenHeader"
import { ButtonCancel, ButtonDelete, DivButtonsDelete, DivContentPostDelete, DivPostContainer } from "./style"

import imgExemple from "../../assets/exemploImagem.svg"
import { useNavigate } from "react-router-dom";

function DeletePost() {

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    return(
        <>
            <ScreenHeader titlePage={"Excluir Publicação"}/>
            <DivContentPostDelete>
                <DivPostContainer>
                    <img src={imgExemple} alt="Imagem de exemplo"/>
                </DivPostContainer>             
            </DivContentPostDelete>
            <DivButtonsDelete>
                <ButtonCancel onClick={goToHomePage}>Cancelar</ButtonCancel>
                <ButtonDelete>Excluir</ButtonDelete>
            </DivButtonsDelete>
        </>
    )
}

export default DeletePost