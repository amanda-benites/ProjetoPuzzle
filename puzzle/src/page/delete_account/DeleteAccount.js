import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"

function DeleteAccount() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    function goToCoverPage() {
        navigate("/");
    }
  
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
    )
}


export default DeleteAccount