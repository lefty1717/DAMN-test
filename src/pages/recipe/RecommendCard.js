import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import hamburger from '../../images/hamburger.png'

function RecommendCard() {
    return (
        <div>
            <Card sx={{width:'90%',display:'flex', alignItems:'center', margin:'10px'}}>
                <CardMedia
                    component="img"
                    width="100%"
                    height="104"
                    image={hamburger}
                    alt="hamburger"
                    sx={{borderRadius:'20px', paddingLeft:'10px'}}
                />
                <CardContent>
                    <Typography gutterBottom sx={{fontSize:'18px', fontWeight:'bold'}} component="div">
                        起司漢堡
                    </Typography>
                    <Typography sx={{fontSize:'14px'}} color="text.secondary">
                    紐澳雙層牛肉，
                    搭配雙層切達吉事片，酸黃瓜、洋蔥在裡面， 芥末醬、番茄醬淋上去，超好吃。
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default RecommendCard
