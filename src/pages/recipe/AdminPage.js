import React from "react";
import TabPanel from "../../components/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddIngredientPage from "./AddIngredientPage";
import a11yProps from "../../function/a11yProps";
import NotFoundPage from "../NotFoundPage";
import AddRecipeStepper from "../../components/recipe/AddRecipeStepper";
import BottomNav from "../../components/BottomNav";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../function/theme";

const AdminPage = () => {
  const user = { auth: "admin", name: "cuboid" };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      {user.auth === "admin" ? (
        <Box
          sx={{
            pb: 7,
            pt: 7,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 上方導覽列 */}
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              color: "primary.main",
              bgcolor: "white.main",
            }}
            centered
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="新增食譜" {...a11yProps(0)} />
              <Tab label="新增食材" {...a11yProps(1)} />
              <Tab label="使用者管理" {...a11yProps(2)} />
              <Tab label="發布通知" {...a11yProps(3)} />
              <Tab label="表格" {...a11yProps(4)} />
            </Tabs>
          </Box>
          {/* 子頁面 */}
          <Box sx={{ width: "100%", flex: "1" }}>
            <TabPanel value={value} index={0}>
              <AddRecipeStepper />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AddIngredientPage />
            </TabPanel>
            <TabPanel value={value} index={2} disabled>
              Item Three
            </TabPanel>
          </Box>
          {/* 下方導覽列 */}
          <BottomNav />
        </Box>
      ) : (
        <NotFoundPage />
      )}
    </ThemeProvider>
  );
};

export default AdminPage;
