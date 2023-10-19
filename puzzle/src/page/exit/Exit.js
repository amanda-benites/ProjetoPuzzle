import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"

function Exit() {
    const navigate = useNavigate();


    function goBack() {
        navigate(-1);
    }

    function exitBut() {
        localStorage.clear();
        navigate("/")
    }

    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Sair da conta</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Voltar</ButtonCancel>
                <ButtonLogout onClick={exitBut}>Sair</ButtonLogout>
            </DivButtonsExit>
        </>
    )
}

export default Exit