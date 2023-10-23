import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonDelete } from "./style"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

function ForgotPassword() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Esqueceu a senha?</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Voltar</ButtonCancel>
                <ButtonDelete>Enviar email</ButtonDelete>
            </DivButtonsExit>
        </>
    )}
}

export default ForgotPassword