import { DivImgButtonBack, DivImgContact, DivTitle, ImgButtonBack, ImgContactChat, ScreenButtonHeader, ScreenHeaderContainer } from "./style"

import imgBack from "../../assets/back.svg"
import imgMarcelo from "../../assets/MauricioExemplo.svg"
import { useNavigate } from "react-router-dom"

function HeaderChat(props) {

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
            <DivImgContact>
                <ImgContactChat src={imgMarcelo} alt="Imagem de exemplo do perfil do contato"/>
            </DivImgContact>
            <DivTitle>
                <h2>{props.titleChat}</h2>
            </DivTitle>
        </ScreenHeaderContainer>
    )
}

export default HeaderChat