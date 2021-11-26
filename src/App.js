import React from "react";
import "./scss/all.css";
import BottomNav from "./components/BottomNav";
import RecipeHomePage from "./pages/recipe";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FridgePage from "./pages/fridge";
import ProfilePage from "./pages/ProfilePage";
import AddRecipePage from "./pages/recipe/AddRecipePage";
import RecipeItemPage from "./pages/recipe/RecipeItemPage";
import Assistant from "./components/Assistant";
import {useStateValue} from './StateProvider'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AddIngredientPage from "./pages/recipe/AddIngredientPage";


// 陳泓棣delete掉整個repository，所以我要重新PR



function App() {
  
  const[{user},dispatch]=useStateValue()
  console.log(user);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<RecipeHomePage />} />
            <Route path="recipe/add" element={<AddRecipePage />} />
            <Route path="recipe/ingredient/add" element={<AddIngredientPage/>} />
            <Route path="recipe/:id" element={<RecipeItemPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="fridge" element={<FridgePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </Router>
      {/* <Assistant /> */}
    </div>
  );
}

export default App;
