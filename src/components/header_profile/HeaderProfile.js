import { ButtonHeaderProfile, DropDownMenu, HeadeProfileContainer, ImgBackProfile, ItemsMenu } from "./style";

import imgBack from "../../assets/back.svg"
import threePoints from "../../assets/three-points.svg"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HeaderProfile() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToTestimonyPage = () => {
        navigate('/profile-testimony')
    }

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <HeadeProfileContainer>
            <ButtonHeaderProfile onClick={goBack}>
                <ImgBackProfile src={imgBack} alt="Ícone de voltar" />
            </ButtonHeaderProfile>
            <ButtonHeaderProfile onClick={openMenu}>
                <img src={threePoints} alt="Ícone de três pontos" />
            </ButtonHeaderProfile>
                {isOpen && (
                    <DropDownMenu className="dropdown-menu">
                        <ItemsMenu>Sair</ItemsMenu>
                        <ItemsMenu onClick={goToTestimonyPage}>Depoimentos</ItemsMenu>
                    </DropDownMenu>
                    )}
        </HeadeProfileContainer>
    )
}

export default HeaderProfile