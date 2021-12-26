import React from "react";
import RecipeItem from "../../../pages/recipe/RecipeItemPage";
import { useStateValue } from "../../../StateProvider";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import theme from "../../../function/theme";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Timestamp } from "firebase/firestore";
import { updateDoc, doc, addDoc, collection } from "firebase/firestore";
import { storage, db } from "../../../firebase";
import { actionTypes } from "../../../reducer";

// import { v4 as uuidv4 } from "uuid";

const PreviewRecipe = () => {
  const [{ newRecipeData, isUpdated}, dispatch] = useStateValue();


  console.log();
  // 表單送出
  const handleSubmit = async () => {
    const result = {
      ...newRecipeData,
      createdAt: Timestamp.now().toDate(),
      thumbnail: await getRemoteThumbnailURL(),
      steps: await getStepsWithRemoteImageURL(),
    };
    dispatch({
      type: actionTypes.SET_NEWRECIPEDATA,
      newRecipeData: { 
        name: "",
        rating: 2,
        likes: 0,
        serving: 1,
        ingredientsInfo: [],
        ingredientTags: [],
        steps: [],
      },
    });
    dispatch({
      type: actionTypes.SET_ISUPDATED,
      isUpdated: false,
    });
    clearStepsBlankContent();
    console.log(result);

    // 傳送至 fireStore
    if (isUpdated === true) {
      const washingtonRef = doc(db, "recipes",newRecipeData?.id);
      await updateDoc(washingtonRef, {
        name: result.name,
        rating: result.rating,
        likes: result.likes,
        serving: result.serving,
        ingredientsInfo: result.ingredientsInfo,
        ingredientTags: result.ingredientTags,
        steps: result.steps,
        createdAt: Timestamp.now().toDate(),
      });
    } else {
      const docRef = await addDoc(collection(db, "recipes"), result);
      console.log("Document written with ID: ", docRef.id);
    }

    // need to clear global state
  };

  // 取得遠端網址的方法
  const getSingleRemoteURL = async (file) => {
    // 記得取出圖片檔案格式結尾 (e.g. .jpg .png ...
    // const recipesRef = ref(storage, `recipes/${uuidv4()}.jpg`);
    if (!file) return;
    const recipesRef = ref(storage, `recipes/${file.name}`);
    uploadBytes(recipesRef, file)
      .then((snapshot) => {
        console.log("Uploaded success");
      })
      .catch((error) => {
        // Handle any errors
      });

    return await getDownloadURL(recipesRef);
  };
  // 取得縮圖的遠端網址
  const getRemoteThumbnailURL = async () => {
    const temp = {
      url: await getSingleRemoteURL(newRecipeData?.thumbnail?.file),
    };
    return temp;
  };
  // 取得步驟圖片遠端網址
  const getStepsWithRemoteImageURL = async () => {
    const remoteImageURLWithSteps = await Promise.all(
      newRecipeData?.steps.map(async (step) => {
        if (!step.image) return step;
        step.imageURL = await getSingleRemoteURL(step.image);
        delete step.image;
        return step;
      })
    );
    return remoteImageURLWithSteps;
  };

  // 將沒有內容的步驟去除，以免造成資料庫冗余資料
  const clearStepsBlankContent = () => {
    // console.log("clear");
    const steps = newRecipeData?.steps;
    steps.map((step, id) => step.content.length === 0 && steps.splice(id, 1));
  };

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
          {isUpdated === true ? "修改":"發布"}食譜
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default PreviewRecipe;
