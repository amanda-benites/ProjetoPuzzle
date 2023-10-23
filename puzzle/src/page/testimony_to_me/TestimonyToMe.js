import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgTestimony from "../../assets/testimony_img.svg"
import { DivContentTestimony, DivImgTestimony, H4TestimonyIdent } from "./style"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";


function TestimonyToMe() {

    const nameContactProfile = 'Maurício Costa'

    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <>
            <ScreenHeader titlePage={`Depoimento de ${nameContactProfile}`}/>
            <DivImgTestimony>
                <img src={imgTestimony} alt="Imagem dos depoimentos"/>
            </DivImgTestimony>
            <DivContentTestimony>
                <H4TestimonyIdent>Depoimento</H4TestimonyIdent>
                <p>Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura</p>
            </DivContentTestimony>
        </>
    )}
}

export default TestimonyToMe