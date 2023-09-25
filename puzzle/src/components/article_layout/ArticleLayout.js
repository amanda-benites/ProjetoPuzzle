import { useNavigate } from "react-router";
import { ContactButton, ContactImg, ContactLayoutContainer, ContactName, ImgContactContainer, NameContactText } from "./style";

import iconArticle from "../../assets/article_icon.svg"

function ArticleLayout(props) {
    const navigate = useNavigate()

    function goToOpenArticlePage() {
        navigate("/open-article");
    }

    return(
        <ContactLayoutContainer>
            <ContactImg>
                <ImgContactContainer src={iconArticle} alt="Ícone do artigo"/>
            </ContactImg>
            <ContactName>
                {props.nameArticle === 'Transtono do espectro autista: qualidade de vida e estresse em cuidadores e/ou familiares - revisão de literatura' ? (
                    <ContactButton onClick={goToOpenArticlePage}>
                        <NameContactText>{props.nameArticle}</NameContactText>
                    </ContactButton>
                ) : (
                    <ContactButton>
                        <NameContactText>{props.nameArticle}</NameContactText>
                    </ContactButton>
                )
                }
            </ContactName>
        </ContactLayoutContainer>
    )
}

export default ArticleLayout