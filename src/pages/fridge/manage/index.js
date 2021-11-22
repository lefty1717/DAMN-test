import React from "react";
import FoodCard from "../../../components/fridge/FoodCard";
import FridgeBar from "../../../components/fridge/FoodBar";

export default function ManagePage() {
  return(
        <div>
            <FridgeBar/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
        </div>
  )
};