import { useNavigate } from "react-router-dom";

import { DivButton, DivImg, AnchorContainer } from "./style";

import CoverImg from "../../components/cover_img/CoverImg";
import LoginButton from "../../components/login_button/LoginButton";

function Cover() {

    const navigate = useNavigate()

    function goToCoverPage() {
        navigate("/create");
    }

    return(
        <>
            <DivImg>
                <CoverImg/>
            </DivImg>
            <DivButton>
                <LoginButton/>
                <AnchorContainer onClick={goToCoverPage}>Criar conta</AnchorContainer>
            </DivButton>
        </>
    )
}

export default Cover