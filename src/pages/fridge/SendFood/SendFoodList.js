import React from "react";
import SendFoodListBar from "../../../components/fridge/sendfoodList/SendFoodListBar";
import SendFoodListCard from "../../../components/fridge/sendfoodList/SendFoodListCard";

export default function SendFoodListPage(){
    return(
        <div>
            <SendFoodListBar/>
            <SendFoodListCard/>

        </div>
    )
}