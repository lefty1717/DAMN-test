export const initialState = {
  user: null,
  newRecipeData: {
    name: "",
    rating: 2,
    likes: 0,
    serving: 1,
    ingredientsInfo: [],
    ingredientTags: [],
    steps: [],
  },
  navbarBtnId: 0,
  isUpdated: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_NEWRECIPEDATA: "SET_NEWRECIPEDATA",
  SET_BOTTOMNAVBARID: "SET_BOTTOMNAVBARID",
  SET_ISUPDATED: "SET_ISUPDATED",
  SET_UPDATE_RECIPE_DATA: "SET_UPDATE_RECIPE_DATA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_NEWRECIPEDATA:
      return {
        ...state,
        newRecipeData: action.newRecipeData,
      };
    case actionTypes.SET_BOTTOMNAVBARID:
      return {
        ...state,
        navbarBtnId: action.navbarBtnId,
      };
    case actionTypes.SET_ISUPDATED:
      return {
        ...state,
        isUpdated: action.isUpdated,
      };

    default:
      return state;
  }
};

export default reducer;
