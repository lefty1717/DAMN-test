import React, { useState } from "react";
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
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
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

function ImageStepper() {
  const theme = useTheme();
  SwiperCore.use([Pagination, Zoom]);
  const [swiper, setSwiper] = useState(null);
  const [{ newRecipeData }] = useStateValue();

  const [activeStep, setActiveStep] = useState(0);

  const slideTo = (index) => swiper.slideTo(index);
  const commands = [
    {
      command: ["下一步"],
      callback: () => {
        slideTo(swiper.activeIndex + 1);
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
      matchInterim: true,
    },
    {
      command: ["上一步"],
      callback: () => {
        slideTo(swiper.activeIndex - 1);
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
      matchInterim: true,
    },
  ];
  useSpeechRecognition({ commands });
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, position: "relative" }}>
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
        <ArrowBackIosIcon sx={{ color: "#ffffff" }} />
      </Paper>
      <Swiper
        className="swiper-zoom-container"
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={setSwiper}
        // loop={true}
        zoom
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Box
            component="img"
            sx={{
              height: 255,
              display: "block",
              maxWidth: 400,
              overflow: "hidden",
              width: "100%",
            }}
            src={newRecipeData?.thumbnail?.url}
          />
        </SwiperSlide>
        {newRecipeData?.steps?.map((step, index) => (
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
              src={step.imageURL}
              alt={step.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ImageStepper;
