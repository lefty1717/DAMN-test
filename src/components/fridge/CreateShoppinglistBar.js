import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';

//跳轉頁面
import { useNavigate } from 'react-router-dom';

function TopBar () {
  const navigate = useNavigate()
  const goToFridgePage = function(){
    navigate('/fridge');
  }

  return(
    <div className="topBar">
      <div className="topBar__container">
          <IconButton aria-label="KeyboardArrowLeftIcon" onClick={goToFridgePage}>
            <KeyboardArrowLeftIcon sx={{ color: "#FFFFFF" , width: "40px", height: "40px"}}/>
          </IconButton>
          <p>新增購物清單</p>
      </div>
    </div>
);
}

export default TopBar;