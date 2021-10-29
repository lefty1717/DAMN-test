import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SearchIcon from "@mui/icons-material/Search";
import Ticker from "react-ticker";

function IndexTop() {
  return (
    <div className="recipeIndexTop">
      <div className="recipeIndexTop__slogan">
        <VolumeUpIcon />

        <Ticker mode="smooth">
          {() => (
            <>
              <h4>開啟智能語音讓你更快速解決問題 </h4>
            </>
          )}
        </Ticker>
      </div>

      <div className="recipeIndexTop__title">
        <h4>你今天想要煮什麼？</h4>
        <div className="recipeIndexTop__input">
          <input type="text" placeholder="Search"></input>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default IndexTop;
