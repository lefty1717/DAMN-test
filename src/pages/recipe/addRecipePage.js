import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import IngredientsSelector from "../../components/recipe/IngredientsSelector";
import { createTheme, ThemeProvider, styled } from "@material-ui/core/styles";
const AddRecipePage = () => {
  const user = {
    name: "cube",
  };

  const [material, setMaterial] = useState("EUR");
  const [stepsList, setStepsList] = useState([{}, {}, {}]);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fe8b83",
      },
      // secondary: {
      //   main: green[500],
      // },
    },
  });

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };

  const createStepInputField = () => {
    /* 
    {  
      content: "將雞蛋攪拌均勻"
      imageURL: "https:// .....jpg"
      }
    */
    setStepsList([...stepsList, { content: "" }]);
  };

  const deleteStepInputField = () =>{

  }

  return (
    <ThemeProvider theme={theme}>
      <div className="addRecipePage">
        {/* image upload */}
        {/* 食材名稱 */}
        <TextField
          id="name"
          label="食譜名稱"
          variant="standard"
          maxRows={4}
          required
          margin="dense"
          helperText="請輸入食譜名稱"
        />
        {/* 食材標籤選擇器 */}
        <TextField
          sx={{
            left: "0px",
          }}
          className="ingredients"
          select
          label="新增食材標籤"
          placeholder="新增食材標籤"
          // value={materials}
          onChange={handleChangeMaterial}
          helperText="選擇食材標籤"
        >
          <IngredientsSelector />
        </TextField>
        {/* 食材所需量 */}
        <TextField
          id="filled-multiline-flexible"
          label="食材清單"
          multiline
          placeholder={`雞蛋 1顆 \n白飯 300 公克`}
          margin="dense"
          rows={4}
          // value={value}
          // onChange={handleChange}
          variant="filled"
        />
        {/* map 所有步驟 透過按鈕新增刪除 inputField */}
        <h3>步驟</h3>
        {stepsList.map((el, id) => (
          <TextField
            id="filled-multiline-flexible"
            key={id}
            label={`步驟 ${id + 1}`}
            multiline
            margin="normal"
            // maxRows={4}
            rows={2}
            variant="filled"
          />
        ))}

        <Fab color={"#fe8b83"} aria-label="add" onClick={createStepInputField}>
          <AddIcon />
        </Fab>
      

        {/* 新增食譜按鈕 submit button */}
      </div>
    </ThemeProvider>
  );
};

export default AddRecipePage;
