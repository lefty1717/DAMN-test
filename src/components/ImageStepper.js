import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSpeechRecognition } from "react-speech-recognition";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Zoom } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { MobileStepper } from "@mui/material";
import { ThemeProvider } from "@mui/system";
const images = [
  {
    id: 1,
    content: "San Francisco – Oakland Bay Bridge, United States",
    imageURL:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    id: 2,
    content: "Bird",
    imageURL:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    id: 3,
    content: "Bali, Indonesia",
    imageURL:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    id: 4,
    content: "Goč, Serbia",
    imageURL:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function ImageStepper({ data }) {
  // AI
  const commands = [
    {
      command: ["下一步"],
      callback: () => {
        console.log("next swiper: ", swiper);
        swiper.slideNext();
        console.log("after next swiper: ");
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
      // matchInterim: true,
    },
    {
      command: ["上一步"],
      callback: () => {
        console.log("prev swiper: ", swiper);
        swiper?.slidePrev();
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
      // matchInterim: true,
    },
  ];
  useSpeechRecognition({ commands });

  let navigate = useNavigate();
  const theme = useTheme();
  SwiperCore.use([Pagination, Zoom]);
  const [swiper, setSwiper] = useState(null);
  const [displayList, setDisplayList] = useState([]);
  const maxStep = displayList.length;
  const [{ newRecipeData }] = useStateValue();

  // 按下返回按鈕 回到首頁
  const handleGoBackToHomePage = () => navigate("/");

  useEffect(() => {
    if (!swiper) return;
    console.log("swiper: ", swiper);
    console.log("activeIndex: ", swiper.activeIndex);
  }, [swiper]);

  useEffect(() => {
    handleDisplayList();
  }, [data]);

  // 將 料理名稱、縮圖和步驟內容、圖片放在同一個陣列，以便在滑動時能顯示
  const handleDisplayList = () => {
    let list = [{ imageURL: data.thumbnail.url, content: data.name }];
    data.steps.map((step) => {
      list.push({ imageURL: step.imageURL, content: step.content });
      return list;
    });
    setDisplayList(list);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400, flexGrow: 1, position: "relative" }}>
        {/* top Bar */}
        <Paper
          className="topBar"
          square
          elevation={0}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "transparent",
            position: "absolute",
            top: 0,
            zIndex: "2",
          }}
        >
          <ArrowBackIosIcon
            sx={{ color: "#ffffff" }}
            onClick={handleGoBackToHomePage}
          />
        </Paper>
        {/* thumbnail &  steps images */}
        <Swiper
          className="swiper-zoom-container"
          spaceBetween={0}
          slidesPerView={1}
          // onDoubleTap={() => console.log('object')}
          // onRealIndexChange={(swiper) => console.log("ss: ", swiper)}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => setSwiper(Object.create(swiper))}
          // loop
          zoom
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {displayList.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={item.imageURL}
                alt={item.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* steps content */}
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{displayList[swiper?.activeIndex]?.content}</Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default ImageStepper;
