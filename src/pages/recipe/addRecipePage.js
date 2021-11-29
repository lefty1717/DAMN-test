import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import NameAndThumbnail from "../../components/recipe/addRecipe/NameAndThumbnail";
import RecipeSteps from "../../components/recipe/addRecipe/RecipeSteps";
import RecipeRating from "../../components/recipe/addRecipe/RecipeRating";
import RecipeIngredients from "../../components/recipe/addRecipe/RecipeIngredients";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../function/theme";
import ReviewRecipe from "../../components/recipe/addRecipe/PreviewRecipe";

const user = {
  id: "itjustauserid8888",
  name: "cube",
};

export default function AddRecipeStepper() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "輸入食譜名稱,  縮圖",
      component: <NameAndThumbnail />,
    },
    {
      label: "選擇所需食材標籤",
      component: <RecipeIngredients />,
    },
    {
      label: "新增食材步驟",
      component: <RecipeSteps />,
    },
    { label: "食譜難易度", component: <RecipeRating /> },
    { label: "預覽頁面並發布食譜", component: <ReviewRecipe /> },
  ];
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 子頁面 元件 */}
        <Box
          className="addRecipePage"
          sx={{ maxWidth: 400, width: "100%", flexGrow: 1, minHeight: "650px" }}
        >
          {steps[activeStep].component}
        </Box>
        {/* 上一步 下一步 */}
        <MobileStepper
          sx={{
            width: "100%",
            color: "primary.main",
          }}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: "primary.main" }}
            >
              下一步
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: "primary.main" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              上一步
            </Button>
          }
        />
      </Box>
    </ThemeProvider>
  );
}
