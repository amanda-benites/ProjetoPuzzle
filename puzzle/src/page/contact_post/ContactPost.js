import PostImageContact from "../../components/post_image_contact/PostImageContact"
import ScreenHeader from "../../components/sreen_header/ScreenHeader"

import imgExemp from "../../assets/exemploImagem.svg"
import { BodyImgsContacts, DivPostsContactImgs } from "./style"

function ContactPosts() {
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
            <PostImageContact
                key={`post${i + 1}`}
                postImageContact={postValues[`post${i + 1}`]}
            />
        );
    }


    return(
        <BodyImgsContacts>
            <ScreenHeader titlePage={`Publicações`}/>
            <DivPostsContactImgs>
                {arrayValues}
            </DivPostsContactImgs>
        </BodyImgsContacts>
    )
}

export default ContactPosts