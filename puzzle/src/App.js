import React from "react";
import StyledGlobal, { TelaInteira } from "./styleGlobal";

import RoutesPage from "./RoutesPage";

import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <TelaInteira>
        <StyledGlobal/>
        <RoutesPage/>
      </TelaInteira>
    </AuthProvider>
  );
}

export default App;
