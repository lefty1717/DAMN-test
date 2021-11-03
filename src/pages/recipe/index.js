import React from "react";
import IndexTop from "./IndexTop";
import IndexMiddle from "./IndexMiddle";
import RecipeItemPage from "./RecipeItemPage";

function index() {


  
  return (
    <div className="recipe__index">
      {/* <RecipeItemPage /> */}
      <IndexTop />
      <IndexMiddle />
    </div>
  );
}

export default index;
