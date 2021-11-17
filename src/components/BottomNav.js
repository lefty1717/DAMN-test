import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons//AccountCircle";
import KitchenIcon from "@material-ui/icons//Kitchen";
import MenuBookIcon from "@material-ui/icons//MenuBook";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
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
  let history = useHistory();
  const handleActiveClass = (id) => {
    setActiveBtnId(id);
  };
  const commands = [
    {
      command: ["開啟冰箱", "打開冰箱", "冰箱頁面"],
      callback: () => {
        setActiveBtnId(2);
        history.push("/fridge");
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.9, // 高於 80% 才確定
      bestMatchOnly: true,
    },
    {
      command: ["開啟個人頁面", "打開個人頁面", "個人頁面"],
      callback: () => {
        setActiveBtnId(3);
        history.push("/profile");
      },
    },
    {
      command: ["回到首頁", "打開首頁", "開啟首頁", "首頁"],
      callback: () => {
        setActiveBtnId(1);
        history.push("/");
      },
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
