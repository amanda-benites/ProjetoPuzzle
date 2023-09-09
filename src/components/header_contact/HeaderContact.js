import { ButtonHeaderContact, HeadeContactContainer, ImgBackContact } from "./style";

import imgBack from "../../assets/back.svg"
import tetemIcon from "../../assets/testemIcon.svg"

import { useNavigate } from "react-router-dom";

function HeaderContact() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    function goToTestimonyContactPage() {
        navigate("/testimony-contact");
    }

    return(
        <HeadeContactContainer>
            <ButtonHeaderContact onClick={goBack}>
                <ImgBackContact src={imgBack} alt="Ícone de voltar" />
            </ButtonHeaderContact>
            <ButtonHeaderContact onClick={goToTestimonyContactPage}>
                <img src={tetemIcon} alt="Ícone de depoimento" />
            </ButtonHeaderContact>
        </HeadeContactContainer>
    )
}

export default HeaderContact