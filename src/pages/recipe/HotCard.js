import React from 'react'
import stake from '../../images/stake.jpg'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

function HotCard() {
    return (
        <div className="hotCard">
            <img className="hotCard__img" src={stake} alt="" />
                <Card >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            牛排
                        </Typography>
                        <Typography variant="h5" component="div">
                            Joan Walker
                        </Typography>
                        <span></span>
                        <div className="hotCard__item">
                            <Typography >
                                <ThumbUpIcon sx={{color:"#2D8DFF"}}/>
                                30k
                            </Typography>
                            <Typography >
                                <AccessTimeIcon sx={{color:"#45BCFF"}}/>
                                1hr
                            </Typography>
                            <Typography >
                                <StarIcon sx={{color:"#FE645A"}}/>
                                hard
                            </Typography>
                        </div>                       
                    </CardContent>
                </Card>
        </div>
                    
    )
}

export default HotCard
