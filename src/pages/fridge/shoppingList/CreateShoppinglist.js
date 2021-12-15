import React, { useState } from 'react';
import TopBar from '../../../components/fridge/CreateShoppinglistBar';
import UploadButtons from '../../../components/fridge/UploadImage';
import FreeSolo from '../../../components/fridge/Input';
import BasicButtons from  '../../../components/fridge/SubmitButton';
//firebase
import { db, storage } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


function CreateShoppinglist () {
    //購物清單結構
    const [shoppingList, setShoppingList] = useState({
        name:"",
        quantity:0,
        unit:"",
        notes:"",
        startDate:0,
        endDate:0,
        ingredientTags:"",
        isFrozen:false,
        imageURL:"",
    })

    //set to shoppingList
    const handleClick = function(e){
        setShoppingList({...shoppingList,[e.target.name]:e.target.value})
    }

    //uplode image
    const upload = async function(e){
        const imageRef = ref(storage, e.target.files[0].name);
        await uploadBytes(imageRef, e.target.files[0]);
        const url = await getDownloadURL(imageRef);
        setShoppingList({...shoppingList, imageURL: url})
    }

    //add to firebase
    async function addData(){
        const docRef = await addDoc(collection(db, 'users', '3HuEsCE9jUlCm68eBQf4', 'shoppingList'),{
        name:shoppingList.name,
        quantity:shoppingList.quantity,
        unit:shoppingList.unit,
        notes:shoppingList.notes,
        startDate:shoppingList.startDate,
        endDate:shoppingList.endDate,
        isFrozen:shoppingList.isFrozen,
        ingredientTags:shoppingList.ingredientTags,
        imageURL:shoppingList.imageURL,
        });
    }

    return(
        <div className="CreateShoppinglist">
            <TopBar />
            <UploadButtons  onChange={upload} />
            <div className="input-container"> 
                <div className="input-foodname">
                    <h5>食物名稱：</h5>
                    <FreeSolo />
                </div>

                <div className="input-amount">
                    <h5>數 量：</h5>
                    <FreeSolo />
                </div>

                <div className="input-unit">
                    <h5>單 位：</h5>
                    <FreeSolo />
                </div>

                <div className="input-remark">
                    <h5>備 註：</h5>
                    <FreeSolo />
                </div>

                <div className="submit">
                    <BasicButtons/>
                </div>
            </div>
        </div>
    );
}

export default CreateShoppinglist;
