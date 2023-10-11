import { useNavigate } from "react-router-dom"
import CreateHeader from "../../components/create_header/CreateHeader"
import { FontH1Container } from "../../styleGlobal"
import { CreateBodyContainer, CreateButtonColor, CreateDivTitle, CreateFormContainer, CreateLabelColor, DivCreateButtonContainer, InputContainer } from "./style"
import { useState } from "react"
import { api } from "../../services/api"


function CreateAccount() {

    const navigate = useNavigate()

    const [user_name, setName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(""); 

    const isButtonDisabled = user_password !== confirmPassword;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        user_name,
        user_email,
        user_password,
      };
      try {
        await api.post("/user/create", data);
        console.log("Usuário criado com sucesso!");
  
        navigate('/home')
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        setError("Credenciais inválidas. Verifique seu email e senha.");
      }
    };

    return(
        <>
            <CreateHeader/>
            
            <CreateBodyContainer>
                
                <CreateDivTitle>
                    <FontH1Container>Criar Conta</FontH1Container>
                </CreateDivTitle>

                <CreateFormContainer onSubmit={handleSubmit}>
                    <CreateLabelColor>Nome de Usuário</CreateLabelColor>
                    <InputContainer 
                        type="text"
                        value={user_name} 
                        onChange={(e) => setName(e.target.value)}/>
                    <CreateLabelColor>E-mail</CreateLabelColor>
                    <InputContainer
                        type="text"
                        value={user_email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <CreateLabelColor>Senha</CreateLabelColor>
                    <InputContainer
                        type="password"
                        value={user_password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <CreateLabelColor>Confirmar senha</CreateLabelColor>
                    <InputContainer
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {error ?
                    <DivCreateButtonContainer>
                        <label>{error}</label>
                        <CreateButtonColor 
                            type="submit" 
                            disabled={isButtonDisabled}>Criar conta</CreateButtonColor>
                    </DivCreateButtonContainer>
                    :
                    <DivCreateButtonContainer>
                    <CreateButtonColor 
                        type="submit" 
                        disabled={isButtonDisabled}>Criar conta</CreateButtonColor>
                    </DivCreateButtonContainer>
                    }
                    <DivCreateButtonContainer>
                        <CreateButtonColor 
                            type="submit" 
                            disabled={isButtonDisabled}>Criar conta</CreateButtonColor>
                    </DivCreateButtonContainer>
                </CreateFormContainer>
            </CreateBodyContainer>
        </>
    )
}

export default CreateAccount