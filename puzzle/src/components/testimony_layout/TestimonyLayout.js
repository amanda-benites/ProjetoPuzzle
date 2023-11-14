import { useNavigate } from "react-router";
import { TestimonyButton, TestimonyTitle } from "./style";


function TestimonyLayout(props) {
    
    const navigate = useNavigate()
    const userIdLogin = localStorage.getItem('@Auth:user_id')

    function goToTestimonyToMe() {
        navigate(`/testimony-to-me/${props.testimonyId}`);
    }

    function goToEditTestimony() {
        navigate("/edit-testimony");
    }
    
    return(
            <TestimonyTitle>
                {props.userIdValue == userIdLogin ? 
                    <TestimonyButton onClick={goToEditTestimony} id={props.userIdValue}>
                        <b>Você:</b> {props.testimony}
                    </TestimonyButton>
                : 
                    <TestimonyButton onClick={goToTestimonyToMe} id={props.userIdValue}>
                        <b>{props.nameContact}:</b> {props.testimony}
                    </TestimonyButton>   
                }                                
            </TestimonyTitle>
    )
}

export default TestimonyLayout