import React from "react";
import ShoppingList from "../../../components/shoppingList/ShoppingList";
import ShoppingListBar from "../../../components/shoppingList/ShoppingListBar";

export default function ShoppingListPage() {
  return(
        <div>
            <ShoppingListBar isInShoppingList/>
            <ShoppingList isButtonDisable={true} />
        </div>
  )
};