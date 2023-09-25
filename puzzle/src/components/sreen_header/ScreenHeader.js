import { DivAlign, DivImgButtonBack, DivTitle, H2ContainerHeader, ImgButtonBack, ScreenButtonHeader, ScreenHeaderContainer } from "./style"

import imgBack from "../../assets/back.svg"
import { useNavigate } from "react-router-dom"

function ScreenHeader(props) {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return(
        <ScreenHeaderContainer>
            <DivImgButtonBack>
                <ScreenButtonHeader onClick={goBack}>
                    <ImgButtonBack src={imgBack} alt="Ícone de voltar" />
                </ScreenButtonHeader>
            </DivImgButtonBack>
            <DivTitle>
                <H2ContainerHeader>{props.titlePage}</H2ContainerHeader>
            </DivTitle>
            <DivAlign>

            </DivAlign>
        </ScreenHeaderContainer>
    )
}

export default ScreenHeader