import React from "react";
import { IconButton } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
const NameAndThumbnail = ({ recipeData, setRecipeData }) => {
  const Input = styled("input")({
    display: "none",
  });
  const [{ newRecipeData }, dispatch] = useStateValue();
  // const { name, thumbnail } = newRecipeData;

  // 修改食譜名稱
  const handleRecipeName = (e) => {
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { ...newRecipeData, name: e.target.value },
    });
  };

  // 顯示 食譜縮圖 (show recipe thumbnail)
  const handleRecipeThumbnail = (e) => {
    const thumbnail = {
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    };
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { ...newRecipeData, thumbnail: thumbnail },
    });
  };
  return (
    <Box sx={{ p: 2 }}>
      {/* 食譜名稱 */}
      <TextField
        fullWidth
        id="name"
        label="食譜名稱"
        variant="outlined"
        maxRows={4}
        required
        margin="dense"
        value={newRecipeData?.name}
        onChange={handleRecipeName}
      />
      {/* 食譜封面圖片 */}
      <img src={newRecipeData?.thumbnail?.url} alt="" loading="lazy" />

      <label htmlFor="icon-button-file">
        <Input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={handleRecipeThumbnail}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Box>
  );
};

export default NameAndThumbnail;
