import React from "react";
//firebase
import { db, storage } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
//context
import { useStateValue } from "../../../StateProvider";
//跳轉頁面
import { useNavigate } from 'react-router-dom';
//delete
import { doc, deleteDoc } from "firebase/firestore";

export default function SendCheckedList(){
    const navigate = useNavigate()
    //add to firebase
    const [{ checkedList }] = useStateValue();
    async function addData(){
        navigate('/fridge/fridgemanage');

        const docRef = await addDoc(collection(db, 'users', '3HuEsCE9jUlCm68eBQf4', 'fridge'),{
            name:checkedList.name,
            quantity:checkedList.quantity,
            unit:checkedList.unit,
            notes:checkedList.notes,
            startDate:checkedList.startDate,
            endDate:checkedList.endDate,
            isFrozen:checkedList.isFrozen,
            ingredientTags:checkedList.ingredientTags,
            imageURL:checkedList.imageURL,
        });
        //delete
        const deleteData = async function(id){
        await deleteDoc(doc(db, 'users', '3HuEsCE9jUlCm68eBQf4', 'shoppingList', id));
        }
        {checkedList.map((id, index) =>
            deleteData(checkedList[index].id)
        )}
    }
}