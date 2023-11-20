import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"
import { api } from "../../services/api";

function DeleteAccount() {
    const user_id = parseInt(localStorage.getItem("@Auth:user_id"), 10)
    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    function goToCoverPage() {
        navigate("/");
    }

    const deleteUserAccount = async () => {
        try {
            const response = await api.delete(`delete/values/${user_id}`)
            localStorage.clear();
            goToCoverPage()
        } catch (error) {
            console.log('Erro ao excluir usuário: ', error)
        }
    }


  
    return(
        <>
            <DivTitleContainer>
                <FontH1Container>Deletar conta permanentemente?</FontH1Container>
            </DivTitleContainer>
            <DivButtonsExit>
                <ButtonCancel onClick={goBack}>Voltar</ButtonCancel>
                <ButtonLogout onClick={deleteUserAccount}>Deletar</ButtonLogout>
            </DivButtonsExit>
        </>
    )
}


export default DeleteAccount