import { useNavigate } from "react-router-dom";
import ButtonBack from "../button_back/ButtonBack"
import { AnchorColor, AuthHeaderContainer } from "./style"

function AuthHeader() {

    const navigate = useNavigate()

    function goToCoverPage() {
        navigate("/create");
    }

    return(
        <AuthHeaderContainer>
            <ButtonBack/>
            <AnchorColor onClick={goToCoverPage}>Criar conta</AnchorColor>
        </AuthHeaderContainer>
    )
}

export default AuthHeader