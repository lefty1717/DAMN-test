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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// 陳泓棣delete掉整個repository，所以我要重新PR

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<RecipeHomePage />} />
            <Route path="recipe/add" element={<AddRecipePage />} />
            <Route path="recipe/:id" element={<RecipeItemPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="fridge" element={<FridgePage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
            <BottomNav />
          </Route>
          <Route path="/fridge">
            <FridgePage />
            <BottomNav />
          </Route>
          <Route path="/addrecipe">
            <AddRecipePage />
          </Route>
          <Route path="/recipeitem/:id">
            <RecipeItemPage />
            <BottomNav />
          </Route>
          <Route path="/">
            <RecipeHomePage />
            <BottomNav />
          </Route> */}
        </Routes>
      </Router>
      {/* AI 小當家 */}
      <Assistant />
    </div>
  );
}

export default App;
