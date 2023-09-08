import { ButtonHeaderProfile, HeadeProfileContainer, ImgBackProfile } from "./style";

import imgBack from "../../assets/back.svg"
import threePoints from "../../assets/three-points.svg"

import { useNavigate } from "react-router-dom";

function HeaderProfile() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return(
        <HeadeProfileContainer>
            <ButtonHeaderProfile onClick={goBack}>
                <ImgBackProfile src={imgBack} alt="Ícone de voltar" />
            </ButtonHeaderProfile>
            <ButtonHeaderProfile>
                <img src={threePoints} alt="Ícone de três pontos" />
            </ButtonHeaderProfile>
        </HeadeProfileContainer>
    )
}

export default HeaderProfile