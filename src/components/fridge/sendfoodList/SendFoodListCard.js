import React from "react";
import { Card ,Input,Typography} from "@mui/material";
import BuyDatePicker from "./BuyDatePicker";
import WeightText from "./WeightText";
import EndatePicker from "./EndDatePicker";
import UnitSelecter from "./UnitSelecter";
import FoodKindSelecter from "./FoodKindSelecter";
import { display, height, width } from "@mui/system";
import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

export default function SendFoodListCard(props){
    const [{ checkedList }, dispatch] = useStateValue();
    
    const handleCheckListChange = function(e){
        let oldList = [...checkedList];
        oldList[props.index] = {...oldList[props.index],[e.target.name]:e.target.value}
        dispatch({
          type: actionTypes.SET_CHECKEDLIST,
          checkedList: [...oldList],
        });
        
    }

    return(
        <div >
            <Card sx={{
                justifyContent:"space-between",
                display:"flex",
                flexDirection:"column",
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
                    {props.item.name}
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
                    <Input name="quantity" placeholder={props.item.quantity} onChange={handleCheckListChange} />
                </Card>
                
                <Card sx={{
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:"10px 0 0 20px",
                    width:"50%",
                    boxShadow:"none",
                }}>
                    {props.item.unit}
                </Card>
                
            </Card>
        </div>
    )
}