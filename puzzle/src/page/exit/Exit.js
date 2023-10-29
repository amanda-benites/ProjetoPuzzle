import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"

function Exit() {
    const navigate = useNavigate();


    function goBack() {
        navigate(-1);
    }

    function signOut() {
        localStorage.clear();
        navigate('/auth')
    }

    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Sair da conta</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Voltar</ButtonCancel>
                <ButtonLogout onClick={signOut}>Sair</ButtonLogout>
            </DivButtonsExit>
        </>
    )
}

export default Exit