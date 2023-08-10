import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostCard from "../../components/post_card/PostCard"
import { BodyHomeContainer, ButtonUserContainer, DivProfileAccess, MainHomeContainer, MyPicture, MyProfile } from "./style"

import userImg from "../../assets/user_img.svg"


function Home() {
    return(
        <BodyHomeContainer>    
            <HomeHeader/>
            <MainHomeContainer>
                <DivProfileAccess>
                    <MyPicture>
                        <img src={userImg} alt="Imagem representativa do usuário"/>
                    </MyPicture>
                    <MyProfile>
                        <ButtonUserContainer>Meu Perfil</ButtonUserContainer>
                    </MyProfile>
                </DivProfileAccess>
                <PostCard/>
            </MainHomeContainer>
            <GerenalFooter/>
        </BodyHomeContainer>
    )
}

export default Home