import AuthHeader from "../../components/auth_header/AuthHeader"
import { FontH1Container } from "../../styleGlobal"
import { AuthBodyContainer, AuthButtonColor, DivButtonAuthContainer, DivTitleContainer, ForgetPasswordContainer, FormAuthContainer, LabelColor, InputContainer } from "./style"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Auth() {

    const [email, setEmail] = useState('')
    const [password, setPassord] = useState('')


    const navigate = useNavigate()

    function goToForgotPasswordPage() {
        navigate('/forgot-password')
    }

    const saveUserInfoLocalStorage = (token) => {
        localStorage.setItem('email', email)
        localStorage.setItem('token', token)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            navigate('/home')
        })
        .catch(error => {
            console.log(error)
            alert('Login inválido')
        })
    }

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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <LabelColor>Senha</LabelColor>
                    <InputContainer 
                        type="password"
                        value={password}
                        onChange={(e) => setPassord(e.target.value)}/>
                    <DivButtonAuthContainer> 
                        <AuthButtonColor type="submit">Entrar</AuthButtonColor>
                        <ForgetPasswordContainer onClick={goToForgotPasswordPage}>Esqueceu a senha?</ForgetPasswordContainer>
                    </DivButtonAuthContainer>
                </FormAuthContainer>
            </AuthBodyContainer>
        </>
    )
}

export default Auth