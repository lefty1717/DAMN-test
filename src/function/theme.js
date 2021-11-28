import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      // 主色 粉色
      main: "#fe8b83",
    },
    secondary: {
      // 副色 冰箱藍色
      main: "#11cb5f",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#00000",
    },
    gray: {
      text: "#444545",
    },
  },
});

export default theme;
