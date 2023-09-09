import React from "react";
import StyledGlobal, { TelaInteira } from "./styleGlobal";

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
