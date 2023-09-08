import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cover from "./page/cover/Cover"
import Auth from "./page/auth/Auth"
import CreateAccount from "./page/create_account/CreateAccount";
import Home from "./page/home/Home"
import Contacts from "./page/contacts/Contacts";
import Profile from "./page/profile/Profile";
import CreatePost from "./page/create_post/CreatePost";

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
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage