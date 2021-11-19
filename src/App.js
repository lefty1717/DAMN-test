import React from "react";
import "./scss/all.css";
import BottomNav from "./components/BottomNav";
import RecipeHomePage from "./pages/recipe";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FridgePage from "./pages/fridge";
import ProfilePage from "./pages/ProfilePage";
import AddRecipePage from "./pages/recipe/AddRecipePage";
import Assistant from "./components/Assistant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 陳泓棣delete掉整個repository，所以我要重新PR

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signup">
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
          <Route path="/">
            <RecipeHomePage />
            <BottomNav />
          </Route>
        </Switch>
      </Router>

      {/* React Context API */}

      {/* AI 小當家 */}
      {/* <Assistant /> */}
    </div>
  );
}

export default App;
