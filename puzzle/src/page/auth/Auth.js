import AuthHeader from "../../components/auth_header/AuthHeader"
import { FontH1Container } from "../../styleGlobal"
import { AuthBodyContainer, AuthButtonColor, DivButtonAuthContainer, DivTitleContainer, ForgetPasswordContainer, FormAuthContainer, LabelColor, InputContainer } from "./style"
import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"


function Auth() {

    const [user_email, setUserEmail] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const signed = localStorage.getItem("@Auth:user") && localStorage.getItem("@Auth:token");

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
            console.log("User connected!");

            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.data[0].token}`

            localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].user_email));
            localStorage.setItem("@Auth:token", response.data.data[0].token);
            setUser(response.data.data[0])

            navigate('/home')

        } else {
            navigate('/auth')
        }
    };

    if (signed) {
        console.log("Success login")
        return <Navigate to="/home"/>
    } else{
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
                            type="password"
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
}
export default Auth