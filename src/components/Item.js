import { isInaccessible } from "@testing-library/react";
import React from "react";
// when user clicks on 'Add to Cart' button => update isIncart status => PATCH 

// add event handler for button 
// make a PATCH request inside the function for isInCart status. 
// configure w cb function to Shopping List component(parent)
// destructure / pass it as prop to Item component
// set the state for the updatedItems 


function Item({ item , handleUpdateItem, onDeleteItem }) {

function handleAddToCartClick() {
  // add fetch request
  fetch(`http://localhost:4000/items/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isInCart: !item.isInCart,
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => handleUpdateItem(updatedItem));
}

// delete button will remove the item from the cart

function handleDeleteClick(){
  // write DELETE request for the item
    fetch(`http://localhost:4000/items/${item.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteItem(item));
}


  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button 
        onClick={handleAddToCartClick}
        className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button
      onClick={handleDeleteClick}
      className="remove">Delete</button>
    </li>
  );
}

export default Item;
