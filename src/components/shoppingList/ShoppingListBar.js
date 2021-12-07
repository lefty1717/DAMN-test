import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, ButtonGroup, Toolbar } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SortButton from "../fridge/SortButton";

export default function ShoppingListBar(){


    return(
        <div className="fridgeBar">
        <AppBar className="top_bar" position="sticky"sx={{boxShadow:"none"}}>

            <div className="LeftButton"> 
                <Button>
                    <ArrowBackIosNewIcon/>
                </Button>

                <Typography>
                    購物清單
                </Typography>
            </div>

            <div className="RightButton">
                <Button className="insertButton" sx={{textAlign:"right !important"}}>
                        <AddCircleOutlineIcon/>
                    </Button>

                    <SortButton  className="top_bar"/>
                </div>
        </AppBar>
        </div>
    )
}