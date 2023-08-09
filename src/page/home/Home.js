import GerenalFooter from "../../components/general_footer/GeneralFoter"
import HomeHeader from "../../components/home_header/HomeHeader"
import { BodyHomeContainer } from "./style"


function Home() {
    return(
        <BodyHomeContainer>    
            <HomeHeader/>
            <GerenalFooter/>
        </BodyHomeContainer>
    )
}

export default Home