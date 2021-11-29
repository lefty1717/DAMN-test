import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IconButton } from "@material-ui/core";
import { Typography } from "@mui/material";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// mock data
const ingredientsData = [
  { id: 1, name: "牛肉" },
  { id: 2, name: "青菜" },
  { id: 3, name: "漢堡包" },
];
const RecipeIngredients = () => {
  const [checked, setChecked] = useState([1]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom component="div">
        適合人份
      </Typography>
      {/* 搜尋欄 search bar */}
      <Typography variant="h6" gutterBottom component="div">
        所需食材
      </Typography>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={ingredientsData}
        noOptionsText="查無，試試其他關鍵字！"
        loadingText="載入中"
        onChange={(_, value) => setSelectedIngredients(value)}
        onInputChange={(e) => console.log("fetch data from fireStore")}
        popupIcon={<SearchIcon />}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="搜尋食材" placeholder="食材" />
        )}
      />
     
    </Box>
  );
};

export default RecipeIngredients;
