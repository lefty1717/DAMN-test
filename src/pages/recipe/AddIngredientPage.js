import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CATEGORIES = [
  { id: 1, name: "肉類" },
  { id: 2, name: "豆類" },
  { id: 3, name: "魚類" },
  { id: 4, name: "蔬菜類" },
  { id: 5, name: "穀物類" },
  { id: 6, name: "水果類" },
  { id: 7, name: "奶類" },
];
const AddIngredientPage = () => {
  const [category, setCategory] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h3>新增食材（管理者用）</h3>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChangeCategory}
        >
          {CATEGORIES.map(({ id, name }) => (
            <MenuItem key={id} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddIngredientPage;
