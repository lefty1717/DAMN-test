import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import RemoveIcon from "@mui/icons-material/Remove";
import IngredientsSelector from "../../components/recipe/IngredientsSelector";
import { createTheme, ThemeProvider, styled } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

const AddRecipePage = () => {
  const user = {
    id: "itjustauserid8888",
    name: "cube",
  };

  const [material, setMaterial] = useState("EUR");
  const [stepsList, setStepsList] = useState([]);
  console.log(stepsList);
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

  useEffect(() => {
    const initStepsList = [{ content: "" }, { content: "" }, { content: "" }];

    setStepsList(initStepsList);
  }, []);

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };

  const createStepInputField = () => {
    /* 
    {  
      id: 1
      content: "將雞蛋攪拌均勻"
      imageURL: "https:// .....jpg"
      }
    */
    setStepsList([...stepsList, { content: "" }]);
  };

  const deleteStepInputField = (id) => {
    setStepsList([...stepsList].filter((_, index) => index !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="addRecipePage">
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
        {stepsList.map((_, id) => (
          <Box className="stepInputFieldContainer" key={id}>
            <TextField
              sx={{ width: "100%" }}
              id="filled-multiline-flexible"
              label={`步驟 ${id + 1}`}
              multiline
              margin="normal"
              rows={2}
              variant="filled"
            />
            <Fab
              className="deleteStepBtn"
              onClick={() => deleteStepInputField(id)}
              variant="circle"
              size="small"
            >
              <RemoveIcon />
            </Fab>
          </Box>
        ))}

        <Fab aria-label="add" onClick={createStepInputField}>
          <AddIcon />
        </Fab>

        {/* 新增食譜按鈕 submit button */}

        <Button variant="contained">發布食譜</Button>
      </div>
    </ThemeProvider>
  );
};

export default AddRecipePage;
