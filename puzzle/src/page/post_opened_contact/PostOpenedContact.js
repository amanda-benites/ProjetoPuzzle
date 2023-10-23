import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostOpenedCardContact from "../../components/post_opened_card_contact/PostOpenedCardContact"
import { BodyHomeContainer, DivAddComment, DivFooterPostOpened, InputAddComment, MainHomeContainer, SendMensage } from "./style"

import exemploImagem from "../../assets/exemploImagem.svg"
import imgProfile from "../../assets/MauricioExemplo.svg"
import send from "../../assets/send_mensage.svg"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useAuthRedirect } from "../../hooks/useAuthRedirect"

function PostOpenedContact() {
    const { authenticated } = useContext(AuthContext);
    useAuthRedirect(authenticated);

    if (authenticated) {
    return(
        <BodyHomeContainer>
            <HomeHeader/>
            <MainHomeContainer>
                <PostOpenedCardContact 
                    userImg={imgProfile}
                    userName={'Marício Costa'}
                    ImgContent={exemploImagem}/>
            </MainHomeContainer>
            <DivFooterPostOpened>
                <DivAddComment>
                    <InputAddComment type="text" placeholder="Escreva aqui"/>
                    <SendMensage type="submit" >
                        <img src={send} alt="Ícone de enviar mensagem"/>
                    </SendMensage>
                </DivAddComment>
            </DivFooterPostOpened>
            <GerenalFooter/>
        </BodyHomeContainer>
    )}
}

export default PostOpenedContact