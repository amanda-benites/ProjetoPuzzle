import { styled } from "styled-components";
import { AuthBodyContainer, AuthButtonColor, DivButtonAuthContainer, DivTitleContainer, FormAuthContainer, LabelColor } from "../auth/style";


export const CreateBodyContainer = styled(AuthBodyContainer)`
    height: 85vh;
`

export const CreateDivTitle = styled(DivTitleContainer)`
    height: 15vh;

    background-position: 1.9vh 13.4vh;
`

export const CreateFormContainer = styled(FormAuthContainer)`
    height: 70vh;
`

export const CreateLabelColor = styled(LabelColor)`
`

export const CreateButtonColor = styled(AuthButtonColor)`
`

export const DivCreateButtonContainer = styled(DivButtonAuthContainer)`
    height: 12vh;

    padding-top: 5vh;
`

export const InputContainer = styled.input`
    background: none;
    border: none;
    height: 5vh;
    width: 87vw;

    border-bottom: 1px #CDD1D0 solid;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const CreateLabelError = styled.label`
    color: #CDD1D0;

    width: 80vw;
    text-align: center;

    font-size: small;
`

export const CreateButtonDisabled = styled(CreateButtonColor)`
    opacity: 0.7;
`