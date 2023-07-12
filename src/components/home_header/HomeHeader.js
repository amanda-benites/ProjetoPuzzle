import { HomeHeaderContainer } from "./style"

import logoHome from "../../assets/logo_home.svg"
import search from "../../assets/search.svg"
import icRepository from "../../assets/icRepository.svg"
import config from "../../assets/config.svg"

function HomeHeader() {
    return(
        <HomeHeaderContainer>
            <img src={logoHome} alt="Logo na tela principal"/>
            <button><img src={search} alt="Ícone de pesquisa"/></button>
            <button><img src={icRepository} alt="Ícone do repositório"/></button>
            <button><img src={config} alt="Ícone de configuração"/></button>
        </HomeHeaderContainer>
    )
}

export default HomeHeader