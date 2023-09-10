import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonDelete } from "./style"

function Exit() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    function goToCoverPage() {
        navigate('/');
    }

    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Sair da conta</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Cancelar</ButtonCancel>
                <ButtonDelete onClick={goToCoverPage}>Concluir</ButtonDelete>
            </DivButtonsExit>
        </>
    )
}

export default Exit