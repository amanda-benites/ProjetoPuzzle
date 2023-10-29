import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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

// Lógica para privar as rotas
const PrivateRoutes = ({children, redirectTo}) => {
  const isAuthenticated = localStorage.getItem("@Auth:token") !== null;
  console.log('isAuth', isAuthenticated)
  return isAuthenticated ? children : <Navigate to={redirectTo}/>
}

function RoutesPage() {
  return(
    <BrowserRouter>
      <Routes>
        {/* Rotas sem validação */}
        <Route index element={<Cover/>}/>
        <Route path="auth" element={<Auth/>}/>
        <Route path="create" element={<CreateAccount/>}/>

        {/* Rotas privadas */}
        <Route path="add-article" element={<PrivateRoutes redirectTo='/'>
          <AddArticle/>
        </PrivateRoutes>}/>
        <Route path="chats" element={<PrivateRoutes redirectTo='/'>
          <Chats/>
        </PrivateRoutes>}/>
        <Route path="contacts" element={<PrivateRoutes redirectTo='/'>
          <Contacts/>
        </PrivateRoutes>}/>
        <Route path="contact-chat" element={<PrivateRoutes redirectTo='/'>
          <ContactChat/>
        </PrivateRoutes>}/>
        <Route path="contact-posts" element={<PrivateRoutes redirectTo='/'>
          <ContactPosts/>
        </PrivateRoutes>}/>
        <Route path="contact-profile" element={<PrivateRoutes redirectTo='/'>
          <ContactProfile/>
        </PrivateRoutes>}/>
        <Route path="create-post" element={<PrivateRoutes redirectTo='/'>
          <CreatePost/>
        </PrivateRoutes>}/>
        <Route path="create-testimony" element={<PrivateRoutes redirectTo='/'>
          <CreateTestimony/>
        </PrivateRoutes>}/>
        <Route path="delete-account" element={<PrivateRoutes redirectTo='/'>
          <DeleteAccount/>
        </PrivateRoutes>}/>
        <Route path="delete-post" element={<PrivateRoutes redirectTo='/'>
          <DeletePost/>
        </PrivateRoutes>}/>
        <Route path="edit-account" element={<PrivateRoutes redirectTo='/'>
          <EditAccount/>
        </PrivateRoutes>}/>
        <Route path="edit-post" element={<PrivateRoutes redirectTo='/'>
          <EditPost/>
        </PrivateRoutes>}/>
        <Route path="edit-testimony" element={<PrivateRoutes redirectTo='/'>
          <EditTestimony/>
        </PrivateRoutes>}/>
        <Route path="exit" element={<PrivateRoutes redirectTo='/'>
          <Exit/>
        </PrivateRoutes>}/>
        <Route path="find" element={<PrivateRoutes redirectTo='/'>
          <FindPeople/>
        </PrivateRoutes>}/>
        <Route path="forgot-password" element={<PrivateRoutes redirectTo='/'>
          <ForgotPassword/>
        </PrivateRoutes>}/>
        <Route path="home" element={<PrivateRoutes redirectTo='/'>
          <Home/>
        </PrivateRoutes>}/>
        <Route path="open-article" element={<PrivateRoutes redirectTo='/'>
          <OpenArticle/>
        </PrivateRoutes>}/>
        <Route path="post-opened" element={<PrivateRoutes redirectTo='/'>
          <PostOpened/>
        </PrivateRoutes>}/>
        <Route path="post-opened-contact" element={<PrivateRoutes redirectTo='/'>
          <PostOpenedContact/>
        </PrivateRoutes>}/>
        <Route path="profile" element={<PrivateRoutes redirectTo='/'>
          <Profile/>
        </PrivateRoutes>}/>
        <Route path="profile-posts" element={<PrivateRoutes redirectTo='/'>
          <ProfilePosts/>
        </PrivateRoutes>}/>
        <Route path="profile-testimony" element={<PrivateRoutes redirectTo='/'>
          <ProfileTestimony/>
        </PrivateRoutes>}/>
        <Route path="repository" element={<PrivateRoutes redirectTo='/'>
          <Repository/>
        </PrivateRoutes>}/>
        <Route path="testimony-contact" element={<PrivateRoutes redirectTo='/'>
          <ContactTestimony/>
        </PrivateRoutes>}/>
        <Route path="testimony-to-me" element={<PrivateRoutes redirectTo='/'>
          <TestimonyToMe/>
        </PrivateRoutes>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage