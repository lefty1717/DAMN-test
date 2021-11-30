import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, ButtonGroup, Toolbar } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import meat from "../../images/icons8-meat-30.png"
import leaf from "../../images/icons8-spinach-30.png"
import fish from "../../images/icons8-roach-30.png"
import milk from "../../images/icons8-milk-carton-30.png"
import beans from "../../images/icons8-peanuts-30.png"
import apple from "../../images/icons8-plum-30.png"
import SortButton from "./SortButton"
import { color } from "@mui/system";

export default function FridgeBar(){
    return (
        <div className="fridgeBar">
            <AppBar className="top_bar" position="sticky">

                <div className="LeftButton"> 
                    <Button>
                        <ArrowBackIosNewIcon/>
                    </Button>

                    <Typography>
                        保存管理
                    </Typography>
                </div>

                <div className="RightButton">
                    <Button className="insertButton" sx={{textAlign:"right !important"}}>
                            <AddCircleOutlineIcon/>
                        </Button>

                        <SortButton  className="top_bar"/>
                    </div>


                        

            </AppBar>

            <AppBar className="kind_bar" position="sticky">
                    <Button>
                        <img src={meat} alt=""  />
                        肉類
                    </Button>
                    
                    <Button>
                    <img src={leaf} alt="" />
                        蔬菜類                          
                    </Button>
                    
                    <Button>
                    <img src={fish} alt="" />
                        海鮮類  
                    </Button>

                    <Button>
                    <img src={beans} alt="" />
                        豆類  
                    </Button>

                    <Button>
                    <img src={apple} alt="" />
                        水果類
                    </Button>

                    <Button>
                    <img src={milk} alt="" />
                        奶類
                    </Button>
            </AppBar>
        </div>


    )
}