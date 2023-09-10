import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HomeHeader from "../../components/home_header/HomeHeader"
import PostCard from "../../components/post_card/PostCard"
import { BodyHomeContainer, ButtonUserContainer, DivProfileAccess, FinalDiv, FinalText, MainHomeContainer, MyNameText, MyPicture, MyProfile } from "./style"

import userImg from "../../assets/user_img.svg"

import exemploImagem from "../../assets/exemploImagem.svg"
import MauricioExemplo from "../../assets/MauricioExemplo.svg"
import imgProfile from "../../assets/user_img.svg"
import { useNavigate } from "react-router-dom"
import PostCardContact from "../../components/post_card_contact/PostCardContact"

function PostOpened() {


    const navigate = useNavigate()

    function goToProfilePage() {
        navigate("/profile");
    }

    return(
        <BodyHomeContainer>    
            <HomeHeader/>
            <MainHomeContainer>
                
            </MainHomeContainer>
            <GerenalFooter/>
        </BodyHomeContainer>
    )
}

export default PostOpened