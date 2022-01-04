import React from "react";
import ShoppingList from "../../../components/shoppingList/ShoppingList";
import ShoppingListBar from "../../../components/shoppingList/ShoppingListBar";
import { Fab } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ShoppingListPage() {
  return(
        <div>
          <ShoppingListBar/>
            
            <Fab sx={{
                backgroundColor:"#C7E3EE !important",
                color:"white !important",
                justifyContent:"space-around",
                alignItems:"left !important",
                

              }}
              >
                <AddCircleIcon/>
              </Fab>
            
            <ShoppingList isButtonDisable={true} />
        </div>
  )
};