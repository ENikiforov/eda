import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    price: 0,
})

export default CartContext