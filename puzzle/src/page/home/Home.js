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
import { useEffect, useState } from "react"

function Home() {
    const postValues = {
        user1: [imgProfile, 'Amanda Moraes Benites', exemploImagem],
        user2: [MauricioExemplo, 'Maurício Costa', exemploImagem],
        user3: [MauricioExemplo, 'Augusto Silva', exemploImagem],
        user4: [MauricioExemplo, 'Clara Machado', exemploImagem]
    }
    
    let arrayValues = []

    for(let i = 0; i < Object.keys(postValues).length; i++) {
        if(postValues[`user${i + 1}`][1] === 'Amanda Moraes Benites') {
            arrayValues.push(
                <PostCard
                  key={`user${i + 1}`}
                  userImg={postValues[`user${i + 1}`][0]}
                  userName={postValues[`user${i + 1}`][1]}
                  ImgContent={postValues[`user${i + 1}`][2]}
                />
            );
        } else (
        arrayValues.push(
            <PostCardContact
              key={`user${i + 1}`}
              userImg={postValues[`user${i + 1}`][0]}
              userName={postValues[`user${i + 1}`][1]}
              ImgContent={postValues[`user${i + 1}`][2]}
            />
          )
        )
    }

    const navigate = useNavigate()

    function goToProfilePage() {
        navigate("/profile");
    }

    const [userName, setUserName] = useState("");

    useEffect(() => {
      // Acesse o user_name diretamente do localStorage
      const storedUserName = localStorage.getItem("@Auth:user_name");
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }, []);

    return(
        <BodyHomeContainer>    
            <HomeHeader/>
            <MainHomeContainer>
                <DivProfileAccess>
                    <MyPicture>
                        <img src={userImg} alt="Imagem representativa do usuário"/>
                    </MyPicture>
                    <MyProfile>
                        <ButtonUserContainer onClick={goToProfilePage}>Meu Perfil</ButtonUserContainer>
                        <MyNameText>{userName}</MyNameText>
                    </MyProfile>
                </DivProfileAccess>
                {arrayValues}
                <FinalDiv>
                    <FinalText>Fim das publicações</FinalText>
                </FinalDiv>
            </MainHomeContainer>
            <GerenalFooter/>
        </BodyHomeContainer>
    )
}

export default Home