import React from "react";
import "./scss/all.css";
import BottomNav from "./components/BottomNav";
import RecipeHomePage from "./pages/recipe";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FridgePage from "./pages/fridge";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          </Route>
          <Route path="/fridge">
            <FridgePage />
          </Route>
          <Route path="/">
            <RecipeHomePage />
          </Route>
        </Switch>
        <BottomNav />
      </Router>

      {/* React Context API */}
      {/* React Router f */}
      {/* AI 小當家 */}
      {/* firebase 資料庫建立 f */}
      {/* bottom nav f */}
    </div>
  );
}

export default App;
