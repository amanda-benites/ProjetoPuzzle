import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"
import useAuth from "../../hooks/useAuth";

function Exit() {
    const {signOut} = useAuth();
    const navigate = useNavigate();


    function goBack() {
        navigate(-1);
    }

    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Sair da conta</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Voltar</ButtonCancel>
                <ButtonLogout onClick={() => [signOut, navigate("/")]}>Sair</ButtonLogout>
            </DivButtonsExit>
        </>
    )
}

export default Exit