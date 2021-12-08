import React from "react";
import RecipeItem from "../../../pages/recipe/RecipeItemPage";
import { useStateValue } from "../../../StateProvider";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import theme from "../../../function/theme";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
const PreviewRecipe = () => {
  const [{ newRecipeData }] = useStateValue();
  const CURRENT_TIME_IN_NANOSECONDS = window.performance.now();
  const handleSubmit = async () => {
    const remoteThumbnailURL = await getSingleRemoteURL(
      newRecipeData?.thumbnail?.file
    );
    // const newListWithRemoteStepImagesURL = await getNewListWithMultiRemoteURL(
    //   newRecipeData?.steps
    // );
    const list = newRecipeData?.steps.map((step) => {
      getSingleRemoteURL(step.image).then((result) => {
        console.log(result);
        step.imageURL = result;
      });
    });
    // await createStepImagesRemoteURL(stepsList);
    // const result = {
    //   ...data,
    //   steps: stepsList,
    //   likes: 0,
    //   ingredientTags: chipList,
    //   createdAt: CURRENT_TIME_IN_NANOSECONDS,
    //   authorId: user.id,
    //   thumbnail: remoteThumbnailURL,
    // };

    const temp = {
      ...newRecipeData,
      createdAt: CURRENT_TIME_IN_NANOSECONDS,
      thumbnail: remoteThumbnailURL,
      steps: list,
    };
    console.log(temp);
    // const docRef = await addDoc(collection(db, "recipes"), result);
    // console.log("Document written with ID: ", docRef.id);
    // clear global state
  };

  const getSingleRemoteURL = async (file) => {
    // 記得取出圖片檔案格式結尾 (e.g. .jpg .png ...
    // const recipesRef = ref(storage, `recipes/${uuidv4()}.jpg`);
    if (!file) {
      return;
    }
    const recipesRef = ref(storage, `recipes/${file.name}`);
    uploadBytes(recipesRef, file)
      .then((snapshot) => {
        console.log("Uploaded success");
      })
      .catch((error) => {
        // Handle any errors
      });

    const remoteURL = await getDownloadURL(recipesRef);
    // if a list files

    return remoteURL;
  };

  // const getNewListWithMultiRemoteURL = async (filesList) => {
  //   // 參數為 array
  //   // 透過覆蓋 object property（imageURL） 的方式執行
  //   // 並返回有各個步驟圖片遠端網址的新陣列
  //   if (filesList.length === 0) {
  //     return;
  //   }
  //   console.log(filesList);
  //   const newList = filesList.map(async (item, index) => {
  //     const recipesRef = ref(storage, `recipes/${item?.image?.name}`);
  //     uploadBytes(recipesRef, item.image).then((snapshot) => {
  //       console.log(`Uploaded ${index + 1} step images success`);
  //     });
  //     const remoteURL = await getDownloadURL(recipesRef);
  //     console.log(remoteURL);

  //     // 覆蓋原先的 file 檔，避免將整個 file 傳上去到 storage
  //     if (item.image) {
  //       item.imageURL = remoteURL;
  //       console.log(item.imageURL);
  //     }
  //     return
  //   });

  //   console.log("newList: ", newList);

  //   return newList;
  // };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4 }}>
        <h3>預覽食譜</h3>
        <RecipeItem propsData={newRecipeData} />
        {/* submit button */}
        <Button
          className="addRecipePage__submitBtn"
          onClick={handleSubmit}
          fullWidth
          sx={{ mt: 2 }}
          variant="contained"
        >
          發布食譜
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default PreviewRecipe;
