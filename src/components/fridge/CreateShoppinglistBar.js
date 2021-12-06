import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';



function TopBar () {
  return(
    <div className="topBar">
      <div className="topBar__container">
          <IconButton aria-label="KeyboardArrowLeftIcon">
            <KeyboardArrowLeftIcon sx={{ color: "#FFFFFF" , width: "32px", height: "32px"}}/>
          </IconButton>
          <p>新增購物清單</p>
      </div>
    </div>
);
}

export default TopBar;