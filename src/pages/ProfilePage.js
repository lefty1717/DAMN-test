import React from "react";
import BottomNav from "../components/BottomNav";
import { useState } from "react";
import { Button } from "@mui/material";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from "../../src/firebase";
import { useStateValue } from "../../src/StateProvider";
import { actionTypes } from "../../src/reducer";
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {
  const [{user}, dispatch] = useStateValue();
  if (getApps().length === 0) {
    initializeApp(firebaseConfig);
  }
  const navigate =  useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async function () {
    try {
      const auth = getAuth();
      await signOut(auth);
      setMessage("");
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      localStorage.removeItem("userUid");
      navigate('/');
      console.log("已登出");
    } catch (error) {
      setMessage("" + error);
    }
  };

  console.log(user);

  return (
    <div>
      <form>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          登出
        </Button>
        {message}
        <br />
      </form>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
