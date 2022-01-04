import React from "react";
import theme from "../../../function/theme";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';

//跳轉頁面
import { useNavigate } from 'react-router-dom';

import SendCheckedList from "./SendCheckedList";

export default function SendListBar(){
    const navigate = useNavigate()
    const goCheckFoodListPage = function(){
        navigate('/fridge/checkfoodlist');
    }
    return(
        <ThemeProvider theme={theme}>
            <AppBar sx={{
                backgroundColor: "#C7E3EE",
                justifyContent:"space-between",
                alignItems:"center",
                display:"flex",
                flexDirection:"row",
                boxShadow:"none",
                padding:"13px",
                }}>
                
                <Button onClick={goCheckFoodListPage}>
                    <ArrowBackIosNewIcon sx={{
                        color:"#FFFFFF",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"left",
                        }}/>
                </Button>

                <Typography>
                    <Button sx={{
                        color:"#FFFFFF",
                        justifyContent:"space-between",
                        alignItems:"center",
                    }}
                    onClick={SendCheckedList}
                    >
                        送出
                    </Button>
                </Typography>

            </AppBar>
            
        </ThemeProvider>
    )
}