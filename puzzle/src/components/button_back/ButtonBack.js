import { ButtonBackContainer, ImgBackContainer } from "./style"

import { useNavigate } from "react-router-dom";

import back from "../../assets/back.svg"

function ButtonBack() {    

    const navigate = useNavigate()

    function goToCoverPage() {
        navigate("/");
    }

    return(
        <ButtonBackContainer onClick={goToCoverPage}><ImgBackContainer src={back} alt="Ícone de voltar"/></ButtonBackContainer>
    )
}

export default ButtonBack