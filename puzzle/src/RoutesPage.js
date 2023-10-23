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
import DeleteAccount from "./page/delete_account/DeleteAccount";
import EditAccount from "./page/edit_account/EditAccount";
import { AuthProvider } from "./context/AuthContext";

function RoutesPage() {
  return(
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route index element={<Cover/>}/>
        <Route path="add-article" element={<AddArticle/>}/>
        <Route path="auth" element={<Auth/>}/>
        <Route path="chats" element={<Chats/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="contact-chat" element={<ContactChat/>}/>
        <Route path="contact-posts" element={<ContactPosts/>}/>
        <Route path="contact-profile" element={<ContactProfile/>}/>
        <Route path="create" element={<CreateAccount/>}/>
        <Route path="create-post" element={<CreatePost/>}/>
        <Route path="create-testimony" element={<CreateTestimony/>}/>
        <Route path="delete-account" element={<DeleteAccount/>}/>
        <Route path="delete-post" element={<DeletePost/>}/>
        <Route path="edit-account" element={<EditAccount/>}/>
        <Route path="edit-post" element={<EditPost/>}/>
        <Route path="edit-testimony" element={<EditTestimony/>}/>
        <Route path="exit" element={<Exit/>}/>
        <Route path="find" element={<FindPeople/>}/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="open-article" element={<OpenArticle/>}/>
        <Route path="post-opened" element={<PostOpened/>}/>
        <Route path="post-opened-contact" element={<PostOpenedContact/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="profile-posts" element={<ProfilePosts/>}/>
        <Route path="profile-testimony" element={<ProfileTestimony/>}/>
        <Route path="repository" element={<Repository/>}/>
        <Route path="testimony-contact" element={<ContactTestimony/>}/>
        <Route path="testimony-to-me" element={<TestimonyToMe/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default RoutesPage