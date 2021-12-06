import { React, useState, useEffect } from 'react';
//firebase
import { db } from '../../firebase';
import { getDocs, collection } from '@firebase/firestore';
//foodCard
import FoodCard from './FoodCard';
//moment
import moment from 'moment';

export default function FoodList(){
    const [fridge, setFridge] = useState([]);
    const userFoodRef = collection(db,'users', '3HuEsCE9jUlCm68eBQf4', 'fridge');
    
    //冷藏or冷凍
    function fro (ice){
        if(ice === true){
            return("冷凍中");
        }
        else{
            return("冷藏中");
        }
    }
    
    //read firebase
    useEffect(()=>{
        async function readData() {
            const querySnapshot = await getDocs(userFoodRef);
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push({
                    name:doc.data().name,
                    ingredientTags:doc.data().ingredientTags,
                    quantity:doc.data().quantity,
                    unit:doc.data().unit,
                    isFrozen:fro(doc.data().isFrozen),
                    startDate:moment(doc.data().startDate, "YYYYMMDD").format("YYYY/MM/DD"),
                    endDate:moment(doc.data().endDate, "YYYYMMDD").format("YYYY/MM/DD"),
                    imageURL:doc.data().imageURL,
                    toEnd:moment().to(doc.data().endDate)
                });
            });
            setFridge([...temp]);
        }
        readData();
    },[db]);

    return(
        <div>
            {
            fridge.map((food, index) =>
            <FoodCard
            key={index}
            food = {food}
            />)
        }
        </div>
    )
}
