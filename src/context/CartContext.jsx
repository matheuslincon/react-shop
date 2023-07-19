import { createContext, useEffect, useState } from "react";
import { getAllCart } from "../services/cart-service";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const data = await getAllCart();
    setCart(data);
  }

  useEffect(() => {
    getCart();
  }, [])

  console.log(cart)

  const contextValue = { cart, setCart }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}