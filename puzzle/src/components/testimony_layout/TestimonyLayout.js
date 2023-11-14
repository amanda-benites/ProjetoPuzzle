import { useNavigate } from "react-router";
import { TestimonyButton, TestimonyTitle } from "./style";


function TestimonyLayout(props) {

    const navigate = useNavigate()

    function goToTestimonyToMe() {
        navigate("/testimony-to-me");
    }

    function goToEditTestimony() {
        navigate("/edit-testimony");
    }
    
    return(
            <TestimonyTitle>
                    <TestimonyButton onClick={goToTestimonyToMe}>
                        <b>{props.nameContact}:</b> {props.testimony}
                    </TestimonyButton>                                 
            </TestimonyTitle>
    )
}

export default TestimonyLayout