import AuthHeader from "../../components/auth_header/AuthHeader"
import { FontH1Container } from "../../styleGlobal"
import { AuthBodyContainer, AuthButtonColor, DivButtonAuthContainer, DivTitleContainer, ForgetPasswordContainer, FormAuthContainer, LabelColor, InputContainer } from "./style"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

function Auth() {

    const navigate = useNavigate()

    function goToForgotPasswordPage() {
        navigate('/forgot-password')
    }

    const [user_email, setUserEmail] = useState("");
    const [user_password, setUserPassword] = useState("");
    const { signIn, signed } = useContext(AuthContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        user_email,
        user_password,
      };
      await signIn(data);
    };

    console.log(signed);
    if (!signed) {

        return(
            <>
                <AuthHeader/>
                <AuthBodyContainer>
                    <DivTitleContainer>
                        <FontH1Container>Entre no Puzzle</FontH1Container>
                    </DivTitleContainer>
                    <FormAuthContainer onSubmit={handleSubmit}>
                        <LabelColor>Email</LabelColor>
                        <InputContainer 
                            type="text"
                            value={user_email}
                            onChange={(e) => setUserEmail(e.target.value)}/>
                        <LabelColor>Senha</LabelColor>
                        <InputContainer 
                            type="text"
                            value={user_password}
                            onChange={(e) => setUserPassword(e.target.value)}/>
                        <DivButtonAuthContainer> 
                            <AuthButtonColor type="submit">Entrar</AuthButtonColor>
                            <ForgetPasswordContainer onClick={goToForgotPasswordPage}>Esqueceu a senha?</ForgetPasswordContainer>
                        </DivButtonAuthContainer>
                    </FormAuthContainer>
                </AuthBodyContainer>
            </>
        )
    }
}

export default Auth