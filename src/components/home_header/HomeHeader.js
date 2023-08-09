import { ButtonDivHeaderContainer, ButtonHeaderContainer, HomeHeaderContainer, LogoHeaderContainer } from "./style"

import logoHome from "../../assets/logo_home.svg"
import search from "../../assets/search.svg"
import icRepository from "../../assets/icRepository.svg"
import config from "../../assets/config.svg"

function HomeHeader() {
    return(
        <HomeHeaderContainer>
            <LogoHeaderContainer>
                <img src={logoHome} alt="Logo na tela principal"/>
            </LogoHeaderContainer>
            <ButtonDivHeaderContainer>
                <ButtonHeaderContainer><img src={search} alt="Ícone de pesquisa"/></ButtonHeaderContainer>
                <ButtonHeaderContainer><img src={icRepository} alt="Ícone do repositório"/></ButtonHeaderContainer>
                <ButtonHeaderContainer><img src={config} alt="Ícone de configuração"/></ButtonHeaderContainer>
            </ButtonDivHeaderContainer>
        </HomeHeaderContainer>
    )
}

export default HomeHeader