import { DivImgContainer, ImgContainer } from './style'
import logo from '../../assets/logo.svg'

function CoverImg() {
    return(
        <DivImgContainer>
            <ImgContainer src={logo} alt=""></ImgContainer>
        </DivImgContainer>
    )
}

export default CoverImg