import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@material-ui/icons/Twitter";
import facebookIcon from "../../src/images/facebookIcon.png";
import googleIcon from "../../src/images/googleIcon.png";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';


const LoginPage = (props) => {
    
  const [account, setAccount] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = function (e) {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const[state,dispatch]=useStateValue();

  const handleSubmit = async function () {

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        account.email,
        account.password
      );

      if (res) {
        dispatch({
          type:actionTypes.SET_USER,
          user:auth.currentUser,
      })
        // console.log(auth.currentUser.displayName);
        props.setStatus("signedIn");
      }

      setMessage("");
    } catch (error) {
      setMessage("" + error);
    }
  };

  const changeStatus = function () {
    props.setStatus("signUp");
  };


  return (
    <div className="login-signup-Page">
      <Grid className="box">
        <Card className="inputTextbox">
          <input
            name="email"
            onChange={handleChange}
            value={account.email}
            type="email"
            placeholder="Email"
          ></input>
          <br />
          <input
            name="password"
            onChange={handleChange}
            value={account.password}
            type="password"
            placeholder="Password"
          ></input>
          <br />
          {message}
          <br />
          <div align="right">
            <Link sx={{ color: "#C4C4C4", textDecoration: "none" }}>
              忘記密碼?
            </Link>
          </div>
        </Card>

        <Card className="login-sugnup-Button">
          <Button fullWidth onClick={handleSubmit}>
            登入
          </Button>
        </Card>

        <Card className="signupLink">
          <div align="center">
            還沒有帳號嗎？
            <Link className="link" onClick={changeStatus}>
              註冊一個
            </Link>
          </div>
        </Card>

        <Card className="otherLoginOptions">
          <div align="center">
            <Button>
              <Avatar src={googleIcon}></Avatar>
            </Button>
            <Button>
              <Avatar src={facebookIcon} className="avatar"></Avatar>
            </Button>
            <Button>
              <TwitterIcon className="twitterIcon"></TwitterIcon>
            </Button>
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default LoginPage;

