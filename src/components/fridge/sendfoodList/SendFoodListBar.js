import React from "react";
import theme from "../../../function/theme";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';

export default function SendListBar(){
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
                
                <Button>
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
                        }}>
                        送出
                    </Button>
                </Typography>

            </AppBar>
            
        </ThemeProvider>
    )
}