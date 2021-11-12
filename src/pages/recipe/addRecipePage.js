import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import IngredientsSelector from "../../components/recipe/IngredientsSelector";
const AddRecipePage = () => {
  const user = {
    name: "cube",
  };

  const [material, setMaterial] = useState("EUR");

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };

  return (
    <div className="addRecipePage">
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
      {/* <TextField
        required
        maxRows={4}
        id="author"
        defaultValue={user.name}
        label="作者"
        variant="standard"
        helperText="請輸入作者"
      /> */}
      {/* recipe materials dropdown is a components!! */}

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
        helperText="Please select your currency"
      >
        <IngredientsSelector />
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
