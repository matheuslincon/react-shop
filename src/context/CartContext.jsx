import { createContext, useEffect, useState } from "react";
import { getAllCart } from "../services/cart-service";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false)

  const getCart = async () => {
    const data = await getAllCart();
    setCart(data);
  }

  useEffect(() => {
    getCart();
  }, [])

  const contextValue = { cart, setCart, checkout, setCheckout }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}