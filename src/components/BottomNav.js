import React, { useState, useRef } from "react";
import AccountCircleIcon from "@material-ui/icons//AccountCircle";
import KitchenIcon from "@material-ui/icons//Kitchen";
import MenuBookIcon from "@material-ui/icons//MenuBook";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const btnList = [
    {
      id: 1,
      title: "食譜",
      icon: <MenuBookIcon />,
      routeTo: "/",
    },
    {
      id: 2,
      title: "冰箱管理",
      icon: <KitchenIcon />,
      routeTo: "/fridge",
    },
    {
      id: 3,
      title: "個人",
      icon: <AccountCircleIcon />,
      routeTo: "/profile",
    },
  ];
  const [activeBtnId, setActiveBtnId] = useState("");

  const handleActiveClass = (id) => {
    console.log(id);
    setActiveBtnId(id);
  };
  return (
    <div className="bottomNav">
      <AppBar color="transparent">
        <Toolbar>
          {btnList.map((btn) => (
            <IconButton
              className={`bottomNav__button ${
                activeBtnId === btn.id && "active"
              }`}
              key={btn.id}
              onClick={() => handleActiveClass(btn.id)}
            >
              <Link to={btn.routeTo}>
                {btn.icon}
                <p className="fs-1">{btn.title}</p>
              </Link>
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BottomNav;
