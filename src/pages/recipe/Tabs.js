import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "2",
            paddingTop: "10px",
            whiteSpace: "pre-wrap",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ data }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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
        {/* <TabPanel value={value} index={0} dir={theme.direction}>
          番茄肉醬麵是義大利麵食譜中最簡單的料理做法，只要有一瓶番茄糊、義式香料就能搞定
          ，加了滿滿一盤肉醬的義大利麵，只有自己做才有這種滿足感 。
        </TabPanel> */}
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
          {/* <ul>
                    <li>步驟1:加入少許的橄欖油，把洋蔥、蒜頭切末下鍋炒至軟。</li>
                    <li>步驟2:放入豬絞肉鋪平，用中火煎至豬絞肉焦香時再翻面，繼續煎至二面焦焦的再弄散</li>
                    <li>步驟3. 炒番茄肉醬需花費15分鐘，同時也可以煮義大利麵。水滾後放入義大利麵加入少許的橄欖油、鹽巴。義大利麵下鍋約煮12分鐘就撈起</li>
                    <li>步驟4：接著倒入番茄糊整罐、加入月桂葉、鹽巴、義大利香料、二匙煮麵水，攪拌均勻繼續煮10分鐘。</li>
                    <li>步驟5：步驟4平底鍋的底部會收乾醬汁，可以稍微用煎匙滑動鍋底，起鍋前再利用海鹽、義大利香料完成最後的調味。</li>
                </ul> */}
        </TabPanel>
      </Box>
    </Box>
  );
}
