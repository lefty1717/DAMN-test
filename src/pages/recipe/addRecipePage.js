import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import MultipleSelectChip from "../../components/recipe/MultipleSelectChip";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
// mock data
const ingredientsData = [
  { id: 1, name: "牛肉" },
  { id: 2, name: "青菜" },
  { id: 3, name: "漢堡包" },
];
const user = {
  id: "itjustauserid8888",
  name: "cube",
};
const initStepsList = [{ content: "" }, { content: "" }, { content: "" }];

const AddRecipePage = () => {
  const [stepsList, setStepsList] = useState([]);
  const [chipList, setChipList] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const CURRENT_TIME_IN_NANOSECONDS = window.performance.now();
  const Input = styled("input")({
    display: "none",
  });

  useEffect(() => {
    setStepsList(initStepsList);
  }, []);

  // 當對食材 ChipList 變動時，標籤一同變動
  const handleChipList = (event) => {
    const {
      target: { value },
    } = event;
    // console.log(value);
    setChipList(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
  // 在步驟欄上傳步驟圖片
  const uploadStepImage = (e, id) => {
    const { files } = e.target;
    const list = [...stepsList];
    list[id] = {
      ...list[id],
      image: files[0],
      imageURL: URL.createObjectURL(files[0]),
    };
    setStepsList(list);
  };
  console.log("stepsList: ", stepsList);

  // 傳送資料到 fireStore
  const handleSubmitRecipeData = async (data) => {
    const remoteURL = await createThumbnailRemoteURL(thumbnail.data);
    const result = {
      ...data,
      steps: stepsList,
      likes: 0,
      ingredientTags: chipList,
      createdAt: CURRENT_TIME_IN_NANOSECONDS,
      authorId: user.id,
      thumbnail: remoteURL,
    };

    console.log("result: ", result);
    // const docRef = await addDoc(collection(db, "recipes"), result);
    // console.log("Document written with ID: ", docRef.id);

    setStepsList(initStepsList);
    setChipList([]);
    setThumbnail(null);
  };

  // get remote thumbnail URL
  const createThumbnailRemoteURL = async (data) => {
    const recipesRef = ref(storage, `recipes/${data.name}`);
    uploadBytes(recipesRef, data).then((snapshot) => {
      console.log("Uploaded success");
    });
    const remoteURL = await getDownloadURL(recipesRef);

    return remoteURL;
  };

  // 預覽食譜封面圖片 show thumbnail image
  const uploadRecipeThumbnail = (e) => {
    const {
      target: { files },
    } = e;
    setThumbnail({
      data: files[0],
      url: URL.createObjectURL(files[0]),
    });
  };

  return (
    <form
      className="addRecipePage"
      onSubmit={handleSubmit(handleSubmitRecipeData)}
    >
      {/* 食譜名稱 */}
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
      {/* 食譜封面圖片 */}
      <img src={thumbnail?.url} alt="" loading="lazy" />
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            // multiple
            type="file"
            onChange={uploadRecipeThumbnail}
          />
          <Button variant="contained" component="span">
            Upload
            <PhotoCamera />
          </Button>
        </label>
      </Stack>
      {/* 食譜食材標籤選擇器 */}
      <MultipleSelectChip
        labelName="食材標籤"
        data={ingredientsData}
        chipList={chipList}
        handleChipList={handleChipList}
      />

      {/* 食譜食材所需量 */}
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
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => uploadStepImage(e, id)}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <img src={stepsList[id]?.imageURL} alt="" loading="lazy" />
        </Box>
      ))}
      {/* 新增食譜步驟按鈕 */}
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
