import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../components/TabPanel";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ data }) {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "470px",
        padding: "30px 0 0 0 ",
        fontSize: "24px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="#FE8B83"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {/* <Tab label="簡介" {...a11yProps(0)} sx={{ fontSize: "24px" }} /> */}
        <Tab label="食材" {...a11yProps(0)} sx={{ fontSize: "24px" }} />
        <Tab label="步驟" {...a11yProps(1)} sx={{ fontSize: "24px" }} />
      </Tabs>

      <Box
        sx={{
          bgcolor: "#f5f5f5",
          width: "95%",
          height: "100%",
          margin: "auto",
          overflow: "auto",
        }}
        className="TabPanel__box"
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>{data?.ingredientsInfo}</div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {data?.steps?.map((step, id) => (
            <li key={id}>
              <h3>{`步驟 ${id + 1}`}</h3>
              {step.content}
            </li>
          ))}
        </TabPanel>
      </Box>
    </Box>
  );
}
