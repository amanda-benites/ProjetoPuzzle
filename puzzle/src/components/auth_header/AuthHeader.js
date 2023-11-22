import { AnchorColor, AuthHeaderContainer } from "./style"
import ButtonBack from "../button_back/ButtonBack"

import { useNavigate } from "react-router-dom";


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