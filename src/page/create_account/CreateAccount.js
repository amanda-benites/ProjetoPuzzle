import { useNavigate } from "react-router-dom"
import Input from "../../components/auth_input/Input"
import CreateHeader from "../../components/create_header/CreateHeader"
import { FontH1Container } from "../../styleGlobal"
import { CreateBodyContainer, CreateButtonColor, CreateDivTitle, CreateFormContainer, CreateLabelColor, DivCreateButtonContainer } from "./style"


function CreateAccount() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }

    return(
        <>
            <CreateHeader/>
            
            <CreateBodyContainer>
                
                <CreateDivTitle>
                    <FontH1Container>Criar Conta</FontH1Container>
                </CreateDivTitle>

                <CreateFormContainer>
                    <CreateLabelColor>Nome de Usuário</CreateLabelColor>
                    <Input/>
                    <CreateLabelColor>E-mail</CreateLabelColor>
                    <Input/>
                    <CreateLabelColor>Senha</CreateLabelColor>
                    <Input/>
                    <CreateLabelColor>Confirmar senha</CreateLabelColor>
                    <Input/>
                </CreateFormContainer>
                <DivCreateButtonContainer>
                    <CreateButtonColor onClick={goBack} >Criar conta</CreateButtonColor>
                </DivCreateButtonContainer>
            </CreateBodyContainer>
        </>
    )
}

export default CreateAccount