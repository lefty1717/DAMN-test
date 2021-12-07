import React from "react";
import { Card ,Typography} from "@mui/material";
import BuyDatePicker from "./BuyDatePicker";
import WeightText from "./WeightText";
import EndatePicker from "./EndDatePicker";
import UnitSelecter from "./UnitSelecter";
import FoodKindSelecter from "./FoodKindSelecter";
import { display, height, width } from "@mui/system";

export default function SendFoodListCard(){
    return(
        <div >
            <Card sx={{
                justifyContent:"space-between",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                padding:"60px 0 50px 50px"
                }}>
                <Typography sx={{
                    justifyContent:"space-between",
                    display:"flex",
                    flexDirection:"row",
                    fontSize:"18px",
                    alignItems:"center",
                    padding:"11px 20px",
                    boxShadow:"none",
                    }}>
                    雞肉
                    </Typography>
                <Card sx={{
                    justifyContent:"space-around",
                    padding:"11px 0px 26px 5px",
                    width:"50%",
                    boxShadow:"none",
                }}>
                  <FoodKindSelecter/>  
                </Card>
                
                <Card sx={{
                    justifyContent:"space-between",
                    alignItems:"left",
                    padding:"10px 0 0 20px",
                    boxShadow:"none",                   
                }}>
                    <BuyDatePicker/> 
                    <EndatePicker/>   
                </Card>
                
                <Card sx={{
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:"11px 0 26 0px",
                    boxShadow:"none",
                }}>
                    <WeightText/>
                </Card>
                
                <Card sx={{
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:"10px 0 0 20px",
                    width:"50%",
                    boxShadow:"none",
                }}>
                    <UnitSelecter/>
                </Card>
                
            </Card>
        </div>
    )
}