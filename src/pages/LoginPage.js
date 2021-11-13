import React from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Link } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import facebookIcon from '../../src/images/facebookIcon.png';
import googleIcon from '../../src/images/googleIcon.png'

const LoginPage = () => {
    return(
        //<div className="login-signup-Page">
            <Grid className="box">
                <Card className="card1">
                    <input type="text" placeholder="Email"></input><br/>
                    <input type="password" placeholder="Password"></input>
                    <div align="right"><Link sx={{color:"#C4C4C4", textDecoration:"none"}}>忘記密碼?</Link></div>
                </Card>

                <Card className="cardL2">
                    <Button fullWidth>登入</Button>
                </Card>

                <Card className="card3">
                    <div align="center">還沒有帳號嗎？<Link className="link">註冊一個</Link></div>
                </Card>

                <Card className="card4">
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
        //</div>
    )
}

export default LoginPage
