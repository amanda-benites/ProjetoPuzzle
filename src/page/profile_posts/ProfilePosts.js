import PostImage from "../../components/post_image/PostImage"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgExemp from "../../assets/exemploImagem.svg"
import { BodyImgsContacts, DivPostsContactImgs } from "./style"

function ProfilePosts() {
    const postValues = {
        post1: imgExemp,
        post2: imgExemp,
        post3: imgExemp,
        post4: imgExemp,
        post5: imgExemp,
        post6: imgExemp,
        post7: imgExemp,
        post8: imgExemp,
        post9: imgExemp,
        post10: imgExemp
    }

    let arrayValues = []

    for(let i = 0; i < Object.keys(postValues).length; i++) {
         arrayValues.push(
            <PostImage
                key={`post${i + 1}`}
                postImageProfile={postValues[`post${i + 1}`]}
            />
        );
    }

    return(
        <BodyImgsContacts>
            <ScreenHeader titlePage={`Minhas publicações`}/>
            <DivPostsContactImgs>
                {arrayValues}
            </DivPostsContactImgs>
        </BodyImgsContacts>
    )
}

export default ProfilePosts