import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons//AccountCircle";
import KitchenIcon from "@material-ui/icons//Kitchen";
import MenuBookIcon from "@material-ui/icons//MenuBook";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-recognition";
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

const BottomNav = () => {
  const [activeBtnId, setActiveBtnId] = useState(1);
  let navigate = useNavigate();
  const handleActiveClass = (id) => {
    setActiveBtnId(id);
  };
  const commands = [
    {
      command: ["開啟冰箱", "打開冰箱", "冰箱(頁面)"],
      callback: () => {
        setActiveBtnId(2);
        navigate("/fridge");
      },
      // isFuzzyMatch: true, // 模糊匹配
      // fuzzyMatchingThreshold: 0.9, // 高於 80% 才確定
      // bestMatchOnly: true,
      matchInterim: true,
    },
    {
      command: ["開啟個人頁面", "(打開)個人頁面", "個人(頁面)"],
      callback: () => {
        setActiveBtnId(3);
        navigate("/profile");
      },
      matchInterim: true,
    },
    {
      command: ["回到首頁", "打開首頁", "(開啟)首頁", "(開啟)食譜"],
      callback: () => {
        setActiveBtnId(1);
        navigate("/");
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.9, // 高於 80% 才確定
      bestMatchOnly: true,
      matchInterim: true,
    },
  ];
  useSpeechRecognition({ commands });

  return (
    <div className="bottomNav">
      <AppBar>
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
