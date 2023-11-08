import { useNavigate } from "react-router";
import { ContactButton, ContactImg, ContactLayoutContainer, ContactName, ImgContactContainer, NameContactText } from "./style";

import iconArticle from "../../assets/article_icon.svg"

function ArticleLayout(props) {
    const navigate = useNavigate()

    function goToOpenArticlePage() {
        navigate(`/open-article/${props.articleId}`);
    }

    return(
        <ContactLayoutContainer>
            <ContactImg>
                <ImgContactContainer src={iconArticle} alt="Ícone do artigo"/>
            </ContactImg>
            <ContactName>
                    <ContactButton onClick={goToOpenArticlePage}>
                        <NameContactText>{props.nameArticle}</NameContactText>
                    </ContactButton>
            </ContactName>
        </ContactLayoutContainer>
    )
}

export default ArticleLayout