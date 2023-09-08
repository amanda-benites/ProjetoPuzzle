import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HeaderProfile from "../../components/header_profile/HeaderProfile"

import { ButtonSeeMore, ImgInputDiv, InputImgProfile, PostsProfile, PostsProfileDiv, PostsProfileIdent, ProfileInfos, ProfilePosts, InputFileContainer } from "./style"

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

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
    
          const reader = new FileReader();
    
          reader.onload = function (e) {
            const fileUrl = e.target.result;
            const divInputFile = document.getElementById("divInputFile");
            if (divInputFile) {
              divInputFile.style.backgroundImage = `url(${fileUrl})`;
              divInputFile.style.backgroundSize = "cover";
              divInputFile.style.backgroundPosition = "center";
            }
          };
    
          reader.readAsDataURL(selectedFile);
        }
      };

    return(
        <>
            <HeaderProfile/>
            <div>
                <ImgInputDiv>
                    <InputImgProfile background={imgExemp} id="divInputFile">
                        <input 
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        <InputFileContainer
                            onClick={() => {
                                const fileInput = document.getElementById('fileInput');
                                if (fileInput) {
                                fileInput.click();
                                }
                            }}>
                        Editar
                        </InputFileContainer>
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