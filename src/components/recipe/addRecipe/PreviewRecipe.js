import React from "react";
import RecipeItem from "../../../pages/recipe/RecipeItemPage";
import { useStateValue } from "../../../StateProvider";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import theme from "../../../function/theme";

const PreviewRecipe = () => {
  const [{ newRecipeData }] = useStateValue();
  const CURRENT_TIME_IN_NANOSECONDS = window.performance.now();
  const handleSubmit = async () => {
    // const remoteThumbnailURL = await createThumbnailRemoteURL(thumbnail?.data);
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
    // const docRef = await addDoc(collection(db, "recipes"), result);
    // console.log("Document written with ID: ", docRef.id);
    // clear global state
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
