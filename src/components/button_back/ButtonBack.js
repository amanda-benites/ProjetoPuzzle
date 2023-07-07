import { useNavigate } from "react-router-dom";

import { ButtonBackContainer, ImgBackContainer } from "./style"

import back from "../../assets/back.svg"

function ButtonBack() {    

    const navigate = useNavigate()

    function goToCoverPage() {
        navigate("/");
    }

    return(
        <ButtonBackContainer onClick={goToCoverPage}><ImgBackContainer src={back}/></ButtonBackContainer>
    )
}

export default ButtonBack