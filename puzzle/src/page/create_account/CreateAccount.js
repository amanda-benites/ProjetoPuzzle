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

    const isButtonDisabled = user_password !== confirmPassword;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        user_name,
        user_email,
        user_password,
      };
      await api.post("/user/create", data);
      console.log("Usuário criado com sucesso!");

      navigate('/home')
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
                        value={user_name} 
                        onChange={(e) => setName(e.target.value)}/>
                    <CreateLabelColor>E-mail</CreateLabelColor>
                    <InputContainer
                        value={user_email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <CreateLabelColor>Senha</CreateLabelColor>
                    <InputContainer
                        value={user_password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <CreateLabelColor>Confirmar senha</CreateLabelColor>
                    <InputContainer
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
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