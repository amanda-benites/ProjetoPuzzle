import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

function DeleteAccount() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    function goToCoverPage() {
        navigate("/");
    }
  
    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Deletar conta permanentemente?</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Voltar</ButtonCancel>
                <ButtonLogout onClick={goToCoverPage}>Deletar</ButtonLogout>
            </DivButtonsExit>
        </>
    )}
}


export default DeleteAccount