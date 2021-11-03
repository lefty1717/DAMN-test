import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const AddRecipePage = () => {
  const user = {
    name: "cube",
  };

  const materials = [
    { id: 1, name: "牛肉" },
    { id: 2, name: "青菜" },
    { id: 3, name: "漢堡包" },
  ];
  const [material, setMaterial] = useState("EUR");

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };

  return (
    <div>
      {/* image upload */}
      {/* recipe basic form  like name, author(default is user.name) */}
      <TextField
        id="name"
        label="食譜名稱"
        variant="standard"
        maxRows={4}
        required
        helperText="請輸入食譜名稱"
      />
      <TextField
        required
        maxRows={4}
        id="author"
        defaultValue={user.name}
        label="作者"
        variant="standard"
        helperText="請輸入作者"
      />
      {/* recipe materials dropdown is a components!! */}
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={materials}
        onChange={handleChangeMaterial}
        helperText="Please select your currency"
      >
        {materials.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      {/* text block use hack.md  */}
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        // maxRows={4}
        rows={25}
        // value={value}
        // onChange={handleChange}
        variant="filled"
      />
      {/* display block use hack.md */}
      {/* fast build template button */}
      {/* submit button */}
    </div>
  );
};

export default AddRecipePage;
