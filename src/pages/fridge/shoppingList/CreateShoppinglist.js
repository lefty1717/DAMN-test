import React, { useState } from 'react';

//components
import TopBar from '../../../components/fridge/CreateShoppinglistBar';
import CustomIcon from "../../../components/Icon";

//firebase
import { db, storage } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//mui
import { Button, Input } from '@mui/material';
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

//跳轉頁面
import { useNavigate } from 'react-router-dom';


function CreateShoppinglist () {
    const navigate = useNavigate()
    const ThumbnailInput = styled("input")({
        display: "none",
    });
    //購物清單結構
    const [shoppingList, setShoppingList] = useState({
        name:"",
        quantity:"",
        unit:"",
        notes:"",
        startDate:0,
        endDate:0,
        ingredientTags:"",
        isFrozen:false,
        imageURL:"",
    })

    //set shoppingList
    const handleClick = function(e){
        setShoppingList({...shoppingList,[e.target.name]:e.target.value})
    }
    //縮圖
    const handleThumbnail = (e) => {
        const thumbnail = {
          file: e.target.files[0],
          url: URL.createObjectURL(e.target.files[0]),
        };
        setShoppingList({...shoppingList,imageURL:thumbnail.url, imageFile:thumbnail.file})
    };

    //uplode image
    const upload = async function(file){
        const imageRef = ref(storage,`food/${file.name}`);
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        return url
    }

    //add to firebase
    async function addData(){
        navigate('/fridge/shoppinglist');
        const imgurl = await upload(shoppingList.imageFile)

        const docRef = await addDoc(collection(db, 'users', '3HuEsCE9jUlCm68eBQf4', 'shoppingList'),{
            name:shoppingList.name,
            quantity:shoppingList.quantity,
            unit:shoppingList.unit,
            notes:shoppingList.notes,
            startDate:shoppingList.startDate,
            endDate:shoppingList.endDate,
            isFrozen:shoppingList.isFrozen,
            ingredientTags:shoppingList.ingredientTags,
            imageURL:imgurl,
        });
    }

    return(
        <div className="CreateShoppinglist">
            <TopBar />
            <label htmlFor="icon-button-file">
            <Box
                component="div"
                sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: "309px",
                height: "240px",
                borderRadius: "20px",
                margin: " 0 0 0 33px",
                }}
            >
                <img src={shoppingList?.imageURL} alt="" loading="lazy" />
                <ThumbnailInput
                accept="image/*"
                id="icon-button-file"
                type="file"
                name='imageURL'
                onChange={handleThumbnail}
                />
                <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{
                    display: `${shoppingList.imageURL ? "none" : "unset"}`,
                }}
                >
                <CustomIcon
                    size={80}
                    name="AddPhotoAlternateIcon"
                    hidden={shoppingList.imageURL ? true : false}
                    color='#C7E3EE'
                />
                </IconButton>
            </Box>
            </label>
            <div className="input-container"> 
                <div className="input-foodname">
                    <h5>食物名稱：</h5>
                    <Input type="text" name="name" value={shoppingList.name} onChange={handleClick}/><br/>
                </div>

                <div className="input-amount">
                    <h5>數 量：</h5>
                    <Input type="number" name="quantity" value={shoppingList.quantity} onChange={handleClick}/>
                </div>

                <div className="input-unit">
                    <h5>單 位：</h5>
                    <Input type="text" name="unit" value={shoppingList.unit} onChange={handleClick}/>
                </div>

                <div className="input-remark">
                    <h5>備 註：</h5>
                    <Input type="text" name="notes" value={shoppingList.notes} onChange={handleClick}/>
                </div>
                
                <div className="submit">
                    <Button 
                    sx={{
                        backgroundColor: "white",
                        color:"#C7E3EE",
                        borderRadius: "10px",
                    }}
                    size="large"
                    onClick={addData}
                    >
                        送出
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateShoppinglist;
