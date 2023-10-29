import GerenalFooter from "../../components/general_footer/GeneralFoter"

import { ImgInputDiv, InputImgProfile, ProfileInfos, InputFileContainer, EditButtonSaveDiv, ButtonSaveEdit } from "./style"

import imgExemp from "../../assets/user_img.svg"
import InfoProfileEdit from "../../components/info_profile_edit/InfoProfileEdit"
import HeaderProfileEdit from "../../components/header_profile_edit/HeaderProfileEdit"

function EditAccount() {

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
        identPosts: 'Postagens'
    }
    const topicValues = {
        userName: 'Amanda Moraes Benites',
        userEmail: 'amanda@teste.com',
        userPassword: changePassword(password),
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
            <HeaderProfileEdit/>
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
                    <h3>Editar meu perfil</h3>
                </ImgInputDiv>
                <ProfileInfos>
                    <InfoProfileEdit 
                        topicProfile={topicIdent.identName} 
                        itemProfile={topicValues.userName}
                    />
                    <InfoProfileEdit 
                        topicProfile={topicIdent.identEmail} 
                        itemProfile={topicValues.userEmail}
                    />
                    <InfoProfileEdit 
                        topicProfile={topicIdent.identPassword} 
                        itemProfile={topicValues.userPassword}
                    />
                </ProfileInfos>
                <EditButtonSaveDiv>
                    <ButtonSaveEdit>Salvar alterações</ButtonSaveEdit>
                </EditButtonSaveDiv>
            </div>
            <GerenalFooter/>
        </>
    )
}

export default EditAccount