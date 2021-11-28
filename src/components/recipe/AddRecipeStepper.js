import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import NameAndThumbnail from "./addRecipe/NameAndThumbnail";
// import MultipleSelectChip from "./MultipleSelectChip";
import RecipeSteps from "./addRecipe/RecipeSteps";
import BottomNav from "../BottomNav";
import RecipeRating from "./addRecipe/RecipeRating";
import RecipeIngredients from "./addRecipe/RecipeIngredients";
import { Typography } from "@material-ui/core";
import { Paper } from "@mui/material";

const user = {
  id: "itjustauserid8888",
  name: "cube",
};
const initStepsList = [{ content: "" }, { content: "" }, { content: "" }];

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
  ];
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      {/* <Paper
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
        <Typography>{steps[activeStep].label}</Typography>
      </Paper> */}
      <Box sx={{ maxWidth: 400, width: "100%", flexGrow: 1 }}>
        {steps[activeStep].component}
      </Box>
      <MobileStepper
        sx={{
          boxSizing: "border-box",
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
  );
}
