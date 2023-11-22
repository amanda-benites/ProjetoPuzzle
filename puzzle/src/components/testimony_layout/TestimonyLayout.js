import { TestimonyButton, TestimonyTitle } from "./style";

import { useNavigate } from "react-router";

function TestimonyLayout(props) {
    const userIdLogin = localStorage.getItem('@Auth:user_id')
    
    // ----------- NAVIGATES -----------
    const navigate = useNavigate()

    function goToTestimonyToMe() {
        navigate(`/testimony-to-me/${props.testimonyId}`);
    }

    function goToEditTestimony() {
        navigate(`/edit-testimony/${props.testimonyId}`);
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