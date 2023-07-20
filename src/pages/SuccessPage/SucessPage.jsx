import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { deleteFromCart } from "../../services/cart-service";

const SucessPage = () => {
  const {cart} = useContext(CartContext);
  console.log(cart)

  useEffect(() => {
      console.log("RUNNING USEEFFECT")
      cart.forEach((item) => {
        deleteFromCart(item.id)
      })
  }, [])
  

  return (
    <div>Sucess Page</div>
  )
}

export default SucessPage