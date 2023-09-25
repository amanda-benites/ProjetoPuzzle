import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostOpenedCard from "../../components/post_opened_card/PostOpenedCard"
import { BodyHomeContainer, DivAddComment, DivFooterPostOpened, InputAddComment, MainHomeContainer, SendMensage } from "./style"

import exemploImagem from "../../assets/exemploImagem.svg"
import imgProfile from "../../assets/user_img.svg"
import send from "../../assets/send_mensage.svg"

function PostOpened() {
    return(
        <BodyHomeContainer>    
            <HomeHeader/>
            <MainHomeContainer>
                <PostOpenedCard 
                    userImg={imgProfile}
                    userName={'Amanda Moraes Benites'}
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
    )
}

export default PostOpened