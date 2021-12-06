import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../components/TabPanel";
import a11yProps from "../../function/a11yProps";
import { useSpeechRecognition } from "react-speech-recognition";
import { ThemeProvider } from "@mui/system";
import theme from "../../function/theme";
import { Typography } from "@mui/material";

export default function FullWidthTabs({ data }) {
  const [value, setValue] = useState(0);
  const [activeStepId, setActiveStepId] = useState(-1);
  const maxStep = data?.steps?.length;
  console.log("value: ", value);
  console.log("activeStepId: ", activeStepId);

  // 移動 tab 食材 或 步驟
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // 小當家指令
  const commands = [
    {
      command: ["下一步", "上一"],
      callback: () => {
        setValue(1);
        setActiveStepId(
          (activeStep) => activeStep < maxStep && activeStep + 1
        );
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
      matchInterim: true,
    },
    {
      command: ["上一步", "下一"],
      callback: () => {
        setActiveStepId((activeStep) => activeStep > 0 && activeStep - 1);
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
    },
  ];
  useSpeechRecognition({ commands });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "470px",
          pt: 2,
          fontSize: "24px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {/* <Tab label="簡介" {...a11yProps(0)} sx={{ fontSize: "24px" }} /> */}
          <Tab label="食材" {...a11yProps(0)} sx={{ fontSize: "24px" }} />
          <Tab label="步驟" {...a11yProps(1)} sx={{ fontSize: "24px" }} />
        </Tabs>

        <Box sx={{ p: 2 }} className="TabPanel__box">
          <TabPanel value={value} index={0} dir={theme.direction}>
            {data?.ingredientsInfo.map((ingredient, id) => (
              <Typography key={id} variant="h6" component="h6" paragraph>
                {ingredient.name}: {ingredient.count} {ingredient.unit.name}
              </Typography>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {data?.steps?.map((step, id) => (
              <li key={id} className={id === activeStepId ? "activeStep" : ""}>
                <h3>{`步驟 ${id + 1}`}</h3>
                {step.content}
              </li>
            ))}
          </TabPanel>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
