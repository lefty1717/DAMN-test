import React from "react";
import SendFoodListCard from "./SendFoodListCard";
import { useStateValue } from "../../../StateProvider";

export default function SendFoodList(){
    const [{ checkedList }] = useStateValue();

    return(
        <div>
            {checkedList.map((item, index) =>
                <SendFoodListCard
                key={index}
                item = {item}
                index={index}
                />
            )}
        </div>
    )
}