import React from 'react'
import { Card, Grid } from '@mui/material'
import chicken from "../../images/chicken.jpg"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import { AppBar, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

function FoodCard(){
    return(
        <div className="foodCard">
            <Grid 
            className="box"
            >
                <Card className="chickenCard">
                    <img src={chicken} alt="" />
                </Card>

                <Card className="contextCard">
                    <Typography className="foodName">
                        雞肉
                    </Typography>

                    <Typography className="detailCard">
                        數量：2盒
                        <br/>
                        冷藏中
                        <br/>
                        到期日：10/10/2021
                        <br/>
                    </Typography>

                    <Typography className="expiredTime">
                            距離到期日：剩3日
                    </Typography>
                </Card>
                <Card className="delete-edit-card">
                    <Typography className="deleteButton">
                        <CloseIcon/>
                    </Typography>

                    <Typography className="editButton">
                        <CreateIcon/>
                    </Typography>
                </Card>
            </Grid>
        </div>
    )

}
export default FoodCard