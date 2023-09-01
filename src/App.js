import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyledGlobal, { TelaInteira } from "./styleGlobal";

import Cover from "./page/cover/Cover"
import Auth from "./page/auth/Auth"
import CreateAccount from "./page/create_account/CreateAccount";
import Home from "./page/home/Home"

function App() {
  return (
    <>
      <TelaInteira>
        <StyledGlobal/>
        <BrowserRouter>
          <Routes>
            <Route index Component={Cover}/>
            <Route path="/auth" Component={Auth}/>
            <Route path="/create" Component={CreateAccount}/>
            <Route path="/home" Component={Home}/>
          </Routes>
        </BrowserRouter>
      </TelaInteira>
    </>
  );
}

export default App;
