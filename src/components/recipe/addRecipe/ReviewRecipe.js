import React from "react";
import RecipeItem from "../../../pages/recipe/RecipeItemPage";
import { useStateValue } from "../../../StateProvider";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import theme from "../../../function/theme";
const ReviewRecipe = () => {
  const [{ newRecipeData }] = useStateValue();

  return (
    <ThemeProvider theme={theme}>
      <h3>預覽食譜</h3>
      <Box sx={{ p: 4 }}>
        <RecipeItem propsData={newRecipeData} />
      </Box>

      {/* submit button */}
      <Button
        className="addRecipePage__submitBtn"
        sx={{ mt: 2 }}
        variant="contained"
      >
        發布食譜
      </Button>
    </ThemeProvider>
  );
};

export default ReviewRecipe;
