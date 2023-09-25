import { ButtonContainer } from "./style"

import { useNavigate } from 'react-router-dom';

function LoginButton() {

    const navigate = useNavigate()

    function goToAuthPage() {
        navigate("/auth");
    }
    
    return (
        <ButtonContainer onClick={goToAuthPage} >Entrar</ButtonContainer>
    )
}

export default LoginButton