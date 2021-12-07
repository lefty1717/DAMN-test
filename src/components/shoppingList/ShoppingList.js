import { React, useState, useEffect } from 'react';
//firebase
import { db } from '../../firebase';
import { getDocs, collection, doc } from '@firebase/firestore';
//foodCard
import ShoppingListCard from './ShoppingListCard';
//moment
import moment from 'moment';

export default function ShoppingList(){
    const [fridge, setFridge] = useState([]);
    const userShoppingListRef = collection(db,'users', '3HuEsCE9jUlCm68eBQf4', 'shoppingList');
    
    //read firebase
    useEffect(()=>{
        async function readData() {
            const querySnapshot = await getDocs(userShoppingListRef);
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push({
                    name:doc.data().name,
                    quantity:doc.data().quantity,
                    unit:doc.data().unit,
                    imageURL:doc.data().imageURL,
                    notes:doc.data().notes,
                });
            });
            setFridge([...temp]);
        }
        readData();
    },[db]);

    return(
        <div>
            {
            fridge.map((shoppingList, index) =>
            <ShoppingListCard
            key={index}
            shoppingList = {shoppingList}
            />)
        }
        </div>
    )
}
