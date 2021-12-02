import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IconButton } from "@material-ui/core";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
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
  console.log(selectedIngredients);

  return (
    <Box sx={{ p: 2 }}>
      {/*  適合人份  */}
      <Typography variant="h6" gutterBottom component="div">
        適合人份
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">人數</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          // value={values.amount}
          // onChange={handleChange("amount")}
          endAdornment={<InputAdornment position="start">人份</InputAdornment>}
          label="Amount"
        />
      </FormControl>
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
      {/* 列出所選食材所需單位 text field */}
      {selectedIngredients.map((selectedIngredient) => (
        <Box key={selectedIngredient.id}>
          <TextField
            
            label={`食材 ${selectedIngredient.id}`}
            id="standard-start-adornment"
            sx={{ m: 2, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {selectedIngredient.name}
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <FormControl sx={{ width: "8ch" }}>
            <InputLabel id="demo-simple-select-label">單位</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="單位"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
        </Box>
      ))}
    </Box>
  );
};

export default RecipeIngredients;
