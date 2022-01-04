import { Button } from "@mui/material";
import React from "react";
import ShoppingList from "../../../components/shoppingList/ShoppingList";
import SendFoodList from "../../../components/fridge/sendfoodList/SendFoodList";
import { useNavigate } from 'react-router-dom';

export default function CheckFoodList(props){
    const navigate = useNavigate()
    const handleSendCheckedList = function(){
        navigate('/fridge/sendfoodlist');
    }

    return(
        <div>
            <Button  onClick={handleSendCheckedList}>下一步</Button>
            <ShoppingList isButtonDisable={false} />
        </div>
    )
}