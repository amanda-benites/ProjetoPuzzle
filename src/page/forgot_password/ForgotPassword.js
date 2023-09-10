import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonDelete } from "./style"

function ForgotPassword() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Esqueceu a senha?</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Cancelar</ButtonCancel>
                <ButtonDelete>Enviar email</ButtonDelete>
            </DivButtonsExit>
        </>
    )
}

export default ForgotPassword