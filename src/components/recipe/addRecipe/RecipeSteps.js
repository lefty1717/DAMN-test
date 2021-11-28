import { Button, Divider, Fab, IconButton, TextField } from "@material-ui/core";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const initStepsList = [{ content: "" }, { content: "" }, { content: "" }];
const RecipeSteps = ({ recipeData, setRecipeData }) => {
  const [stepsList, setStepsList] = useState([]);

  useEffect(() => {
    setStepsList(initStepsList);
  }, []);

  // 新增步驟
  const createStepInputField = () => {
    setStepsList([...stepsList, { content: "" }]);
    // setRecipeData({ ...recipeData, steps: [{ content: "" }] });
  };
  // 刪除步驟
  const deleteStepInputField = (id) => {
    setStepsList([...stepsList].filter((_, index) => index !== id));
    setRecipeData();
  };

  // 在 步驟欄 寫下 敘述
  const handleStepContent = (e, id) => {
    const { value } = e.target;
    const list = [...stepsList];
    list[id] = { ...list[id], content: value };
    console.log("selected step content id: ", id);
    setStepsList(list);
  };
  // 在步驟欄顯示 步驟圖片
  const showStepImage = (e, id) => {
    const { files } = e.target;
    const list = [...stepsList];

    console.log("selected step image id: ", id);
    list[id] = {
      ...list[id],
      image: files[0],
      imageURL: URL.createObjectURL(files[0]),
    };
    setStepsList(list);
  };
  console.log("stepsList: ", stepsList);
  return (
    <Box sx={{ p: 2 }}>
      {/* map 所有步驟 透過按鈕新增刪除 inputField */}
      {stepsList.map((_, id) => (
        <Box className="stepInputFieldContainer" key={id}>
          <TextField
            fullWidth
            id="filled-multiline-flexible"
            label={`步驟 ${id + 1}`}
            multiline
            margin="normal"
            rows={2}
            variant="outlined"
            value={stepsList[id]?.content}
            onChange={(e) => handleStepContent(e, id)}
          />
          {/* 步驟圖片顯示 */}
          <label htmlFor="icon-button-file">
            {/* 不要用 Input 會有問題 */}
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => showStepImage(e, id)}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <img src={stepsList[id]?.imageURL} alt="" loading="lazy" />
          <Fab
            className="deleteStepBtn"
            onClick={() => deleteStepInputField(id)}
            variant="circle"
            size="small"
          >
            <RemoveIcon />
          </Fab>
          <Divider variant="middle" />
        </Box>
      ))}
      {/* 新增食譜步驟按鈕 */}
      {/* <Fab aria-label="add" onClick={createStepInputField}>
        <AddIcon />
      </Fab> */}

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={createStepInputField}
      >
        新增步驟
      </Button>
    </Box>
  );
};

export default RecipeSteps;
