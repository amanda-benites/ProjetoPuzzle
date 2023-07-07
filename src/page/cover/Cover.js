import { DivButton, DivImg, AnchorContainer } from "./style";

import CoverImg from "../../components/cover_img/CoverImg";
import LoginButton from "../../components/login_button/LoginButton";

function Cover() {
    return(
        <>
            <DivImg>
                <CoverImg/>
            </DivImg>
            <DivButton>
                <LoginButton/>
                <AnchorContainer>Criar conta</AnchorContainer>
            </DivButton>
        </>
    )
}

export default Cover