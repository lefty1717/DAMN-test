import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, ButtonGroup, Toolbar } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import SortButton from "../fridge/SortButton";
import DeleteIcon from '@mui/icons-material/Delete';

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
                        <DeleteIcon/>
                    </Button>

                    <SortButton  className="top_bar"/>
                </div>
        </AppBar>
        </div>
    )
}