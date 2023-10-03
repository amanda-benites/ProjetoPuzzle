import AuthHeader from "../../components/auth_header/AuthHeader"
import { FontH1Container } from "../../styleGlobal"
import { AuthBodyContainer, AuthButtonColor, DivButtonAuthContainer, DivTitleContainer, ForgetPasswordContainer, FormAuthContainer, LabelColor, InputContainer } from "./style"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { api } from "../../services/api"



function Auth() {
    //const { signIn } = useAuth();

    const [user_email, setUserEmail] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState();
    const signIn = false;

    const navigate = useNavigate();

    function goToForgotPasswordPage() {
        navigate('/forgot-password')
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
          user_email,
          user_password
        };

        const response = await api.post("/auth/login", data);
        console.log(response.data);
        if(response.data.success === true) {
            navigate('/home')
        } else {
            navigate('/auth')
        }


    // const handleLogin = () => {
    //     console.log(user_email, user_password);
    };

        return(
            <>
                <AuthHeader/>
                <AuthBodyContainer>
                    <DivTitleContainer>
                        <FontH1Container>Entre no Puzzle</FontH1Container>
                    </DivTitleContainer>
                    <FormAuthContainer>
                        <LabelColor>Email</LabelColor>
                        <InputContainer 
                            type="text"
                            value={user_email}
                            onChange={(e) => [setUserEmail(e.target.value), setError("")]}/>
                        <LabelColor>Senha</LabelColor>
                        <InputContainer 
                            type="text"
                            value={user_password}
                            onChange={(e) => [setUserPassword(e.target.value), setError("")]}/>
                        <DivButtonAuthContainer> 
                            <label>{error}</label>
                            <AuthButtonColor onClick={handleLogin}>Entrar</AuthButtonColor>
                            <ForgetPasswordContainer onClick={goToForgotPasswordPage}>Esqueceu a senha?</ForgetPasswordContainer>
                            </DivButtonAuthContainer>
                    </FormAuthContainer>
                </AuthBodyContainer>
            </>
        )
    }

export default Auth