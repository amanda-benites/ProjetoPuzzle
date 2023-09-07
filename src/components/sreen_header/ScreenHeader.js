import { ImgButtonBack, ScreenButtonHeader, ScreenHeaderContainer } from "./style"

import imgBack from "../../assets/back.svg"
import { useNavigate } from "react-router-dom"

function ScreenHeader(props) {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return(
        <ScreenHeaderContainer>
            <ScreenButtonHeader onClick={goBack}>
                <ImgButtonBack src={imgBack} alt="Ícone de voltar" />
            </ScreenButtonHeader>
            <h2>{props.titlePage}</h2>
        </ScreenHeaderContainer>
    )
}

export default ScreenHeader