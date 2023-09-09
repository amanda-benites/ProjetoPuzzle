import React from "react";
import StyledGlobal, { TelaInteira } from "./styleGlobal";

import RoutesPage from "./RoutesPage";
import EditPost from "./page/edit_post/EditPost";
import DeletePost from "./page/delete_post/DeletePost";

function App() {
  return (
    <>
      <TelaInteira>
        <StyledGlobal/>
        <RoutesPage/>

      {/* < EditPost /> */}
      {/* <DeletePost/> */}
      </TelaInteira>
    </>
  );
}

export default App;
