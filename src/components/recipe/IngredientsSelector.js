import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";

const IngredientsSelector = ({ chipList, handleChipList, ingredientsData }) => {
  return (
    <div className="ingredientsSelector">
      {/* 搜尋欄 search bar */}
      <div className="inputContainer">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="搜尋食材標籤"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>

      {/* 可打勾的選項 */}
      <FormGroup>
        {ingredientsData.map((option) => (
          <FormControlLabel
            sx={{
              margin: "0",
            }}
            key={option.id}
            control={<Checkbox onChange={() => handleChipList(option)} />}
            label={option.name}
          />
        ))}
      </FormGroup>

      {/* 選中的小標籤 ingredient chips */}
      {chipList.map((el) => (
        <Chip label={el.name} key={el.id} />
      ))}

      {/* 儲存按鈕 check button */}
      <Button variant="text">確定</Button>
    </div>
  );
};

export default IngredientsSelector;
