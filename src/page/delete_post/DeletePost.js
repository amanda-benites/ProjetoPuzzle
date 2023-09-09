import ScreenHeader from "../../components/sreen_header/ScreenHeader"
import { ButtonCancel, ButtonDelete, DivButtonsDelete, DivContentPostDelete, DivPostContainer } from "./style"

import imgExemple from "../../assets/exemploImagem.svg"

function DeletePost() {
    return(
        <>
            <ScreenHeader/>
            <DivContentPostDelete>
                <DivPostContainer>
                    <img src={imgExemple} alt="Imagem de exemplo"/>
                </DivPostContainer>             
            </DivContentPostDelete>
            <DivButtonsDelete>
                <ButtonCancel>Cancelar</ButtonCancel>
                <ButtonDelete>Concluir</ButtonDelete>
            </DivButtonsDelete>
        </>
    )
}

export default DeletePost