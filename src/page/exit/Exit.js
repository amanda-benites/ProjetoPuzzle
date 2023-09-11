import { useNavigate } from "react-router-dom";
import { FontH1Container } from "../../styleGlobal"
import { DivTitleContainer, DivButtonsExit, ButtonCancel, ButtonLogout } from "./style"
import { useEffect } from "react";

function Exit() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            navigate('/')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        navigate('/')
    }

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
                <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>
            </DivButtonsExit>
        </>
    )
}

export default Exit