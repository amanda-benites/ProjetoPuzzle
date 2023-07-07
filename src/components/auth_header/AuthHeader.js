import ButtonBack from "../button_back/ButtonBack"
import { AnchorColor, AuthHeaderContainer } from "./style"

function AuthHeader() {
    return(
        <AuthHeaderContainer>
            <ButtonBack/>
            <AnchorColor>Criar conta</AnchorColor>
        </AuthHeaderContainer>
    )
}

export default AuthHeader