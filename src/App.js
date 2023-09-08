import React from "react";
import StyledGlobal, { TelaInteira } from "./styleGlobal";

// import Cover from "./page/cover/Cover"
// import Auth from "./page/auth/Auth"
// import CreateAccount from "./page/create_account/CreateAccount";
// import Home from "./page/home/Home"
// import Contacts from "./page/contacts/Contacts";
// import Profile from "./page/profile/Profile";
// import CreatePost from "./page/create_post/CreatePost";
import RoutesPage from "./RoutesPage";

function App() {
  return (
    <>
      <TelaInteira>
        <StyledGlobal/>
        <RoutesPage/>
      </TelaInteira>
    </>
  );
}

export default App;
