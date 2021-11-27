import React from "react";
import TabPanel from "../../components/TabPanel";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddRecipePage from "./AddRecipePage";
import AddIngredientPage from "./AddIngredientPage";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const AdminPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="新增食譜" {...a11yProps(0)} sx={{ width: "33%" }} />
          <Tab label="新增食材" {...a11yProps(1)} sx={{ width: "33%" }} />
          <Tab label="Item Three" {...a11yProps(2)} sx={{ width: "33%" }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddRecipePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddIngredientPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default AdminPage;
