import React, { useEffect } from "react";
import "./scss/all.css";
import BottomNav from "./components/BottomNav";
import RecipeHomePage from "./pages/recipe";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import FridgePage from "./pages/fridge";
import FridgeManagePage from "./pages/fridge/FridgeManagePage/index";
import ShoppingListPage from "./pages/fridge/shoppingList/ShoppingListPage";
import AddShoppingListPage from "./pages/fridge/shoppingList/AddShoppingListPage";
import SendFoodListPage from "./pages/fridge/SendFood/SendFoodList";

import ProfilePage from "./pages/ProfilePage";
import RecipeItemPage from "./pages/recipe/RecipeItemPage";
import Assistant from "./components/Assistant";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AdminPage from "./pages/recipe/AdminPage";
import NotFound from "./pages/NotFoundPage";
import CreateShoppinglist from "./pages/fridge/CreateShoppinglist";
// 陳泓棣delete掉整個repository，所以我要重新PR

function App() {
  const [{ user, newRecipeData }, dispatch] = useStateValue();
  // console.log(user);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<RecipeHomePage />} />
            <Route path="recipe/admin/add" element={<AdminPage />} />
            <Route path="recipe/:id" element={<RecipeItemPage />} />
          </Route>

          {/* login */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />

          {/* fridge */}
          <Route path="fridge" element={<FridgePage />} />

          <Route path="fridge/shoppingList" element={<CreateShoppinglist/>} />

          <Route path="fridgeManagePage" element={<FridgeManagePage />} />
          <Route path="shoppingListPage" element={<ShoppingListPage />} />
          <Route path="AddShoppingListPage" element={<AddShoppingListPage />} />
          <Route path="SendFoodListPage" element={<SendFoodListPage />} />


          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Assistant />
    </div>
  );
}

export default App;
