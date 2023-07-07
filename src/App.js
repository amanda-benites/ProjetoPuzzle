import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyleGlobal, { TelaInteira } from "./styleGlobal";

import Cover from "./page/cover/Cover"
import Auth from "./page/auth/Auth"

function App() {
  return (
    <>
      <StyleGlobal/>
      <TelaInteira>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Cover}/>
            <Route path="/auth" Component={Auth}/>
          </Routes>
        </BrowserRouter>
      </TelaInteira>
    </>
  );
}

export default App;
