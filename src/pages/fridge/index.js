import { Avatar, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
//mui icon
import RestaurantIcon from '@mui/icons-material/Restaurant';
import manage from '../../images/fridgeManage.png';
import shoppingCart from '../../images/fridgeShoppingCart.png';
import AddIcon from '@mui/icons-material/Add';
import foodIcon1 from '../../images/fridgeFoodIcon1.jpeg';
import foodIcon2 from '../../images/fridgeFoodIcon2.jpeg';
import foodIcon3 from '../../images/fridgeFoodIcon3.jpeg';
import background from '../../images/fridgeIndexBar.jpg'

const index = () => {

  return(
    <div className="fridgeIndex">
          <Grid className="box">
            <div className='overview__container'>
            <Card className="overview">
             
             </Card>
            <div className="font">
                <Typography>40</Typography>
                <Typography>8</Typography>
                <Typography>5</Typography>
                <Typography>總數量</Typography>
                <Typography>快到期</Typography>
                <Typography>已過期</Typography>
              </div>
            </div>
            

            <Card className="word">
              <Typography>功能</Typography>
            </Card>

            <Card className="function">
                <Button>
                  <img src={manage}></img>
                  <Typography>保存管理</Typography>
                </Button>

                <Button>
                  <img src={shoppingCart} className="shoppingListIcon"></img>
                  <Typography>購物清單</Typography>
                </Button>
              
            </Card>
            <Card className="word">
              <Typography>新增</Typography>
            </Card>
              
            <Card className="addFood">
              <Button fullWidth>
                <div className="discription">
                  <RestaurantIcon className="fork" />
                  <h2>新增食材</h2>
                  <h3>輸入你冰箱中的食材吧！</h3>
                </div>

                <div className="avatar">
                  <div  className="foodIcon">
                    <Avatar src={foodIcon1} sx={{width:"30px", height:"30px"}} />
                    <Avatar src={foodIcon2} sx={{width:"30px", height:"30px"}} />
                    <Avatar src={foodIcon3} sx={{width:"30px", height:"30px"}} />
                  </div>
                  <AddIcon className="addIcon" />
                </div>
              </Button>
            </Card>
          </Grid>
    </div>
  );
};

export default index;
