import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import RemoveIcon from "@mui/icons-material/Remove";
import IngredientsSelector from "../../components/recipe/IngredientsSelector";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
const AddRecipePage = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [stepsList, setStepsList] = useState([]);
  const [chipList, setChipList] = useState([]);
  const ingredientsData = [
    { id: 1, name: "牛肉" },
    { id: 2, name: "青菜" },
    { id: 3, name: "漢堡包" },
  ];

  // 當對食材 checkbox 變動時，標籤一同變動
  const handleChipList = (selectedOption) => {
    let list = [...chipList];
    const isChipInList = list.find((el) => el.name === selectedOption.name)
      ? true
      : false;

    isChipInList
      ? (list = list.filter((el) => el.id !== selectedOption.id))
      : list.push(selectedOption);
    console.log("list: ", list);
    setChipList(list);
  };
  const user = {
    id: "itjustauserid8888",
    name: "cube",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const initStepsList = [{ content: "" }, { content: "" }, { content: "" }];
    setStepsList(initStepsList);
  }, []);

  // 新增步驟
  const createStepInputField = () => {
    setStepsList([...stepsList, { content: "" }]);
  };
  // 刪除步驟
  const deleteStepInputField = (id) => {
    setStepsList([...stepsList].filter((_, index) => index !== id));
  };

  // 在 步驟欄 寫下 敘述
  const handleStepContent = (e, id) => {
    const { value } = e.target;
    const list = [...stepsList];
    list[id] = { ...list[id], content: value };

    setStepsList(list);
  };

  // 傳送資料到 fireStore
  const handleSubmitRecipeData = (data) => {
    const result = {
      ...data,
      steps: stepsList,
      likes: 0,
      ingredientTags: chipList,
      createdAt: Date.now,
    };
    console.log("result: ", result);
  };

  return (
    <form
      className="addRecipePage"
      onSubmit={handleSubmit(handleSubmitRecipeData)}
    >
      {/* 食材名稱 */}
      <TextField
        id="name"
        label="食譜名稱"
        variant="standard"
        maxRows={4}
        required
        margin="dense"
        helperText="請輸入食譜名稱"
        {...register("name")}
      />
      {/* 食材標籤選擇器 */}
      <TextField
        sx={{
          left: "0px",
        }}
        className="ingredients"
        select
        label="新增食材標籤"
        placeholder="新增食材標籤"
        value={chipList}
        renderValue={(chipList) => {
          chipList.map((el) => <Chip label={el.name} key={el.id} />);
        }}
      >
        <IngredientsSelector
          chipList={chipList}
          handleChipList={handleChipList}
          ingredientsData={ingredientsData}
        />
      </TextField>

      {/* 食材所需量 */}
      <TextField
        id="filled-multiline-flexible"
        label="食材清單"
        multiline
        placeholder={`雞蛋 1顆 \n白飯 300 公克`}
        margin="dense"
        rows={4}
        {...register("ingredientsInfo")}
        variant="filled"
      />
      {/* map 所有步驟 透過按鈕新增刪除 inputField */}
      <h3>步驟</h3>
      {stepsList.map((_, id) => (
        <Box className="stepInputFieldContainer" key={id}>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-flexible"
            label={`步驟 ${id + 1}`}
            multiline
            margin="normal"
            rows={2}
            variant="filled"
            value={stepsList[id]?.content}
            onChange={(e) => handleStepContent(e, id)}
          />
          <Fab
            className="deleteStepBtn"
            onClick={() => deleteStepInputField(id)}
            variant="circle"
            size="small"
          >
            <RemoveIcon />
          </Fab>
        </Box>
      ))}
      {/* 新增步驟按鈕 */}
      <Fab aria-label="add" onClick={createStepInputField}>
        <AddIcon />
      </Fab>

      {/* 新增食譜按鈕 submit button */}
      <Button variant="contained" type="submit">
        發布食譜
      </Button>
    </form>
  );
};

export default AddRecipePage;
