import { ButtonHeaderProfile, DropDownMenu, HeadeProfileContainer, ImgBackProfile, ItemsMenu } from "./style";

import imgBack from "../../assets/back.svg"
import threePoints from "../../assets/three-points.svg"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HeaderProfileEdit() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    function goToExitPage() {
        navigate("/exit");
    }

    function goToDeletePage() {
        navigate('/delete-account')
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
                        <ItemsMenu onClick={goToExitPage}>Sair</ItemsMenu>
                        <ItemsMenu onClick={goToDeletePage}>Deletar conta</ItemsMenu>
                    </DropDownMenu>
                    )}
        </HeadeProfileContainer>
    )
}

export default HeaderProfileEdit