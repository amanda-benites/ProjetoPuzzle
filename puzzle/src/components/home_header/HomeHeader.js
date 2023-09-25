import { ButtonDivHeaderContainer, ButtonHeaderContainer, HomeHeaderContainer, LogoHeaderContainer } from "./style"

import logoHome from "../../assets/logo_home.svg"
import search from "../../assets/search.svg"
import icRepository from "../../assets/icRepository.svg"
import config from "../../assets/config.svg"
import { useNavigate } from "react-router"

function HomeHeader() {

        
    const navigate = useNavigate()

    function goToFindPage() {
        navigate("/find");
    }

    function goToProfilePage() {
        navigate("/profile");
    }

    function goToRepositoryPage() {
        navigate("/repository");
    }
    
    return(
        <HomeHeaderContainer>
            <LogoHeaderContainer>
                <img src={logoHome} alt="Logo na tela principal"/>
            </LogoHeaderContainer>
            <ButtonDivHeaderContainer>
                <ButtonHeaderContainer onClick={goToFindPage}><img src={search} alt="Ícone de pesquisa"/></ButtonHeaderContainer>
                <ButtonHeaderContainer onClick={goToRepositoryPage}><img src={icRepository} alt="Ícone do repositório"/></ButtonHeaderContainer>
                <ButtonHeaderContainer onClick={goToProfilePage}><img src={config} alt="Ícone de configuração"/></ButtonHeaderContainer>
            </ButtonDivHeaderContainer>
        </HomeHeaderContainer>
    )
}

export default HomeHeader