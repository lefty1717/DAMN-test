import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import useSearch from "../../../hooks/useSearch";
// import { useSpeechRecognition } from "react-speech-recognition";
// import { split } from "lodash";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// mock unit data
const unitData = [
  { id: 1, name: "公克" },
  { id: 2, name: "斤" },
  { id: 3, name: "半匙" },
];
const RecipeIngredients = () => {
  const [servingCount, setServingCount] = useState(1);
  const [cookTime, setCookTime] = useState(0);
  const [selectedIngredientTags, setSelectedIngredientTags] = useState([]);
  const [selectedIngredientsInfo, setSelectedIngredientsInfo] = useState([]);
  const [{ newRecipeData }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const ingredientsData = useSearch("ingredients", searchTerm);
  // const result = useSearch("recipes", searchTerm);
  console.log("result: ", ingredientsData);
  // console.log("selectedIngredientTags: ", selectedIngredientTags);
  
  // 以下註解是我用來測試食譜語音搜尋的實驗
  // const commands = [
  //   {
  //     command: ["幫我搜尋*", "查詢*"],
  //     callback: (command) => {
  //       //  handleSpeakAndResponse("什麼事？");
  //       console.log(command);
  //       const query = split(finalTranscript, command).pop();
  //       console.log(query);

  //       setSearchTerm(query);
  //     },
  //     isFuzzyMatch: true, // 模糊匹配
  //     bestMatchOnly: true,
  //     matchInterim: true,
  //   },
  // ];
  // const { finalTranscript } = useSpeechRecognition({ commands });

  // 修改份數 serving
  const handleServingCount = (e) => {
    setServingCount(e.target.value);
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { ...newRecipeData, serving: parseInt(e.target.value) },
    });
  };
  // 修改料理時間 cookTime
  const handleCookTime = (e) => {
    setCookTime(e.target.value);
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { ...newRecipeData, cookTime: parseInt(e.target.value) },
    });
  };

  // 食材標籤
  const handleIngredientTags = (value) => {
    setSelectedIngredientTags(value);
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: {
        ...newRecipeData,
        ingredientTags: value,
      },
    });
  };

  // 選中食材的量
  const handleIngredientCount = (e, id, name) => {
    const info = [...selectedIngredientsInfo];
    info[id] = {
      ...info[id],
      name: name,
      count: e.target.value,
    };

    setSelectedIngredientsInfo(info);
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { ...newRecipeData, ingredientsInfo: info },
    });
  };

  // 選中食材單位
  const handleIngredientUnit = (id, value) => {
    // console.log(`selected: ${id} unit: ${unit}`);
    const info = [...selectedIngredientsInfo];
    info[id] = {
      ...info[id],
      unit: value,
    };
    setSelectedIngredientsInfo(info);
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { ...newRecipeData, ingredientsInfo: info },
    });
  };

  // 搜尋欄 onChange 事件
  const onSearchChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    if (newRecipeData.ingredientsInfo.length !== 0) {
      setSelectedIngredientsInfo(newRecipeData?.ingredientsInfo);
    }

    if (newRecipeData.ingredientTags.length !== 0) {
      setSelectedIngredientTags(newRecipeData?.ingredientTags);
    }
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      {/*  適合人份  */}
      <Typography variant="h6" gutterBottom component="div">
        適合人份
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} required>
        <InputLabel htmlFor="outlined-adornment-amount">人數</InputLabel>
        <OutlinedInput
          type="number"
          id="outlined-adornment-amount"
          value={servingCount}
          onChange={handleServingCount}
          endAdornment={<InputAdornment position="start">人份</InputAdornment>}
          label="Serving"
        />
      </FormControl>
      {/*  料理時間  */}
      <Typography variant="h6" gutterBottom component="div">
        料理時間
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} required>
        <InputLabel htmlFor="outlined-adornment-amount">料理時間</InputLabel>
        <OutlinedInput
          type="number"
          id="outlined-adornment-amount"
          value={cookTime}
          onChange={handleCookTime}
          endAdornment={<InputAdornment position="start">分鐘</InputAdornment>}
          label="CookTime"
        />
      </FormControl>
      {/* 搜尋食材 search bar */}
      <Typography variant="h6" gutterBottom component="div">
        所需食材
      </Typography>
      <Autocomplete
        multiple
        id="selectedIngredientTags"
        freeSolo
        filterSelectedOptions
        options={ingredientsData}
        noOptionsText="查無，試試其他關鍵字！"
        loadingText="載入中"
        onChange={(_, value) => handleIngredientTags(value)}
        onInputChange={onSearchChange}
        popupIcon={<SearchIcon />}
        disableCloseOnSelect
        isOptionEqualToValue={(option, value) => option.id === value.id}
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
      {selectedIngredientTags.map((selectedIngredient, index) => (
        <Box
          key={selectedIngredient?.id}
          sx={{ display: "flex", alignItems: "center", my: 2 }}
        >
          <TextField
            label={`食材`}
            type="number"
            id="standard-start-adornment"
            sx={{ my: 2, flex: 1 }}
            defaultValue={selectedIngredientsInfo[index]?.count}
            onChange={(e) =>
              handleIngredientCount(e, index, selectedIngredient?.name)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {selectedIngredient.name} :
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={unitData}
            freeSolo
            getOptionLabel={(option) => option.name}
            // defaultValue={selectedIngredient?.unit.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_, value) => handleIngredientUnit(index, value)}
            sx={[
              { width: "100px" },
              {
                "&  .css-4n7jhh-MuiInputBase-root-MuiInput-root": {
                  mt: "16px",
                },
              },
              {
                "& .css-1q60rmi-MuiAutocomplete-endAdornment": {
                  top: 0,
                },
              },
            ]}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                onChange={(e) => handleIngredientUnit(index, e.target.value)}
                label="單位"
              />
            )}
          />
        </Box>
      ))}
    </Box>
  );
};

export default RecipeIngredients;
