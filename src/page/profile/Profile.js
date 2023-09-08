import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HeaderProfile from "../../components/header_profile/HeaderProfile"

import { ButtonSeeMore, ImgInputDiv, InputImgProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts } from "./style"

import galleryImport from "../../assets/gallery-import.svg"
import imgExemp from "../../assets/user_img.svg"
import InfoProfile from "../../components/info_profile/InfoProfile"
import exemplePost from "../../assets/exemploImagem.svg"

function Profile() {

    function changePassword(password, changeCharacter) {
        changeCharacter = '*'
        const values = /[a-zA-Z-0-1-2-3-4-5-6-7-8-9]/g;
        const changedPassword = password.replace(values, changeCharacter);
        
        return changedPassword;
    }

    const password = 'minhaSenha1234561'

    const topicIdent = {
        identName: 'Nome de usuário',
        identEmail: 'Email',
        identPassword: 'Senha',
        identPhone: 'Número de telefone',
        identPosts: 'Postagens'
    }
    const topicValues = {
        userName: 'Amanda Moraes Benites',
        userEmail: 'amanda@teste.com',
        userPassword: changePassword(password),
        userPhone: '(51) 99999-0000'
    }

    return(
        <>
            <HeaderProfile/>
            <div>
                <ImgInputDiv>
                    <InputImgProfile background={imgExemp}>
                        <input 
                            type="image" 
                            src={galleryImport} 
                            alt="Input para adicionar imagem de perfil"/>
                    </InputImgProfile>
                    <h3>Meu perfil</h3>
                </ImgInputDiv>
                <ProfileInfos>
                    <InfoProfile 
                        topicProfile={topicIdent.identName} 
                        itemProfile={topicValues.userName}
                    />
                    <InfoProfile 
                        topicProfile={topicIdent.identEmail} 
                        itemProfile={topicValues.userEmail}
                    />
                    <InfoProfile 
                        topicProfile={topicIdent.identPassword} 
                        itemProfile={topicValues.userPassword}
                    />
                    <InfoProfile 
                        topicProfile={topicIdent.identPhone} 
                        itemProfile={topicValues.userPhone}
                    />
                </ProfileInfos>
                <ProfilePosts>
                    <PostsProfileIdent>
                        <InfoProfile 
                            topicProfile={topicIdent.identPosts}
                        />
                        <ButtonSeeMore>
                            Ver mais
                        </ButtonSeeMore>
                    </PostsProfileIdent>
                    <PostsProfileDiv>
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 1" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 2" />
                        <PostsProfile src={exemplePost} alt="Exemplo de imagem 3" />
                    </PostsProfileDiv>
                </ProfilePosts>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default Profile