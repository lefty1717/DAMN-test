import { React, useState } from 'react'
import { Card, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';

export default function ShoppingListCard(props){
    

    return(
        <div className={props.item.checked?"foodCard":""}>
            <Grid 
            className="box" sx={{boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.25)"}}
            >
                <Card className="chickenCard">
                    <img src={props.item.imageURL} alt="" />
                </Card>

                <Card className="contextCard">
                    <Typography className="foodName">
                        {props.item.name}
                    </Typography>

                    <Typography className="detailCard">
                        需要數量：{props.item.quantity}{props.item.unit}
                    </Typography><br/>
                    <Typography className="detailCard">
                        {props.item.notes}
                    </Typography>
                </Card>
                <Card className="delete-edit-card">
                    <Typography className="deleteButton">
                        <CloseIcon/>
                    </Typography>

                    <Typography className="editButton">
                        <CreateIcon/>
                    </Typography>
                </Card>
            </Grid>
        </div>
    )
}