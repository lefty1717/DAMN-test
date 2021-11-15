import React from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const SignupPage = () => {
    return (
        <div className="login-signup-Page">
            <Grid className="box">
                <Card className="inputTextbox">
                <div>
                    <input type="text" placeholder="姓名"></input><br/>
                    <input type="text" placeholder="Email"></input><br/>
                    <input type="text" placeholder="密碼"></input><br/>
                    <input type="text" placeholder="確認密碼"></input>
                </div>
                </Card>

                <Card className="login-sugnup-Button">
                <Button fullWidth>註冊</Button>
                </Card>
            </Grid>
        </div>
    )
}

export default SignupPage
