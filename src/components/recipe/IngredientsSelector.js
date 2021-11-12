import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
const IngredientsSelector = () => {
  const [chipList, setChipList] = useState([]);
  const materials = [
    { id: 1, name: "牛肉" },
    { id: 2, name: "青菜" },
    { id: 3, name: "漢堡包" },
  ];

  const handleChipList = (option) => {
    const list = [...chipList];
    const {name} = option;
    const isChipInList = list.find((chip) => chip === name);
    isChipInList ? list.pop(option) : list.push(option);

    setChipList(list);
  };
  console.log(chipList);

  return (
    <div className="ingredientsSelector">
      {/* search bar */}
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

      {/* ingredient item list */}
      <FormGroup>
        {materials.map((option) => (
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
      {/* ingredients badge */}
      {chipList.map((el) => (
        <Chip label={el.name} key={el.id} />
      ))}

      {/* check button */}
      <Button variant="text">確定</Button>
    </div>
  );
};

export default IngredientsSelector;
