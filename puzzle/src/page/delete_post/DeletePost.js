import ScreenHeader from "../../components/sreen_header/ScreenHeader"
import { ButtonCancel, ButtonDelete, DivButtonsDelete, DivContentPostDelete, DivPostContainer } from "./style"

import imgExemple from "../../assets/exemploImagem.svg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

function DeletePost() {

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
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
    )}
}

export default DeletePost