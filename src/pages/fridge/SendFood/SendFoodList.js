import React from "react";
import SendFoodList from "../../../components/fridge/sendfoodList/SendFoodList";
import SendFoodListBar from "../../../components/fridge/sendfoodList/SendFoodListBar";
import SendFoodListCard from "../../../components/fridge/sendfoodList/SendFoodListCard";

export default function SendFoodListPage(){
    return(
        <div>
            <SendFoodListBar/>
            <SendFoodList />

        </div>
    )
}