import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cover from "./page/cover/Cover"
import Auth from "./page/auth/Auth"
import CreateAccount from "./page/create_account/CreateAccount";
import Home from "./page/home/Home"
import Contacts from "./page/contacts/Contacts";
import Profile from "./page/profile/Profile";
import CreatePost from "./page/create_post/CreatePost";
import ContactProfile from "./page/contact_profile/ContactProfile";
import FindPeople from "./page/find_people/FindPeople";
import ProfilePosts from "./page/profile_posts/ProfilePosts";
import ContactPosts from "./page/contact_post/ContactPost";
import ContactTestimony from "./page/contact_testimony/ContactTestimony";
import TestimonyToMe from "./page/testimony_to_me/TestimonyToMe";
import CreateTestimony from "./page/create_testimony/CreateTestimony";
import EditTestimony from "./page/edit_testimony/EditTestimony";
import Repository from "./page/repository/Repository";
import AddArticle from "./page/add_article/AddArticle";
import OpenArticle from "./page/open_article/OpenArticle";
import EditPost from "./page/edit_post/EditPost";
import DeletePost from "./page/delete_post/DeletePost";
import ProfileTestimony from "./page/profile_testimony/ProfileTestimony";
import Exit from "./page/exit/Exit";
import ForgotPassword from "./page/forgot_password/ForgotPassword";
import PostOpened from "./page/post_opened/PostOpened";
import PostOpenedContact from "./page/post_opened_contact/PostOpenedContact";
import Chats from "./page/chats/Chats";
import ContactChat from "./page/contact_chat/ContactChat";

function RoutesPage() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index Component={Cover}/>
        <Route path="auth" Component={Auth}/>
        <Route path="create" Component={CreateAccount}/>
        <Route path="home" Component={Home}/>
        <Route path="contacts" Component={Contacts}/>
        <Route path="profile" Component={Profile}/>
        <Route path="create-post" Component={CreatePost}/>
        <Route path="contact-profile" Component={ContactProfile}/>
        <Route path="find" Component={FindPeople}/>
        <Route path="profile-posts" Component={ProfilePosts}/>
        <Route path="contact-posts" Component={ContactPosts}/>
        <Route path="testimony-contact" Component={ContactTestimony}/>
        <Route path="testimony-to-me" Component={TestimonyToMe}/>
        <Route path="create-testimony" Component={CreateTestimony}/>
        <Route path="edit-testimony" Component={EditTestimony}/>
        <Route path="repository" Component={Repository}/>
        <Route path="add-article" Component={AddArticle}/>
        <Route path="open-article" Component={OpenArticle}/>
        <Route path="edit-post" Component={EditPost}/>
        <Route path="delete-post" Component={DeletePost}/>
        <Route path="profile-testimony" Component={ProfileTestimony}/>
        <Route path="exit" Component={Exit}/>
        <Route path="forgot-password" Component={ForgotPassword}/>
        <Route path="post-opened" Component={PostOpened}/>
        <Route path="post-opened-contact" Component={PostOpenedContact}/>
        <Route path="chats" Component={Chats}/>
        <Route path="contact-chat" Component={ContactChat}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage