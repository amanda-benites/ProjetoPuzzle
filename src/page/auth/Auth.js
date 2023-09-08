import Input from "../../components/auth_input/Input"
import AuthHeader from "../../components/auth_header/AuthHeader"
import { FontH1Container } from "../../styleGlobal"
import { AuthBodyContainer, AuthButtonColor, DivButtonAuthContainer, DivTitleContainer, ForgetPasswordContainer, FormAuthContainer, LabelColor } from "./style"
import { useNavigate } from "react-router-dom"

function Auth() {
    
    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home");
    }

    return(
        <>
            <AuthHeader/>
            <AuthBodyContainer>
                <DivTitleContainer>
                    <FontH1Container>Entre no Puzzle</FontH1Container>
                </DivTitleContainer>
                <FormAuthContainer>
                    <LabelColor>Nome de usuário</LabelColor>
                    <Input/>
                    <LabelColor>Senha</LabelColor>
                    <Input/>
                </FormAuthContainer>
                <DivButtonAuthContainer>
                    <AuthButtonColor onClick={goToHomePage} >Entrar</AuthButtonColor>
                    <ForgetPasswordContainer>Esqueceu a senha?</ForgetPasswordContainer>
                </DivButtonAuthContainer>
            </AuthBodyContainer>
        </>
    )
}

export default Auth