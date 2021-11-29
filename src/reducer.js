export const initialState = {
  user: null,
  newRecipeData: { name: "", rating: 2, likes: 0 },
  navbarBtnId: 0,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_NEWRECIPEDATA: "SET_NEWRECIPEDATA",
  SET_BOTTOMNAVBARID: "SET_BOTTOMNAVBARID",
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

    default:
      return state;
  }
};

export default reducer;
