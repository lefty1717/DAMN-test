// import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import Box from "@mui/material/Box";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
// import { collection, addDoc } from "firebase/firestore";
// import { db, storage } from "../../firebase";
// import MultipleSelectChip from "../../components/recipe/MultipleSelectChip";
// import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { v4 as uuidv4 } from "uuid";
// import NameAndThumbnail from "../../components/recipe/addRecipe/NameAndThumbnail";
// // mock data
// const ingredientsData = [
//   { id: 1, name: "牛肉" },
//   { id: 2, name: "青菜" },
//   { id: 3, name: "漢堡包" },
// ];
// const user = {
//   id: "itjustauserid8888",
//   name: "cube",
// };
// const initStepsList = [{ content: "" }, { content: "" }, { content: "" }];

// const AddRecipePage = () => {
 
//   const [stepsList, setStepsList] = useState([]);
//   const [chipList, setChipList] = useState([]);
//   const [thumbnail, setThumbnail] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const CURRENT_TIME_IN_NANOSECONDS = window.performance.now();
//   const Input = styled("input")({
//     display: "none",
//   });

//   useEffect(() => {
//     setStepsList(initStepsList);
//   }, []);

//   // 當對食材 ChipList 變動時，標籤一同變動
//   const handleChipList = (event) => {
//     const {
//       target: { value },
//     } = event;
//     // console.log(value);
//     setChipList(
//       // On autofill we get a the stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   // 新增步驟
//   const createStepInputField = () => {
//     setStepsList([...stepsList, { content: "" }]);
//   };
//   // 刪除步驟
//   const deleteStepInputField = (id) => {
//     setStepsList([...stepsList].filter((_, index) => index !== id));
//   };

//   // 在 步驟欄 寫下 敘述
//   const handleStepContent = (e, id) => {
//     const { value } = e.target;
//     const list = [...stepsList];
//     list[id] = { ...list[id], content: value };
//     console.log("selected step content id: ", id);
//     setStepsList(list);
//   };
//   // 在步驟欄顯示 步驟圖片
//   const showStepImage = (e, id) => {
//     const { files } = e.target;
//     const list = [...stepsList];

//     console.log("selected step image id: ", id);
//     list[id] = {
//       ...list[id],
//       image: files[0],
//       imageURL: URL.createObjectURL(files[0]),
//     };
//     setStepsList(list);
//   };
//   console.log("stepsList: ", stepsList);

//   // 傳送資料到 fireStore ( submit data to fireStore)
//   const handleSubmitRecipeData = async (data) => {
//     const remoteThumbnailURL = await createThumbnailRemoteURL(thumbnail?.data);
//     await createStepImagesRemoteURL(stepsList);
//     const result = {
//       ...data,
//       steps: stepsList,
//       likes: 0,
//       ingredientTags: chipList,
//       createdAt: CURRENT_TIME_IN_NANOSECONDS,
//       authorId: user.id,
//       thumbnail: remoteThumbnailURL,
//     };

//     console.log("result: ", result);
//     // const docRef = await addDoc(collection(db, "recipes"), result);
//     // console.log("Document written with ID: ", docRef.id);

//     setStepsList(initStepsList);
//     setChipList([]);
//     setThumbnail(null);
//   };

//   // 上傳 並 創造 食譜縮圖 的遠端網址 (get remote thumbnail URL)
//   const createThumbnailRemoteURL = async (file) => {
//     const recipesRef = ref(storage, `recipes/${file.name}`);
//     uploadBytes(recipesRef, file).then((snapshot) => {
//       console.log("Uploaded success");
//     });
//     const remoteURL = await getDownloadURL(recipesRef);

//     return remoteURL;
//   };

//   // 顯示 食譜縮圖 (show recipe thumbnail)
//   const showRecipeThumbnail = (e) => {
//     setThumbnail({
//       data: e.target.files[0],
//       url: URL.createObjectURL(e.target.files[0]),
//     });
//   };

//   // 上傳 並 創造 步驟圖片 的遠端網址 (get remote step images URL)
//   const createStepImagesRemoteURL = async (list) => {
//     const newList = list.map(async (item, index) => {
//       const recipesRef = ref(storage, `recipes/${item?.image?.name}`);
//       uploadBytes(recipesRef, item.image).then((snapshot) => {
//         console.log("Uploaded all step images success");
//       });
//       const remoteURL = await getDownloadURL(recipesRef);
//       console.log(remoteURL);
//       if (item.image) {
//         item.imageURL = remoteURL;
//       }

//       // const { files } = e.target;
//       // const list = [...stepsList];
//       // list[id] = {
//       //   ...list[id],
//       //   image: files[0],
//       //   imageURL: URL.createObjectURL(files[0]),
//       // };
//     });
//     setStepsList(newList);
//   };

//   return (
//     <form
//       className="addRecipePage"
//       onSubmit={handleSubmit(handleSubmitRecipeData)}
//     >
//       <NameAndThumbnail
//         thumbnail={thumbnail}
//         showRecipeThumbnail={showRecipeThumbnail}
//       />
//       {/* 食譜食材標籤選擇器 */}
//       <MultipleSelectChip
//         labelName="食材標籤"
//         data={ingredientsData}
//         chipList={chipList}
//         handleChipList={handleChipList}
//       />

//       {/* 食譜食材所需量 */}
//       <TextField
//         id="filled-multiline-flexible"
//         label="食材清單"
//         multiline
//         placeholder={`雞蛋 1顆 \n白飯 300 公克`}
//         margin="dense"
//         rows={4}
//         {...register("ingredientsInfo")}
//         variant="filled"
//       />
//       {/* map 所有步驟 透過按鈕新增刪除 inputField */}
//       <h3>步驟</h3>
//       {stepsList.map((_, id) => (
//         <Box className="stepInputFieldContainer" key={id}>
//           <TextField
//             sx={{ width: "100%" }}
//             id="filled-multiline-flexible"
//             label={`步驟 ${id + 1}`}
//             multiline
//             margin="normal"
//             rows={2}
//             variant="filled"
//             value={stepsList[id]?.content}
//             onChange={(e) => handleStepContent(e, id)}
//           />
//           {/* 步驟圖片顯示 */}
//           <label htmlFor="icon-button-file">
//             {/* 不要用 Input 會有問題 */}
//             <input
//               accept="image/*"
//               id="icon-button-file"
//               type="file"
//               onChange={(e) => showStepImage(e, id)}
//             />
//             <IconButton
//               color="primary"
//               aria-label="upload picture"
//               component="span"
//             >
//               <PhotoCamera />
//             </IconButton>
//           </label>
//           <img src={stepsList[id]?.imageURL} alt="" loading="lazy" />
//           <Fab
//             className="deleteStepBtn"
//             onClick={() => deleteStepInputField(id)}
//             variant="circle"
//             size="small"
//           >
//             <RemoveIcon />
//           </Fab>
//         </Box>
//       ))}
//       {/* 新增食譜步驟按鈕 */}
//       <Fab aria-label="add" onClick={createStepInputField}>
//         <AddIcon />
//       </Fab>

//       {/* 新增食譜按鈕 submit button */}
//       <Button variant="contained" type="submit">
//         發布食譜
//       </Button>
//     </form>
//   );
// };

// export default AddRecipePage;
