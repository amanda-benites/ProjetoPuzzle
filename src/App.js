import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyleGlobal, { TelaInteira } from "./styleGlobal";

import Cover from "./page/cover/Cover"
import Auth from "./page/auth/Auth"
import CreateAccount from "./page/create_account/CreateAccount";

function App() {
  return (
    <>
      <StyleGlobal/>
      <TelaInteira>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Cover}/>
            <Route path="/auth" Component={Auth}/>
            <Route path="/create" Component={CreateAccount}/>
          </Routes>
        </BrowserRouter>
      </TelaInteira>
    </>
  );
}

export default App;
