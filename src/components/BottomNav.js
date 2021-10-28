import React from "react";
import AccountCircleIcon from "@material-ui/icons//AccountCircle";
import KitchenIcon from "@material-ui/icons//Kitchen";
import MenuBookIcon from "@material-ui/icons//MenuBook";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Box } from "@mui/system";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <AppBar className="" position="fixed" color="white">
        <Toolbar>
          <IconButton
            className="bottomNav__button active"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <MenuBookIcon />
            <p className="fs-1 m-unset">食譜</p>
          </IconButton>
          {/* <StyledFab color="secondary" aria-label="add">
              <KitchenIcon />
            </StyledFab> */}
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <IconButton color="inherit" className="bottomNav__button">
            <KitchenIcon />
            <p className="fs-1">冰箱管理</p>
          </IconButton>
          <IconButton color="inherit" className="bottomNav__button">
            <AccountCircleIcon />
            <p className="fs-1"> 個人</p>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BottomNav;
