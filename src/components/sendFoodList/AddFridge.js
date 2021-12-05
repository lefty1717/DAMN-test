import React, { useState } from 'react';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
//firebase
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddShoppingList(props) {
    const [foodList, setFoodList] = useState({
      name:"",
      ingredients:"",
      quantity:0,
      unit:"",
      startDate:0,
      endDate:0,
    });

  const handleClick = function(e){
    setFoodList({...foodList,[e.target.name]:e.target.value})
  }
  
  const update = function(){
    props.update(product);
    addData();
  }
  
  async function addData(){
    const docRef = await addDoc(collection(db,"product"),
    { desc:product.desc, price:parseInt(product.price) });
  }

  return (
    <div>
            食物名稱:<Input type="text" name="name" value={product.desc} onChange={handleClick}/><br/>
            數量:<Input type="number" name="quantity" value={product.price} onChange={handleClick}/><br/>
            單位:<Input type="text" name="name" value={product.desc} onChange={handleClick}/><br/>
            備註:<Input type="text" name="name" value={product.desc} onChange={handleClick}/><br/>
            <Button variant="contained" color="primary" onClick={update}>新增</Button>
    </div>
  );
}